import { courses } from '/data/courses.js';
import styles from '/styles/lesson.module.css'; // Импортируем стили как модуль
import { renderApp } from './main_menu.js';

let scrollPosition = 0; // Глобальная переменная для хранения позиции скролла

function handleLessonClick(courseId, lessonId) {
    const sidebar = document.querySelector(`.${styles.lessonSidebar}`);
    if (sidebar) {
        scrollPosition = sidebar.scrollTop; // Сохраняем текущую позицию скролла
    }

    const href = `/course/${courseId}/${lessonId}`;
    history.pushState(null, '', href); // Изменяем URL без перезагрузки страницы
    router(); // Вызываем маршрутизатор для рендера нового урока
}

function navigateToHome() {
    renderApp();
}

function router() {
    const path = window.location.pathname;
    if (path === '/') {
        // Рендеринг главной страницы
        renderHome(document.querySelector('#app'), courses);
    } else if (path.startsWith('/course/')) {
        // Обработка страниц курсов
        const courseId = path.split('/')[2];
        const lessonId = path.split('/')[3] || '1'; // По умолчанию выбираем первый урок
        const course = courses.find(c => c.id === parseInt(courseId));
        if (course) {
            // Рендеринг урока
            renderLesson(document.querySelector('#app'), lessonId);

            // Восстанавливаем позицию скролла после рендера
            const sidebar = document.querySelector(`.${styles.lessonSidebar}`);
            if (sidebar) {
                setTimeout(() => {
                    sidebar.scrollTop = scrollPosition;
                }, 0);
            }
        } else {
            console.error(`Курс с ID ${courseId} не найден.`);
            document.querySelector('#app').innerHTML = '<p>Курс не найден.</p>';
        }
    }
}

export function renderLesson(container, lessonId) {
    // Находим урок по его ID
    let course, lesson;
    for (const c of courses) {
        lesson = c.lessons.find(l => l.id === lessonId);
        if (lesson) {
            course = c;
            break;
        }
    }

    if (!course || !lesson) {
        console.error(`Урок с ID ${lessonId} не найден.`);
        container.innerHTML = '<p>Урок не найден.</p>';
        return;
    }

    // Рассчитываем прогресс
    const progress = calculateProgress(course);

    // Рендерим урок
    container.innerHTML = `
        <header class="${styles.lessonHeader}">
            <div class="${styles.lessonHeaderContainer}">
                <a href="#" class="${styles.lessonLogo}" data-page="home">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="WebDev Logo">
                    WebDev Курсы
                </a>
                <div class="${styles.progressWrapper}">
                    <progress value="${progress}" max="100"></progress>
                    <span>${progress}% завершено</span>
                </div>
                <nav>
                    <ul class="${styles.lessonNavMenu}">
                        <li><a href="#" class="${styles.lessonBtn}">Войти</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <div class="${styles.lessonContainer}">
            <div class="${styles.lessonSidebar}">
                <h2>${course.title}</h2>
                <ul class="${styles.lessonNav}">
                    ${course.lessons.map(l => `
                        <li class="${styles.lessonNavItem} ${isLessonCompleted(course.id, l.id) ? styles.lessonNavItemCompleted : ''}"
                            data-course-id="${course.id}"
                            data-lesson-id="${l.id}"
                            style="color: ${isLessonCompleted(course.id, l.id) ? 'green' : 'black'};">
                            ${l.title}
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="${styles.lessonContent}">
                ${renderLessonContent(lesson)}
            </div>
        </div>
    `;

    // Добавляем обработчики для специфических типов уроков
    if (lesson.type === 'quiz') {
        setupQuiz(container, lesson, course.id, lesson.id); // Передаем courseId и lessonId
    } else if (lesson.type === 'coding') {
        setupCodingEnvironment(container, lesson, course.id, lesson.id); // Передаем courseId и lessonId
    }

    // Добавляем обработчики кликов для элементов сайдбара
    setupSidebarClickHandlers();

    // Обработчик для логотипа
    const logoLink = container.querySelector(`.${styles.lessonLogo}`);
    if (logoLink) {
        logoLink.addEventListener('click', function (e) {
            e.preventDefault(); // Предотвращаем стандартное поведение ссылки
            navigateToHome(); // Переход на главную страницу
        });
    }
}

function renderLessonContent(lesson) {
    switch (lesson.type) {
        case 'theory':
            return `
                <h1>${lesson.title}</h1>
                <div class="${styles.theoryContent}">
                    ${lesson.content}
                </div>
            `;
        case 'quiz':
            return `
                <h1>${lesson.title}</h1>
                <div class="${styles.quizContainer}">
                    <div class="${styles.quizQuestion}">
                        <h3>${lesson.question}</h3>
                        <div class="${styles.quizOptions}">
                            ${lesson.options.map((option, index) => `
                                <div class="${styles.quizOption}" data-index="${index}">
                                    ${option}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        case 'coding':
            return `
                <h1>${lesson.title}</h1>
                <div class="${styles.codingContainer}">
                    <div class="${styles.codeEditor}">
                        <textarea id="code-input">${lesson.starterCode || ''}</textarea>
                    </div>
                    <button class="${styles.runButton}">Run Code</button>
                    <div class="${styles.output}" id="code-output"></div>
                </div>
            `;
        default:
            return '<p>Тип урока не поддерживается.</p>';
    }
}

// Функция для обработки кликов по ссылкам в сайдбаре
function setupSidebarClickHandlers() {
    document.querySelectorAll(`.${styles.lessonNavItem}`).forEach(item => {
        item.addEventListener('click', function () {
            const courseId = this.getAttribute('data-course-id');
            const lessonId = this.getAttribute('data-lesson-id');

            // Находим курс и урок
            const course = courses.find(c => c.id === parseInt(courseId));
            const lesson = course?.lessons.find(l => l.id === lessonId);

            if (lesson && lesson.type === 'theory') {
                // Помечаем урок как выполненный, только если это теоретический урок
                markLessonAsCompleted(courseId, lessonId);

                // Обновляем стиль элемента
                this.style.color = 'green';

                // Пересчитываем прогресс
                const progress = calculateProgress(course);

                // Обновляем шкалу прогресса в шапке
                const progressElement = document.querySelector(`.${styles.progressWrapper} progress`);
                const progressText = document.querySelector(`.${styles.progressWrapper} span`);
                if (progressElement && progressText) {
                    progressElement.value = progress;
                    progressText.textContent = `${progress}% завершено`;
                }
            }

            // Переходим к выбранному уроку
            handleLessonClick(courseId, lessonId);
        });
    });
}

function setupQuiz(container, lesson, courseId, lessonId) {
    const options = container.querySelectorAll(`.${styles.quizOption}`);
    options.forEach(option => {
        option.addEventListener('click', () => {
            const index = parseInt(option.dataset.index);
            if (index === lesson.correctAnswer) {
                option.style.backgroundColor = '#86efac'; // Зеленый цвет для правильного ответа
                markLessonAsCompleted(courseId, lessonId); // Помечаем задание как выполненное
            } else {
                option.style.backgroundColor = '#fca5a5'; // Красный цвет для неправильного ответа
            }
        });
    });
}

// Настройка среды выполнения кода
function setupCodingEnvironment(container, lesson, courseId, lessonId) {
    const runButton = container.querySelector(`.${styles.runButton}`);
    const codeInput = container.querySelector('#code-input');
    const output = container.querySelector(`.${styles.output}`);

    runButton.addEventListener('click', () => {
        try {
            const code = codeInput.value;
            const result = new Function(code)(); // Выполняем код
            output.textContent = result; // Выводим результат

            // Проверяем, соответствует ли вывод ожидаемому результату
            const isCorrect = lesson.tests.every(test => {
                const expectedOutput = test.expectedOutputContains;
                return result.includes(expectedOutput);
            });

            if (isCorrect) {
                markLessonAsCompleted(courseId, lessonId); // Помечаем задание как выполненное
                runButton.style.backgroundColor = 'green'; // Меняем цвет кнопки
            } else {
                output.textContent = 'Ошибка: Результат не соответствует ожиданиям.';
            }
        } catch (error) {
            output.textContent = `Error: ${error.message}`; // Обработка ошибок
        }
    });
}

function calculateProgress(course) {
    const totalLessons = course.lessons.length;
    const completedLessons = course.lessons.filter(lesson => isLessonCompleted(course.id, lesson.id)).length;
    return Math.round((completedLessons / totalLessons) * 100);
}

function markLessonAsCompleted(courseId, lessonId) {
    const key = `course-${courseId}-lesson-${lessonId}`;
    localStorage.setItem(key, 'completed');
}

function isLessonCompleted(courseId, lessonId) {
    const key = `course-${courseId}-lesson-${lessonId}`;
    return localStorage.getItem(key) === 'completed';
}