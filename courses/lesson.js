export function renderLesson(container, course, lessonId) {
    const lesson = course.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    container.innerHTML = `
        <div class="lesson-container">
            <div class="lesson-sidebar">
                <h2>${course.title}</h2>
                <ul class="lesson-nav">
                    ${course.lessons.map(l => `
                        <li class="lesson-nav-item ${l.id === lessonId ? 'active' : ''}"
                            data-link
                            onclick="window.location.href='/course/${course.id}/${l.id}'">
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

    // Add event listeners for specific lesson types
    if (lesson.type === 'quiz') {
        setupQuiz(container, lesson);
    } else if (lesson.type === 'coding') {
        setupCodingEnvironment(container, lesson);
    }
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
            return '<p>Lesson type not supported</p>';
    }
}

function setupQuiz(container, lesson) {
    const options = container.querySelectorAll('.quiz-option');
    options.forEach(option => {
        option.addEventListener('click', () => {
            const index = parseInt(option.dataset.index);
            if (index === lesson.correctAnswer) {
                option.style.backgroundColor = '#86efac';
            } else {
                option.style.backgroundColor = '#fca5a5';
            }
        });
    });
}

function setupCodingEnvironment(container, lesson) {
    const runButton = container.querySelector('.run-button');
    const codeInput = container.querySelector('#code-input');
    const output = container.querySelector('#code-output');

    runButton.addEventListener('click', () => {
        try {
            // Create a safe environment for code execution
            const code = codeInput.value;
            const result = new Function(code)();
            output.textContent = result;
        } catch (error) {
            output.textContent = `Error: ${error.message}`;
        }
    });
}