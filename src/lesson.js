import { courses } from '/data/courses.js';
import { router } from './main_menu.js'; // Импортируем функцию router

function handleLessonClick(courseId, lessonId) {
    const href = `/course/${courseId}/${lessonId}`;
    history.pushState(null, '', href); // Изменяем URL без перезагрузки страницы
    router(); // Вызываем маршрутизатор для рендера нового урока
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

    // Рендерим урок
    container.innerHTML = `
        <div class="lesson-container">
            <div class="lesson-sidebar">
                <h2>${course.title}</h2>
                <ul class="lesson-nav">
                    ${course.lessons.map(l => `
                        <li class="lesson-nav-item ${l.id === lessonId ? 'active' : ''}"
                            data-course-id="${course.id}"
                            data-lesson-id="${l.id}">
                            ${l.title}
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="lesson-content">
                ${renderLessonContent(lesson)}
            </div>
        </div>
    `;

    // Добавляем обработчики для специфических типов уроков
    if (lesson.type === 'quiz') {
        setupQuiz(container, lesson); // Настройка теста
    } else if (lesson.type === 'coding') {
        setupCodingEnvironment(container, lesson); // Настройка среды выполнения кода
    }

    // Добавляем обработчики кликов для элементов сайдбара
    setupSidebarClickHandlers();
}

function renderLessonContent(lesson) {
    switch (lesson.type) {
        case 'theory':
            return `
                <h1>${lesson.title}</h1>
                <div class="theory-content">
                    ${lesson.content}
                </div>
            `;
        case 'quiz':
            return `
                <h1>${lesson.title}</h1>
                <div class="quiz-container">
                    <div class="quiz-question">
                        <h3>${lesson.question}</h3>
                        <div class="quiz-options">
                            ${lesson.options.map((option, index) => `
                                <div class="quiz-option" data-index="${index}">
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
                <div class="coding-container">
                    <div class="code-editor">
                        <textarea id="code-input">${lesson.starterCode || ''}</textarea>
                    </div>
                    <button class="run-button">Run Code</button>
                    <div class="output" id="code-output"></div>
                </div>
            `;
        default:
            return '<p>Тип урока не поддерживается.</p>';
    }
}

// Функция для обработки кликов по ссылкам в сайдбаре
// Функция для настройки обработчиков кликов в сайдбаре
function setupSidebarClickHandlers() {
    document.querySelectorAll('.lesson-nav-item').forEach(item => {
        item.addEventListener('click', function () {
            const courseId = this.getAttribute('data-course-id');
            const lessonId = this.getAttribute('data-lesson-id');
            handleLessonClick(courseId, lessonId);
        });
    });
}

function setupQuiz(container, lesson) {
    const options = container.querySelectorAll('.quiz-option');
    options.forEach(option => {
        option.addEventListener('click', () => {
            const index = parseInt(option.dataset.index);
            if (index === lesson.correctAnswer) {
                option.style.backgroundColor = '#86efac'; // Зеленый цвет для правильного ответа
            } else {
                option.style.backgroundColor = '#fca5a5'; // Красный цвет для неправильного ответа
            }
        });
    });
}

// Настройка среды выполнения кода
function setupCodingEnvironment(container, lesson) {
    const runButton = container.querySelector('.run-button');
    const codeInput = container.querySelector('#code-input');
    const output = container.querySelector('#code-output');

    runButton.addEventListener('click', () => {
        try {
            const code = codeInput.value;
            const result = new Function(code)(); // Выполняем код
            output.textContent = result; // Выводим результат
        } catch (error) {
            output.textContent = `Error: ${error.message}`; // Обработка ошибок
        }
    });
}