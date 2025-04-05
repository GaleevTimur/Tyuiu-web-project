export const courses = [
    {
        id: 1, // Оставляем без изменений
        title: "JavaScript Basics",
        description: "Learn the fundamentals of JavaScript programming",
        image: "https://placehold.co/600x400?text=JavaScript+Basics",
        lessons: [
            {
                id: "1-1",
                type: "theory",
                title: "Introduction to JavaScript",
                content: `
                    <h2>Hello!</h2>
                    <p>Hi.</p>
                    <h3>What you will learn:</h3>
                    <ul>
                        <li>How to write basic code</li>
                        <li>Understanding variables</li>
                        <li>Working with functions</li>
                    </ul>
                `
            },
            {
                id: "1-2",
                type: "quiz",
                title: "Quiz Example",
                question: "What is JavaScript?",
                options: [
                    "A programming language",
                    "A markup language",
                    "A database system",
                    "All of the above"
                ],
                correctAnswer: 1
            },
            {
                id: "1-3",
                type: "coding",
                title: "Your First Code",
                starterCode: `// Write a function that returns "Hello, World!"
function greet() {
    // Your code here
}

greet();`,
                solution: `function greet() {
    return "Hello, World!";
}`,
                tests: [
                    {
                        input: [],
                        expected: "Hello, World!"
                    }
                ]
            }
        ]
    },
    {
        id: 2, // Новый модуль с id = 2
        title: "Продвинутые темы JavaScript",
        description: "Изучение продвинутых концепций JavaScript",
        image: "https://placehold.co/600x400?text=Advanced+JavaScript",
        lessons: [
            // Модуль 1: Введение в JavaScript
            {
                id: "2-1",
                type: "theory",
                title: "Основы синтаксиса JavaScript",
                content: `
                    <h2>Добро пожаловать в мир JavaScript!</h2>
                    <p>JavaScript — это язык программирования, который используется для создания интерактивных веб-страниц. Он работает прямо в браузере и позволяет добавлять динамическое поведение на страницу.</p>
                    <h3>Основные правила синтаксиса:</h3>
                    <ul>
                        <li><strong>Комментарии:</strong> Однострочные комментарии начинаются с <code>//</code>, а многострочные заключаются в <code>/* */</code>.</li>
                        <li><strong>Точка с запятой:</strong> В JavaScript точка с запятой (;) не обязательна, но рекомендуется использовать её для ясности.</li>
                        <li><strong>Чувствительность к регистру:</strong> JavaScript чувствителен к регистру, то есть <code>myVariable</code> и <code>myvariable</code> — это разные переменные.</li>
                        <li><strong>Блоки кода:</strong> Код группируется в блоки с помощью фигурных скобок <code>{}</code>.</li>
                    </ul>
                    <h3>Пример простого кода:</h3>
                    <pre><code>
// Приветствие
console.log("Привет, мир!");
                    </code></pre>
                `
            },
            {
                id: "2-2",
                type: "quiz",
                title: "Тест: Основы синтаксиса",
                question: "Какой символ используется для однострочного комментария в JavaScript?",
                options: [
                    "//",
                    "/* */",
                    "#",
                    "<!-- -->"
                ],
                correctAnswer: 1
            },
            {
                id: "2-3",
                type: "coding",
                title: "Практика: Первая программа",
                starterCode: `// Напишите функцию, которая выводит "Привет, мир!" в консоль
function sayHello() {
    // Ваш код здесь
}

sayHello();`,
                solution: `function sayHello() {
    console.log("Привет, мир!");
}`,
                tests: [
                    {
                        input: [],
                        expected: "console.log('Привет, мир!')"
                    }
                ]
            },
            // Тема 2: Переменные, типы данных и операторы
            {
                id: "2-4",
                type: "theory",
                title: "Переменные, типы данных и операторы",
                content: `
                    <h2>Переменные и типы данных</h2>
                    <p>Переменные используются для хранения данных. В JavaScript есть три способа объявления переменных:</p>
                    <ul>
                        <li><code>let</code>: Используется для переменных, которые могут изменяться.</li>
                        <li><code>const</code>: Используется для переменных, которые не должны изменяться после объявления.</li>
                        <li><code>var</code>: Устаревший способ объявления переменных, не рекомендуется к использованию.</li>
                    </ul>
                    <h3>Типы данных:</h3>
                    <ul>
                        <li><strong>Number:</strong> Числа, например, <code>42</code> или <code>3.14</code>.</li>
                        <li><strong>String:</strong> Строки, например, <code>"Привет"</code>.</li>
                        <li><strong>Boolean:</strong> Логические значения: <code>true</code> или <code>false</code>.</li>
                        <li><strong>Object:</strong> Объекты, например, <code>{ name: "John", age: 30 }</code>.</li>
                        <li><strong>Undefined:</strong> Переменная объявлена, но не имеет значения.</li>
                        <li><strong>Null:</strong> Отсутствие значения.</li>
                    </ul>
                    <h3>Операторы:</h3>
                    <ul>
                        <li><strong>Арифметические:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>.</li>
                        <li><strong>Сравнения:</strong> <code>==</code>, <code>===</code>, <code>!=</code>, <code>!==</code>, <code>></code>, <code><</code>.</li>
                        <li><strong>Логические:</strong> <code>&&</code>, <code>||</code>, <code>!</code>.</li>
                    </ul>
                    <h3>Пример:</h3>
                    <pre><code>
let a = 5;
let b = 10;
let sum = a + b; // 15
console.log(sum);
                    </code></pre>
                `
            },
            {
                id: "2-5",
                type: "quiz",
                title: "Тест: Переменные и типы данных",
                question: "Какой тип данных используется для хранения текста?",
                options: [
                    "Number",
                    "String",
                    "Boolean",
                    "Object"
                ],
                correctAnswer: 2
            },
            {
                id: "2-6",
                type: "coding",
                title: "Практика: Работа с переменными",
                starterCode: `// Создайте две переменные и найдите их сумму
let a = 5;
let b = 10;
// Ваш код здесь
console.log(result);`,
                solution: `let a = 5;
let b = 10;
let result = a + b;
console.log(result);`,
                tests: [
                    {
                        input: [],
                        expected: 15
                    }
                ]
            },
            // Тема 3: Условные конструкции и циклы
            {
                id: "2-7",
                type: "theory",
                title: "Условные конструкции и циклы",
                content: `
                    <h2>Условные конструкции</h2>
                    <p>Условные конструкции позволяют выполнять код в зависимости от определенных условий. Основные операторы:</p>
                    <ul>
                        <li><code>if</code>: Выполняется, если условие истинно.</li>
                        <li><code>else if</code>: Проверяет дополнительные условия.</li>
                        <li><code>else</code>: Выполняется, если ни одно из условий не истинно.</li>
                    </ul>
                    <h3>Пример:</h3>
                    <pre><code>
let age = 18;
if (age < 18) {
    console.log("Молодой");
} else if (age === 18) {
    console.log("Взрослый");
} else {
    console.log("Старший");
}
                    </code></pre>
                    <h2>Циклы</h2>
                    <p>Циклы используются для повторения кода. Основные виды циклов:</p>
                    <ul>
                        <li><code>for</code>: Цикл с известным количеством итераций.</li>
                        <li><code>while</code>: Цикл, который выполняется, пока условие истинно.</li>
                        <li><code>do...while</code>: Цикл, который выполняется хотя бы один раз.</li>
                    </ul>
                    <h3>Пример:</h3>
                    <pre><code>
for (let i = 0; i < 5; i++) {
    console.log(i); // Выведет числа от 0 до 4
}
                    </code></pre>
                `
            },
            {
                id: "2-8",
                type: "quiz",
                title: "Тест: Условные конструкции",
                question: "Какой оператор используется для проверки равенства значений и типов?",
                options: [
                    "==",
                    "===",
                    "!=",
                    "!=="
                ],
                correctAnswer: 2
            },
            {
                id: "2-9",
                type: "coding",
                title: "Практика: Условные конструкции",
                starterCode: `// Напишите функцию, которая возвращает "Четное", если число четное, и "Нечетное", если число нечетное
function checkEvenOdd(number) {
    // Ваш код здесь
}

console.log(checkEvenOdd(4));`,
                solution: `function checkEvenOdd(number) {
    return number % 2 === 0 ? "Четное" : "Нечетное";
}`,
                tests: [
                    {
                        input: [4],
                        expected: "Четное"
                    },
                    {
                        input: [7],
                        expected: "Нечетное"
                    }
                ]
            },
            // Тема 4: Функции и их использование
            {
                id: "2-10",
                type: "theory",
                title: "Функции и их использование",
                content: `
                    <h2>Функции</h2>
                    <p>Функции — это блоки кода, которые можно вызывать многократно. Они могут принимать параметры и возвращать значения.</p>
                    <h3>Объявление функции:</h3>
                    <pre><code>
function имяФункции(параметр1, параметр2) {
    // Тело функции
    return результат;
}
                    </code></pre>
                    <h3>Пример:</h3>
                    <pre><code>
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3)); // Выведет 5
                    </code></pre>
                    <h3>Анонимные функции:</h3>
                    <p>Функции также могут быть анонимными (без имени) и присваиваться переменным:</p>
                    <pre><code>
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5)); // Выведет 20
                    </code></pre>
                `
            },
            {
                id: "2-11",
                type: "quiz",
                title: "Тест: Функции",
                question: "Что возвращает функция, если нет ключевого слова return?",
                options: [
                    "undefined",
                    "null",
                    "0",
                    "Ошибка"
                ],
                correctAnswer: 1
            },
            {
                id: "2-12",
                type: "coding",
                title: "Практика: Создание функций",
                starterCode: `// Напишите функцию, которая принимает массив чисел и возвращает их сумму
function sumArray(numbers) {
    // Ваш код здесь
}

console.log(sumArray([1, 2, 3, 4]));`,
                solution: `function sumArray(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}`,
                tests: [
                    {
                        input: [[1, 2, 3, 4]],
                        expected: 10
                    },
                    {
                        input: [[5, 10, 15]],
                        expected: 30
                    }
                ]
            }
        ]
    }

];