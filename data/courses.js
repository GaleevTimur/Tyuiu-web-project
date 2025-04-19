export const courses = [
    {
        id: 1, // ID должен быть числом
        title: "Введение в HTML",
        description: "Изучите основы HTML и его структуру.",
        image: "https://placehold.co/600x400?text=Введение+в+HTML",
        lessons: [
            {
                id: "1-1", // ID урока может оставаться строкой
                type: "theory", // Тип урока должен быть на английском
                title: "Структура HTML-документа",
                content: `
                    <h2>Что такое HTML?</h2>
                    <p>HTML (HyperText Markup Language) — это язык разметки, который используется для создания веб-страниц.</p>
                    <h3>Структура HTML-документа:</h3>
                    <pre>
                        &lt;!DOCTYPE html&gt;
                        &lt;html&gt;
                            &lt;head&gt;
                                &lt;title&gt;Заголовок страницы&lt;/title&gt;
                            &lt;/head&gt;
                            &lt;body&gt;
                                &lt;h1&gt;Добро пожаловать!&lt;/h1&gt;
                                &lt;p&gt;Это пример HTML-документа.&lt;/p&gt;
                            &lt;/body&gt;
                        &lt;/html&gt;
                    </pre>
                `
            },
            {
                id: "1-2",
                type: "theory", // Тип урока должен быть на английском
                title: "Основные теги и атрибуты",
                content: `
                    <h2>Основные теги</h2>
                    <p>HTML состоит из различных тегов, которые определяют структуру и содержание веб-страницы.</p>
                    <h3>Примеры основных тегов:</h3>
                    <ul>
                        <li>&lt;p&gt; - абзац</li>
                        <li>&lt;a&gt; - ссылка</li>
                        <li>&lt;img&gt; - изображение</li>
                        <li>&lt;div&gt; - контейнер</li>
                    </ul>
                    <h3>Атрибуты тегов:</h3>
                    <p>Теги могут иметь атрибуты, которые предоставляют дополнительную информацию. Например:</p>
                    <pre>&lt;a href="https://example.com"&gt;Ссылка&lt;/a&gt;</pre>
                `
            },
            {
                id: "1-3",
                type: "theory", // Тип урока должен быть на английском
                title: "Семантическая верстка",
                content: `
                    <h2>Что такое семантическая верстка?</h2>
                    <p>Семантическая верстка подразумевает использование HTML-тегов, которые имеют смысл и описывают содержание.</p>
                    <h3>Примеры семантических тегов:</h3>
                    <ul>
                        <li>&lt<header&gt; - заголовок страницы</li>
                        <li>&lt<nav&gt; - навигация</li>
                        <li>&lt<article&gt; - статья</li>
                        <li>&lt<footer&gt; - подвал страницы</li>
                    </ul>
                `
            },
            {
                id: "1-4",
                type: "theory", // Тип урока должен быть на английском
                title: "Работа с текстом и ссылками",
                content: `
                    <h2>Форматирование текста</h2>
                    <p>HTML позволяет форматировать текст с помощью различных тегов.</p>
                    <ul>
                        <li>&lt;b&gt; - жирный текст</li>
                        <li>&lt;i&gt; - курсивный текст</li>
                        <li>&lt;u&gt; - подчеркнутый текст</li>
                    </ul>

                    <h3>Создание ссылок:</h3>
                    <p>Для создания ссылки используйте тег &lt;a&gt;. Например:</p>
                    <pre>&lt;a href="https://example.com"&gt;Перейти на сайт&lt;/a&gt;</pre>
                `
            },
            {
                id: "1-5",
                type: "quiz", // Тип урока должен быть на английском
                title: "Тест по основам HTML",
                question: "Какой тег используется для создания ссылки?",
                options: [
                    "&lt;p&gt;",
                    "&lt;a&gt;",
                    "&lt;b&gt;",
                    "&lt;i&gt;"
                ],
                correctAnswer: 1
            },
            {
                id: "1-6",
                type: "coding", // Тип урока должен быть на английском
                title: "Создайте свою первую веб-страницу",
                starterCode: `<!DOCTYPE html>
// Создайте базовую структуру HTML-документа
<html lang="ru">
<head>
// Ваш код здесь
</head>
<body>
// Ваш код здесь
</body>
</html>`,
                solution: `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Моя первая страница</title>
</head>
<body>
    <h1>Добро пожаловать на мою страницу!</h1>
    <p>Это мой первый опыт работы с HTML.</p>
    <a href="https://example.com">Перейти на сайт</a>
</body>
</html>`,
                tests: [
                    {
                        input: [],
                        expectedOutputContains: "<html"
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
            },
            {
                id: "2-13",
                type: "theory",
                title: "Что такое DOM и как с ним работать",
                content: `
                    <h2>Что такое DOM?</h2>
                    <p>DOM (Document Object Model) — это программный интерфейс для HTML-документов. Он представляет документ в виде дерева объектов, где каждый узел является объектом, представляющим часть документа.</p>
                    <h3>Основные операции:</h3>
                    <ul>
                        <li><strong>Выбор элементов:</strong> Выбор элементов на странице для их изменения.</li>
                        <li><strong>Изменение содержимого:</strong> Добавление, удаление или изменение элементов и их атрибутов.</li>
                        <li><strong>Обработка событий:</strong> Реакция на действия пользователя, такие как клики, ввод текста и т.д.</li>
                    </ul>
                    <h3>Пример:</h3>
                    <pre><code>
    // Выбор элемента по ID
    let element = document.getElementById("myElement");
    console.log(element);
                    </code></pre>
                `
            },
            {
                id: "2-14",
                type: "quiz",
                title: "Тест: Основы DOM",
                question: "Что означает аббревиатура DOM?",
                options: [
                    "Data Object Model",
                    "Document Object Model",
                    "Dynamic Object Model",
                    "Digital Object Management"
                ],
                correctAnswer: 2
            },
            {
                id: "2-15",
                type: "coding",
                title: "Практика: Выбор элементов",
                starterCode: `// Напишите код для выбора элемента с ID "header" и выведите его в консоль
    // Ваш код здесь`,
                solution: `let header = document.getElementById("header");
    console.log(header);`,
                tests: [
                    {
                        input: [],
                        expected: "document.getElementById('header')"
                    }
                ]
            },
            // Тема 2: Выбор и изменение элементов на странице
            {
                id: "2-16",
                type: "theory",
                title: "Выбор и изменение элементов на странице",
                content: `
                    <h2>Выбор элементов</h2>
                    <p>Для выбора элементов можно использовать различные методы:</p>
                    <ul>
                        <li><code>getElementById</code>: Выбирает элемент по уникальному ID.</li>
                        <li><code>getElementsByClassName</code>: Возвращает коллекцию элементов по классу.</li>
                        <li><code>getElementsByTagName</code>: Возвращает коллекцию элементов по тегу.</li>
                        <li><code>querySelector</code>: Выбирает первый элемент, соответствующий CSS-селектору.</li>
                        <li><code>querySelectorAll</code>: Выбирает все элементы, соответствующие CSS-селектору.</li>
                    </ul>
                    <h3>Изменение элементов:</h3>
                    <p>После выбора элемента можно изменить его содержимое, атрибуты или стиль:</p>
                    <pre><code>
    let element = document.querySelector(".title");
    element.textContent = "Новый заголовок";
    element.style.color = "red";
                    </code></pre>
                `
            },
            {
                id: "2-17",
                type: "quiz",
                title: "Тест: Выбор элементов",
                question: "Какой метод используется для выбора всех элементов по классу?",
                options: [
                    "getElementById",
                    "getElementsByClassName",
                    "querySelector",
                    "getElementsByTagName"
                ],
                correctAnswer: 2
            },
            {
                id: "2-18",
                type: "coding",
                title: "Практика: Изменение элементов",
                starterCode: `// Измените текст элемента с классом "title" на "Привет, мир!" и установите цвет текста на красный
    let element = document.querySelector(".title");
    // Ваш код здесь`,
                solution: `let element = document.querySelector(".title");
    element.textContent = "Привет, мир!";
    element.style.color = "red";`,
                tests: [
                    {
                        input: [],
                        expected: 'document.querySelector(".title").textContent = "Привет, мир!"'
                    }
                ]
            },
            // Тема 3: Создание и удаление элементов
            {
                id: "2-19",
                type: "theory",
                title: "Создание и удаление элементов",
                content: `
                    <h2>Создание элементов</h2>
                    <p>Для создания новых элементов используется метод <code>document.createElement</code>.</p>
                    <h3>Добавление элементов:</h3>
                    <p>После создания элемент можно добавить на страницу с помощью методов:</p>
                    <ul>
                        <li><code>appendChild</code>: Добавляет элемент в конец родительского элемента.</li>
                        <li><code>insertBefore</code>: Добавляет элемент перед указанным элементом.</li>
                    </ul>
                    <h3>Удаление элементов:</h3>
                    <p>Для удаления элемента используется метод <code>removeChild</code>.</p>
                    <h3>Пример:</h3>
                    <pre><code>
    // Создание нового элемента
    let newElement = document.createElement("div");
    newElement.textContent = "Новый элемент";
    document.body.appendChild(newElement);
                    </code></pre>
                `
            },
            {
                id: "2-20",
                type: "quiz",
                title: "Тест: Создание элементов",
                question: "Какой метод используется для создания нового элемента в DOM?",
                options: [
                    "createNode",
                    "createElement",
                    "newElement",
                    "addElement"
                ],
                correctAnswer: 2
            },
            {
                id: "2-21",
                type: "coding",
                title: "Практика: Создание элементов",
                starterCode: `// Создайте новый элемент <p> с текстом "Это новый параграф" и добавьте его в body
    // Ваш код здесь`,
                solution: `let newParagraph = document.createElement("p");
    newParagraph.textContent = "Это новый параграф";
    document.body.appendChild(newParagraph);`,
                tests: [
                    {
                        input: [],
                        expected: 'document.createElement("p")'
                    }
                ]
            },
            // Тема 4: Обработка событий
            {
                id: "2-22",
                type: "theory",
                title: "Обработка событий",
                content: `
                    <h2>Обработка событий</h2>
                    <p>JavaScript позволяет обрабатывать события, такие как клики, наведение мыши, ввод текста и т.д.</p>
                    <h3>Методы обработки событий:</h3>
                    <ul>
                        <li><code>addEventListener</code>: Добавляет обработчик события к элементу.</li>
                        <li><code>removeEventListener</code>: Удаляет обработчик события.</li>
                    </ul>
                    <h3>Пример:</h3>
                    <pre><code>
    let button = document.querySelector("button");
    button.addEventListener("click", function() {
        alert("Кнопка нажата!");
    });
                    </code></pre>
                `
            },
            {
                id: "2-23",
                type: "quiz",
                title: "Тест: Обработка событий",
                question: "Какой метод используется для добавления обработчика события?",
                options: [
                    "addHandler",
                    "onEvent",
                    "addEventListener",
                    "attachEvent"
                ],
                correctAnswer: 3
            },
            {
                id: "2-24",
                type: "coding",
                title: "Практика: Обработка событий",
                starterCode: `// Добавьте обработчик события на кнопку с ID "myButton", чтобы при клике выводилось сообщение "Кнопка нажата!"
    let button = document.getElementById("myButton");
    // Ваш код здесь`,
                solution: `let button = document.getElementById("myButton");
    button.addEventListener("click", function() {
        console.log("Кнопка нажата!");
    });`,
                tests: [
                    {
                        input: [],
                        expected: 'document.getElementById("myButton").addEventListener("click", ...)'
                    }
                ]
            }
        
        ]
    },
    {
        id: 4,
        title: "Продвинутый JavaScript",
        description: "Изучение продвинутых концепций JavaScript для профессиональной разработки",
        image: "https://placehold.co/600x400?text=Advanced+JavaScript",
        lessons: [
            {
                id: "4-1",
                type: "theory",
                title: "Асинхронное программирование: Promises и async/await",
                content: `
                    <h2>Асинхронность в JavaScript</h2>
                    <p>Изучите современные подходы к работе с асинхронным кодом.</p>
                    <h3>Основные темы:</h3>
                    <ul>
                        <li>Callback Hell и проблемы асинхронности</li>
                        <li>Создание и использование Promises</li>
                        <li>Цепочки промисов (Promise chaining)</li>
                        <li>Синтаксис async/await</li>
                        <li>Обработка ошибок в асинхронном коде</li>
                    </ul>
                `
            },
            {
                id: "4-2",
                type: "coding",
                title: "Практика с async/await",
                starterCode: `// Напишите асинхронную функцию fetchData, которая:
    // 1. Делает запрос к API (используйте fetch)
    // 2. Обрабатывает ответ в формате JSON
    // 3. Возвращает данные
    
    async function fetchData() {
        // Ваш код здесь
    }
    
    fetchData();`,
                solution: `async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    }`,
                tests: [
                    {
                        description: "Функция должна возвращать Promise",
                        testFunction: `async () => {
                            const result = fetchData();
                            return result instanceof Promise;
                        }`,
                        expected: true
                    }
                ]
            },
            {
                id: "4-3",
                type: "theory",
                title: "Продвинутая работа с DOM",
                content: `
                    <h2>Эффективное управление DOM</h2>
                    <p>Оптимизация работы с DOM для создания быстрых веб-приложений.</p>
                    <h3>Ключевые концепции:</h3>
                    <ul>
                        <li>Virtual DOM и Shadow DOM</li>
                        <li>Event delegation</li>
                        <li>Оптимизация перерисовки (reflow и repaint)</li>
                        <li>Работа с DOM Fragment</li>
                        <li>MutationObserver</li>
                    </ul>
                `
            },
            {
                id: "4-4",
                type: "coding",
                title: "Создание динамического интерфейса",
                starterCode: `// Создайте функцию, которая динамически генерирует таблицу 5x5
    // Каждая ячейка должна содержать произведение ее индексов (row * col)
    
    function generateTable(container) {
        // Ваш код здесь
    }`,
                solution: `function generateTable(container) {
        const table = document.createElement('table');
        
        for (let i = 0; i < 5; i++) {
            const row = document.createElement('tr');
            
            for (let j = 0; j < 5; j++) {
                const cell = document.createElement('td');
                cell.textContent = i * j;
                row.appendChild(cell);
            }
            
            table.appendChild(row);
        }
        
        container.appendChild(table);
    }`,
                tests: [
                    {
                        description: "Должна создаться таблица с 5 строками",
                        testFunction: `() => {
                            const div = document.createElement('div');
                            generateTable(div);
                            return div.querySelectorAll('tr').length === 5;
                        }`,
                        expected: true
                    }
                ]
            },
            {
                id: "4-5",
                type: "theory",
                title: "Модули и сборка проекта",
                content: `
                    <h2>Современная разработка на JavaScript</h2>
                    <p>Организация кода и инструменты сборки.</p>
                    <h3>Темы модуля:</h3>
                    <ul>
                        <li>ES6 Modules (import/export)</li>
                        <li>CommonJS и другие системы модулей</li>
                        <li>Настройка Webpack</li>
                        <li>Babel и транспиляция кода</li>
                        <li>Дерево зависимостей и оптимизация бандла</li>
                    </ul>
                `
            },
            {
                id: "4-6",
                type: "quiz",
                title: "Проверка знаний по модулям",
                question: "Какой синтаксис используется для экспорта по умолчанию в ES6 модулях?",
                options: [
                    "export default MyComponent",
                    "module.exports = MyComponent",
                    "exports.MyComponent = MyComponent",
                    "default export MyComponent"
                ],
                correctAnswer: 0
            },
            {
                id: "4-7",
                type: "theory",
                title: "Основы тестирования кода",
                content: `
                    <h2>Тестирование JavaScript приложений</h2>
                    <p>Обеспечение качества кода через автоматическое тестирование.</p>
                    <h3>Что изучим:</h3>
                    <ul>
                        <li>Виды тестов: unit, integration, e2e</li>
                        <li>Настройка Jest</li>
                        <li>Паттерны тестирования (AAA, mock/stub)</li>
                        <li>Тестирование асинхронного кода</li>
                        <li>Покрытие кода (code coverage)</li>
                    </ul>
                `
            },
            {
                id: "4-8",
                type: "coding",
                title: "Написание unit-тестов",
                starterCode: `// Протестируйте эту функцию с помощью Jest
    
    /**
     * Функция складывает два числа
     * @param {number} a 
     * @param {number} b 
     * @returns number
     */
    function sum(a, b) {
        return a + b;
    }
    
    // Напишите тесты ниже
    test('', () => {
        // ваш тест
    });`,
                solution: `test('суммирует 1 + 2 = 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    
    test('работает с отрицательными числами', () => {
        expect(sum(-1, -2)).toBe(-3);
    });
    
    test('возвращает NaN при нечисловых аргументах', () => {
        expect(sum('a', 'b')).toBeNaN();
    });`,
                tests: [
                    {
                        description: "Должно быть минимум 3 теста",
                        testFunction: `() => {
                            const testCount = solution.match(/test\s*\(/g).length;
                            return testCount >= 3;
                        }`,
                        expected: true
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Введение в веб-разработку",
        description: "Основы веб-разработки: технологии, инструменты и структура веб-приложений",
        image: "https://placehold.co/600x400?text=Веб-разработка",
        lessons: [
            {
                id: "5-1",
                type: "theory",
                title: "Что такое веб-разработка?",
                content: `
                    <h2>Что такое веб-разработка?</h2>
                    <p>Веб-разработка — это процесс создания сайтов и веб-приложений, которые доступны через интернет или внутри локальной сети. Она включает в себя проектирование, создание, тестирование и сопровождение веб-ресурсов.</p>
                    <p>Веб-разработка делится на две основные части:</p>
                    <ul>
                        <li><strong>Фронтенд</strong> — всё, что видит и с чем взаимодействует пользователь. Это визуальная часть сайта, создаваемая с помощью HTML, CSS и JavaScript.</li>
                        <li><strong>Бэкенд</strong> — внутренняя часть сайта: серверная логика, базы данных, API, безопасность и производительность.</li>
                    </ul>
                    <p>Также важную роль играет <strong>DevOps</strong> — автоматизация развёртывания, масштабирования и мониторинга приложений.</p>
                    <p>Примеры продуктов веб-разработки: сайты компаний, интернет-магазины, веб-приложения, SaaS-сервисы (например, Google Docs).</p>
                `
            },
            {
                id: "5-2",
                type: "quiz",
                title: "Основы веб-разработки",
                question: "Какие основные части включает в себя веб-разработка?",
                options: [
                    "Только создание дизайна сайта",
                    "Фронтенд и бэкенд разработка",
                    "Только написание кода на JavaScript",
                    "Только работа с базами данных"
                ],
                correctAnswer: 2
            },
            {
                id: "5-3",
                type: "theory",
                title: "Обзор технологий: HTML, CSS, JavaScript",
                content: `
                    <h2>Основные технологии веб-разработки</h2>
                    <p>Веб-разработка невозможна без понимания трёх главных технологий, составляющих основу любого сайта:</p>
                    <ul>
                        <li><strong>HTML (HyperText Markup Language)</strong> — это язык разметки, который определяет структуру веб-страницы: заголовки, абзацы, списки, таблицы, изображения и т.д.</li>
                        <li><strong>CSS (Cascading Style Sheets)</strong> — используется для оформления и стилизации элементов HTML. Позволяет задавать цвета, шрифты, отступы, анимации и адаптивную верстку.</li>
                        <li><strong>JavaScript</strong> — язык программирования, который добавляет интерактивность. С его помощью можно реагировать на действия пользователя, изменять содержимое страницы, работать с сервером и многое другое.</li>
                    </ul>
                    <p>Эти три технологии работают вместе, создавая полноценный пользовательский интерфейс.</p>
                `
            },
            {
                id: "5-4",
                type: "quiz",
                title: "Что делает JavaScript?",
                question: "Какую роль выполняет JavaScript на веб-странице?",
                options: [
                    "Оформление текста",
                    "Добавление интерактивности",
                    "Разметка контента",
                    "Создание базы данных"
                ],
                correctAnswer: 2
            },
            {
                id: "5-5",
                type: "theory",
                title: "Структура веб-приложения",
                content: `
                    <h2>Как устроено современное веб-приложение</h2>
                    <p>Веб-приложение обычно состоит из следующих компонентов:</p>
                    <ul>
                        <li><strong>Клиент (frontend)</strong> — интерфейс пользователя, работающий в браузере. Здесь обрабатываются действия пользователя и отображаются данные.</li>
                        <li><strong>Сервер (backend)</strong> — отвечает за обработку запросов, работу с базами данных и бизнес-логику.</li>
                        <li><strong>API</strong> — интерфейс для обмена данными между клиентом и сервером, часто в формате JSON через HTTP-запросы.</li>
                        <li><strong>База данных</strong> — хранит всю информацию (например, пользователей, заказы, сообщения).</li>
                    </ul>
                    <p>Разработка может происходить как с разделением этих ролей, так и в формате fullstack — когда один разработчик работает с обеими сторонами.</p>
                    <p>Для разработки часто используются фреймворки и библиотеки: React, Vue, Node.js, Django, Laravel и другие.</p>
                `
            },
            {
                id: "5-6",
                type: "coding",
                title: "Создание простой HTML-страницы",
                starterCode: `<!-- Создайте HTML-документ с заголовком "Привет, мир!" -->
    <!DOCTYPE html>
    <html>
    <head>
        <title>Моя страница</title>
    </head>
    <body>
        <!-- Ваш код здесь -->
    </body>
    </html>`,
                solution: `<!DOCTYPE html>
    <html>
    <head>
        <title>Моя страница</title>
    </head>
    <body>
        <h1>Привет, мир!</h1>
    </body>
    </html>`,
                tests: [
                    {
                        input: "<body><h1>Привет, мир!</h1></body>",
                        expected: true // Простой тест по наличию тега h1
                    }
                ]
            },
            {
                id: "5-7",
                type: "theory",
                title: "Инструменты разработчика",
                content: `
                    <h2>Инструменты веб-разработчика</h2>
                    <p>Современный веб-разработчик использует разнообразные инструменты, упрощающие работу и повышающие эффективность:</p>
                    <ul>
                        <li><strong>Редакторы кода</strong>: VS Code, Sublime Text, WebStorm — с подсветкой синтаксиса, автодополнением, интеграцией с терминалом и Git.</li>
                        <li><strong>Браузеры с инструментами разработчика</strong> (DevTools): позволяют инспектировать HTML/CSS, отлаживать JS, анализировать производительность и сеть.</li>
                        <li><strong>Системы контроля версий</strong>: Git и платформы GitHub, GitLab, Bitbucket. Позволяют отслеживать изменения в проекте и работать в команде.</li>
                        <li><strong>Платформы для развертывания</strong>: GitHub Pages, Vercel, Netlify, Firebase, а также традиционные хостинги и облачные платформы (AWS, Heroku).</li>
                    </ul>
                    <p>Освоение этих инструментов — важный шаг к становлению как профессионального разработчика.</p>
                `
            },
            {
                id: "5-8",
                type: "quiz",
                title: "Выбор редактора кода",
                question: "Какой инструмент используют для написания кода?",
                options: [
                    "Photoshop",
                    "Google Docs",
                    "Visual Studio Code",
                    "Telegram"
                ],
                correctAnswer: 3
            },
            // Модуль 2
            {
                id: "5-9",
                type: "theory",
                title: "Структура HTML-документа",
                content: `
                    <h2>Что такое HTML?</h2>
                    <p><strong>HTML (HyperText Markup Language)</strong> - стандартный язык разметки для создания веб-страниц. Это не язык программирования, а инструмент для описания структуры контента.</p>
                    
                    <h3>Базовый каркас документа</h3>
                    <p>Каждый HTML-документ должен содержать обязательные элементы:</p>
                    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Моя страница&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Привет, мир!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

                    <h3>Детальное описание элементов:</h3>
                    <div class="definition">
                        <p><strong>&lt;!DOCTYPE html&gt;</strong> - декларация типа документа, указывает браузеру, что это HTML5 документ.</p>
                        <p><strong>&lt;html&gt;</strong> - корневой элемент, содержит весь контент страницы. Атрибут <em>lang</em> задает язык документа.</p>
                        <p><strong>&lt;head&gt;</strong> - служебный раздел с метаданными: кодировкой, заголовком, ссылками на стили и скрипты.</p>
                        <p><strong>&lt;body&gt;</strong> - видимая часть документа, где размещается весь контент.</p>
                    </div>

                    <h3>Основные теги контента:</h3>
                    <ul>
                        <li><strong>&lt;h1&gt;-&lt;h6&gt;</strong> - заголовки разных уровней</li>
                        <li><strong>&lt;p&gt;</strong> - абзац текста</li>
                        <li><strong>&lt;a href="..."&gt;</strong> - гиперссылка</li>
                        <li><strong>&lt;img src="..." alt="..."&gt;</strong> - изображение</li>
                        <li><strong>&lt;ul&gt;/&lt;ol&gt; с &lt;li&gt;</strong> - списки</li>
                    </ul>
                `
            },
            // Тест по структуре HTML (дополненный)
            {
                id: "5-10",
                type: "quiz",
                title: "Проверка знаний: HTML-структура",
                question: "Какой элемент содержит метаинформацию о странице?",
                options: [
                    "&lt;meta&gt;",
                    "&lt;head&gt;",
                    "&lt;header&gt;",
                    "&lt;body&gt;"
                        ],
                correctAnswer: 1
                
            },
            // Урок 2: Семантическая верстка (расширенный)
            {
                id: "5-11",
                type: "theory",
                title: "Семантическая верстка",
                content: `
                    <h2>Что такое семантическая верстка?</h2>
                    <p><strong>Семантическая верстка</strong> - подход к созданию HTML-документов, где каждый элемент используется согласно его смысловому назначению. Это улучшает:</p>
                    <ul>
                        <li>Доступность для screen readers</li>
                        <li>SEO-оптимизацию</li>
                        <li>Читаемость кода</li>
                    </ul>

                    <h3>Семантические теги HTML5</h3>
                    <table class="semantic-tags">
                        <tr>
                            <th>Тег</th>
                            <th>Назначение</th>
                            <th>Аналог в div-верстке</th>
                        </tr>
                        <tr>
                            <td>&lt;header&gt;</td>
                            <td>Шапка сайта или раздела</td>
                            <td>&lt;div class="header"&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;nav&gt;</td>
                            <td>Навигационное меню</td>
                            <td>&lt;div class="nav"&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;main&gt;</td>
                            <td>Основное уникальное содержимое</td>
                            <td>&lt;div class="main"&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;article&gt;</td>
                            <td>Независимый контент (пост, новость)</td>
                            <td>&lt;div class="article"&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;section&gt;</td>
                            <td>Тематическая группа контента</td>
                            <td>&lt;div class="section"&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;aside&gt;</td>
                            <td>Боковая панель, доп. информация</td>
                            <td>&lt;div class="sidebar"&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;footer&gt;</td>
                            <td>Подвал сайта или раздела</td>
                            <td>&lt;div class="footer"&gt;</td>
                        </tr>
                    </table>

                    <h3>Пример правильной структуры</h3>
                    <pre><code>&lt;body&gt;
    &lt;header&gt;
        &lt;nav&gt;...&lt;/nav&gt;
    &lt;/header&gt;
    &lt;main&gt;
        &lt;article&gt;
            &lt;section&gt;...&lt;/section&gt;
            &lt;section&gt;...&lt;/section&gt;
        &lt;/article&gt;
        &lt;aside&gt;...&lt;/aside&gt;
    &lt;/main&gt;
    &lt;footer&gt;...&lt;/footer&gt;
&lt;/body&gt;</code></pre>
                `
            },
            // Урок 3: Основы CSS (расширенный)
            {
                id: "5-12",
                type: "theory",
                title: "Основы CSS: селекторы, свойства, значения",
                content: `
                    <h2>Что такое CSS?</h2>
                    <p><strong>CSS (Cascading Style Sheets)</strong> - язык стилей, определяющий внешний вид HTML-документов. Позволяет контролировать:</p>
                    <ul>
                        <li>Цвета и шрифты</li>
                        <li>Расположение элементов</li>
                        <li>Адаптацию под разные устройства</li>
                        <li>Анимации и эффекты</li>
                    </ul>

                    <h3>Синтаксис CSS</h3>
                    <pre><code>селектор {
    свойство: значение;
    другое-свойство: значение;
}</code></pre>

                    <h3>Типы селекторов</h3>
                    <table class="css-selectors">
                        <tr>
                            <th>Тип</th>
                            <th>Пример</th>
                            <th>Описание</th>
                        </tr>
                        <tr>
                            <td>По тегу</td>
                            <td><code>p { color: red; }</code></td>
                            <td>Применяется ко всем элементам &lt;p&gt;</td>
                        </tr>
                        <tr>
                            <td>По классу</td>
                            <td><code>.warning { ... }</code></td>
                            <td>Элементы с class="warning"</td>
                        </tr>
                        <tr>
                            <td>По ID</td>
                            <td><code>#header { ... }</code></td>
                            <td>Элемент с id="header" (уникальный!)</td>
                        </tr>
                        <tr>
                            <td>Атрибут</td>
                            <td><code>[type="text"] { ... }</code></td>
                            <td>Элементы с атрибутом type="text"</td>
                        </tr>
                    </table>

                    <h3>Каскадность и специфичность</h3>
                    <p><strong>Каскадность</strong> - порядок применения стилей:</p>
                    <ol>
                        <li>Стили браузера (user agent stylesheet)</li>
                        <li>Внешние CSS-файлы (в порядке подключения)</li>
                        <li>Стили в &lt;style&gt; внутри HTML</li>
                        <li>Inline-стили (атрибут style)</li>
                    </ol>
                    <p><strong>Специфичность</strong> - "вес" селектора (ID > класс > тег)</p>
                `
            },
            // Урок 4: Адаптивные макеты (расширенный)
            {
                id: "5-13",
                type: "theory",
                title: "Создание адаптивных макетов",
                content: `
                    <h2>Адаптивный дизайн</h2>
                    <p><strong>Адаптивный веб-дизайн (RWD)</strong> - подход, при котором страница автоматически подстраивается под размеры и характеристики устройства.</p>
                    
                    <h3>Ключевые технологии:</h3>
                    <div class="responsive-technologies">
                        <h4>1. Медиазапросы (Media Queries)</h4>
                        <p>Позволяют применять стили в зависимости от характеристик устройства:</p>
                        <pre><code>/* Для экранов шириной до 768px */
@media (max-width: 768px) {
    .menu { display: none; }
    .mobile-menu { display: block; }
}</code></pre>

                        <h4>2. Flexbox</h4>
                        <p>Модель для создания гибких макетов:</p>
                        <pre><code>.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}</code></pre>
                        <p><strong>Основные свойства:</strong></p>
                        <ul>
                            <li><code>flex-direction</code> - направление (row/column)</li>
                            <li><code>justify-content</code> - выравнивание по главной оси</li>
                            <li><code>align-items</code> - выравнивание по поперечной оси</li>
                            <li><code>flex-wrap</code> - перенос элементов</li>
                        </ul>

                        <h4>3. Относительные единицы измерения</h4>
                        <ul>
                            <li><strong>%</strong> - относительно родителя</li>
                            <li><strong>vw/vh</strong> - % от ширины/высоты окна</li>
                            <li><strong>rem</strong> - относительно размера шрифта html</li>
                            <li><strong>em</strong> - относительно размера шрифта элемента</li>
                        </ul>
                    </div>

                    <h3>Mobile-First подход</h3>
                    <p>Сначала разрабатывается мобильная версия, затем добавляются стили для больших экранов:</p>
                    <pre><code>/* Базовые стили (для mobile) */
.container { padding: 10px; }

/* Для планшетов */
@media (min-width: 768px) {
    .container { padding: 20px; }
}

/* Для десктопов */
@media (min-width: 1024px) {
    .container { 
        padding: 40px;
        max-width: 1200px;
        margin: 0 auto;
    }
}</code></pre>
                `
            },
            // Практические задания (дополненные)
            {
                id: "5-14",
                type: "coding",
                title: "Создание семантической страницы",
                starterCode: `<!DOCTYPE html>
<html>
<head>
    <title>Мой сайт</title>
</head>
<body>
    <!-- Ваш код здесь -->
</body>
</html>`,
                solution: `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Мой сайт</title>
</head>
<body>
    <header>
        <h1>Название сайта</h1>
        <nav>
            <ul>
                <li><a href="#">Главная</a></li>
                <li><a href="#">О нас</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <article>
            <h2>Заголовок статьи</h2>
            <p>Текст статьи...</p>
        </article>
        <aside>
            <h3>Реклама</h3>
            <p>Здесь может быть ваша реклама</p>
        </aside>
    </main>
    <footer>
        <p>© 2023 Мой сайт</p>
    </footer>
</body>
</html>`,
                tests: [
                    {
                        description: "Проверка наличия семантических тегов",
                        testFunction: (code) => 
                            code.includes("<header>") && 
                            code.includes("<nav>") && 
                            code.includes("<main>")
                    }
                ]
            },
            {
                id: "5-15",
                type: "coding",
                title: "Адаптивная карточка товара",
                starterCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        /* Ваши стили здесь */
    </style>
</head>
<body>
    <div class="product-card">
        <img src="product.jpg" alt="Товар">
        <h3>Название товара</h3>
        <p class="price">999 руб.</p>
        <button>Купить</button>
    </div>
</body>
</html>`,
                solution: `<!DOCTYPE html>
<html>
<head>
    <style>
        .product-card {
            border: 1px solid #ddd;
            padding: 15px;
            margin: 10px;
            text-align: center;
            max-width: 300px;
        }
        .product-card img {
            width: 100%;
            height: auto;
        }
        .price {
            color: green;
            font-weight: bold;
            font-size: 1.2em;
        }
        button {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
        }

        @media (max-width: 600px) {
            .product-card {
                max-width: 100%;
            }
            button {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="product-card">
        <img src="product.jpg" alt="Товар">
        <h3>Название товара</h3>
        <p class="price">999 руб.</p>
        <button>Купить</button>
    </div>
</body>
</html>`,
                tests: [
                    {
                        description: "Проверка медиазапроса",
                        testFunction: (code) => code.includes("@media")
                    }
                ]
            },
            // Модуль 3
            {
                id: "5-16",
                type: "theory",
                title: "Основы синтаксиса JavaScript",
                content: `
                    <h2>Что такое JavaScript?</h2>
                    <p><strong>JavaScript</strong> - язык программирования, который делает веб-страницы интерактивными. В отличие от HTML (структура) и CSS (стили), JS добавляет поведение.</p>
                    
                    <h3>Базовый синтаксис</h3>
                    <pre><code>// Однострочный комментарий
/* Многострочный комментарий */

console.log("Hello World!");</code></pre>

                    <h3>Основные концепции:</h3>
                    <div class="definition">
                        <p><strong>Инструкции</strong> - "предложения" в коде, выполняющие действия.</p>
                        <p><strong>Выражения</strong> - фрагменты кода, производящие значение.</p>
                        <p><strong>Чувствительность к регистру</strong> - <code>myVar</code> и <code>myvar</code> это разные переменные.</p>
                    </div>
                `
            },
            // Тест 5-17 (упрощённый вопрос из второго варианта)
            {
                id: "5-17",
                type: "quiz",
                title: "Проверка знаний: Синтаксис JS",
                question: "Какой символ используется для однострочных комментариев?",
                options: [
                    "//",
                    "#",
                    "--",
                    "/*"
                ],
                correctAnswer: 0
            },
            // Урок 5-18: Переменные и типы данных (полная лекция из первого варианта)
            {
                id: "5-18",
                type: "theory",
                title: "Работа с переменными и типами данных",
                content: `
                    <h2>Объявление переменных</h2>
                    <pre><code>let age = 25;         // Может изменяться
const PI = 3.14;      // Константа
var oldVar = "устаревший"; // Не рекомендуется</code></pre>

                    <h3>Типы данных в JavaScript</h3>
                    <table class="data-types">
                        <tr>
                            <th>Тип</th>
                            <th>Пример</th>
                        </tr>
                        <tr>
                            <td>Number</td>
                            <td><code>42, 3.14</code></td>
                        </tr>
                        <tr>
                            <td>String</td>
                            <td><code>"Hello"</code></td>
                        </tr>
                        <tr>
                            <td>Boolean</td>
                            <td><code>true, false</code></td>
                        </tr>
                    </table>
                `
            },
            // Практика 5-19: Работа с переменными (полное задание из первого варианта)
            {
                id: "5-19",
                type: "coding",
                title: "Создание переменных",
                starterCode: `// 1. Создайте константу для хранения курса доллара
// 2. Объявите переменную для суммы в рублях
// 3. Рассчитайте сумму в долларах`,
                solution: `const USD_RATE = 92.50;
let rubAmount = 5000;
let usdAmount = rubAmount / USD_RATE;`,
                tests: [
                    {
                        description: "Проверка использования const",
                        testFunction: (code) => code.includes("const USD_RATE")
                    }
                ]
            },
            // Урок 5-20: Условия и циклы (полная лекция из первого варианта)
            {
                id: "5-20",
                type: "theory",
                title: "Условия и циклы",
                content: `
                    <h2>Условные конструкции</h2>
                    <pre><code>if (age < 18) {
    console.log("Доступ запрещён");
} else {
    console.log("Доступ разрешён");
}</code></pre>

                    <h3>Цикл for</h3>
                    <pre><code>for (let i = 0; i < 5; i++) {
    console.log(i);
}</code></pre>
                `
            },
            // Тест 5-21 (упрощённый вопрос из второго варианта)
            {
                id: "5-21",
                type: "quiz",
                title: "Проверка знаний: Условия",
                question: "Какой оператор проверяет равенство по значению и типу?",
                options: [
                    "==",
                    "===",
                    "=",
                    "!="
                ],
                correctAnswer: 1
            },
            // Практика 5-22: FizzBuzz (полное задание из первого варианта)
            {
                id: "5-22",
                type: "coding",
                title: "Задача FizzBuzz",
                starterCode: `// Выведите числа от 1 до 100, заменяя кратные 3 на "Fizz",
// кратные 5 на "Buzz", а кратные 15 на "FizzBuzz"`,
                solution: `for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}`,
                tests: [
                    {
                        description: "Проверка FizzBuzz для 15",
                        testFunction: (code) => {
                            const logs = [];
                            const originalLog = console.log;
                            console.log = (msg) => logs.push(msg);
                            eval(code.replace(/console\.log/g, 'logs.push'));
                            console.log = originalLog;
                            return logs[14] === "FizzBuzz";
                        }
                    }
                ]
            },
            // Урок 5-23: Функции и объекты (полная лекция из первого варианта)
            {
                id: "5-23",
                type: "theory",
                title: "Функции и объекты",
                content: `
                    <h2>Функции</h2>
                    <pre><code>function greet(name) {
    return "Hello, " + name;
}</code></pre>

                    <h3>Объекты</h3>
                    <pre><code>const user = {
    name: "Alice",
    age: 25,
    sayHi() {
        console.log("Hi!");
    }
};</code></pre>
                `
            },
            // Тест 5-24 (упрощённый вопрос из второго варианта)
            {
                id: "5-24",
                type: "quiz",
                title: "Проверка знаний: Функции",
                question: "Как объявить функцию с именем 'sum'?",
                options: [
                    "let sum = function() {}",
                    "function sum() {}",
                    "const sum => {}",
                    "sum: function() {}"
                ],
                correctAnswer: 1
            },
            // Практика 5-25: Калькулятор (полное задание из первого варианта)
            {
                id: "5-25",
                type: "coding",
                title: "Создание калькулятора",
                starterCode: `// Напишите функцию calculator(a, b, operator) 
// которая выполняет операции +, -, *, /`,
                solution: `function calculator(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return "Ошибка";
    }
}`,
                tests: [
                    {
                        input: [10, 2, "/"],
                        expected: 5
                    }
                ]
            },
            // Module 4
            {
                
                id: "5-26",
                type: "theory",
                title: "Асинхронное программирование: Promises и async/await",
                content: `
                    <h2>Проблема асинхронности в JavaScript</h2>
                    <p>JavaScript - однопоточный язык, но использует Event Loop для обработки асинхронных операций:</p>
                    <ul>
                        <li>Сетевые запросы (AJAX, Fetch API)</li>
                        <li>Работа с файлами (в Node.js)</li>
                        <li>Таймеры (setTimeout, setInterval)</li>
                    </ul>

                    <h3>Эволюция подходов:</h3>
                    <div class="timeline">
                        <p><strong>Callback Hell (2010):</strong></p>
                        <pre><code>getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            console.log(c);
        });
    });
});</code></pre>

                        <p><strong>Promises (ES6, 2015):</strong></p>
                        <pre><code>getData()
    .then(a => getMoreData(a))
    .then(b => getMoreData(b))
    .then(c => console.log(c))
    .catch(err => console.error(err));</code></pre>

                        <p><strong>Async/Await (ES8, 2017):</strong></p>
                        <pre><code>async function loadData() {
    try {
        const a = await getData();
        const b = await getMoreData(a);
        const c = await getMoreData(b);
        console.log(c);
    } catch (err) {
        console.error(err);
    }
}</code></pre>
                    </div>

                    <h3>Создание Promise:</h3>
                    <pre><code>const delay = (ms) => new Promise((resolve) => {
    setTimeout(() => resolve('Готово!'), ms);
});

delay(1000).then(console.log); // Через 1 сек: "Готово!"</code></pre>

                    <h3>Параллельное выполнение:</h3>
                    <pre><code>// Promise.all - ожидает все
Promise.all([
    fetch('/user'),
    fetch('/posts')
]).then(([user, posts]) => {
    console.log(user, posts);
});

// Promise.race - первый завершенный
Promise.race([
    fetch('/fast-api'),
    timeout(5000) // Таймаут
]).then(firstResponse => {
    console.log(firstResponse);
});</code></pre>
                `
            },
            // Тест 5-27
            {
                id: "5-27",
                type: "quiz",
                title: "Проверка знаний: Асинхронность",
                question: "Какой метод Promise используется для обработки ошибок?",
                options: [
                    ".then()",
                    ".catch()",
                    ".finally()",
                    ".error()"
                ],
                correctAnswer: 1
            },
            // Практика 5-28
            {
                id: "5-28",
                type: "coding",
                title: "Цепочка асинхронных запросов",
                starterCode: `// Реализуйте функцию getUsersPosts(userId), которая:
// 1. Загружает пользователя по ID (/users/{userId})
// 2. Затем загружает его посты (/posts?userId={userId})
// 3. Возвращает объект { user, posts }

async function getUsersPosts(userId) {
    // Ваш код здесь
}`,
                solution: `async function getUsersPosts(userId) {
    const userResponse = await fetch(\`/users/\${userId}\`);
    const user = await userResponse.json();
    
    const postsResponse = await fetch(\`/posts?userId=\${userId}\`);
    const posts = await postsResponse.json();
    
    return { user, posts };
}`,
                tests: [
                    {
                        description: "Проверка цепочки запросов",
                        testFunction: (code) => code.includes("await fetch") && code.match(/await.+?\.json\(\)/g)?.length === 2
                    }
                ]
            },
            // Урок 5-29: Работа с DOM (расширенный)
            {
                id: "5-29",
                type: "theory",
                title: "Работа с DOM: полное руководство",
                content: `
                    <h2>DOM (Document Object Model)</h2>
                    <p>Иерархическое представление HTML-документа в виде дерева объектов:</p>
                    <img src="https://example.com/dom-tree.png" alt="DOM Tree Structure" style="max-width: 100%;">

                    <h3>Методы поиска элементов:</h3>
                    <table class="dom-methods">
                        <tr>
                            <th>Метод</th>
                            <th>Пример</th>
                            <th>Возвращает</th>
                        </tr>
                        <tr>
                            <td>getElementById</td>
                            <td><code>document.getElementById('header')</code></td>
                            <td>Один элемент</td>
                        </tr>
                        <tr>
                            <td>querySelector</td>
                            <td><code>document.querySelector('.btn')</code></td>
                            <td>Первый подходящий</td>
                        </tr>
                        <tr>
                            <td>querySelectorAll</td>
                            <td><code>document.querySelectorAll('div')</code></td>
                            <td>NodeList (коллекция)</td>
                        </tr>
                    </table>

                    <h3>Создание и изменение элементов:</h3>
                    <pre><code>// Создание
const div = document.createElement('div');
div.className = 'alert';

// Добавление контента
div.innerHTML = '&lt;strong&gt;Внимание!&lt;/strong&gt; Вы читаете текст';

// Вставка в DOM
document.body.append(div);

// Удаление через 1 секунду
setTimeout(() => div.remove(), 1000);</code></pre>

                    <h3>События:</h3>
                    <pre><code>// Делегирование событий
document.addEventListener('click', (event) => {
    if (event.target.matches('.delete-btn')) {
        event.target.closest('.item').remove();
    }
});

// Свои события
const customEvent = new CustomEvent('itemAdded', {
    detail: { id: 42 }
});
element.dispatchEvent(customEvent);</code></pre>
                `
            },
            // Тест 5-30
            {
                id: "5-30",
                type: "quiz",
                title: "Проверка знаний: DOM",
                question: "Какой метод создаёт новый HTML-элемент?",
                options: [
                    "document.findElement()",
                    "document.createElement()",
                    "document.newElement()",
                    "document.buildElement()"
                ],
                correctAnswer: 1
            },
            // Практика 5-31
            {
                id: "5-31",
                type: "coding",
                title: "Динамическая таблица",
                starterCode: `// Создайте функцию createTable(rows, cols), 
// которая генерирует HTML-таблицу заданного размера
// с ячейками, содержащими их координаты (row, col)

function createTable(rows, cols) {
    // Ваш код здесь
}`,
                solution: `function createTable(rows, cols) {
    const table = document.createElement('table');
    
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.textContent = \`(\${i}, \${j})\`;
            tr.append(td);
        }
        
        table.append(tr);
    }
    
    return table;
}`,
                tests: [
                    {
                        description: "Проверка создания таблицы 2x2",
                        testFunction: (code) => {
                            const table = eval(code + '; createTable(2, 2);');
                            return table.rows.length === 2 && 
                                   table.rows[0].cells.length === 2;
                        }
                    }
                ]
            },
            // Урок 5-32: Модули и сборка (расширенный)
            {
                id: "5-32",
                type: "theory",
                title: "Модули и сборка проекта",
                content: `
                    <h2>Система модулей в JavaScript</h2>
                    <p>Исторические варианты:</p>
                    <ul>
                        <li><strong>IIFE</strong> (2009): <code>(function() { ... })();</code></li>
                        <li><strong>CommonJS</strong> (Node.js): <code>module.exports / require</code></li>
                        <li><strong>ES Modules</strong> (ES6, современный стандарт): <code>export / import</code></li>
                    </ul>

                    <h3>ES Modules синтаксис:</h3>
                    <pre><code>// math.js
export const PI = 3.14;
export function sum(a, b) { return a + b; }
export default class Calculator { ... }

// app.js
import { PI, sum } from './math.js';
import Calculator from './math.js';</code></pre>

                    <h3>Сборка проектов:</h3>
                    <div class="build-tools">
                        <h4>Webpack</h4>
                        <p>Собирает модули в бандлы:</p>
                        <pre><code>// webpack.config.js
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
};</code></pre>

                        <h4>Babel</h4>
                        <p>Транспиляция современного JS для старых браузеров:</p>
                        <pre><code>// .babelrc
{
    "presets": ["@babel/preset-env"]
}</code></pre>
                    </div>
                `
            },
            // Тест 5-33
            {
                id: "5-33",
                type: "quiz",
                title: "Проверка знаний: Модули",
                question: "Как экспортировать функцию по умолчанию?",
                options: [
                    "export function myFunc() {}",
                    "export default function() {}",
                    "export = function() {}",
                    "default export function() {}"
                ],
                correctAnswer: 1
            },
            // Урок 5-34: Основы тестирования (расширенный)
            {
                id: "5-34",
                type: "theory",
                title: "Основы тестирования кода",
                content: `
                    <h2>Виды тестирования</h2>
                    <ul>
                        <li><strong>Unit-тесты</strong>: проверка отдельных функций</li>
                        <li><strong>Интеграционные</strong>: проверка взаимодействия компонентов</li>
                        <li><strong>E2E</strong>: тестирование всего приложения</li>
                    </ul>

                    <h3>Jest - популярный фреймворк</h3>
                    <pre><code>// sum.js
export function sum(a, b) { return a + b; }

// sum.test.js
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

describe('sum function', () => {
    it('works with positive numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });
    
    it('works with negative numbers', () => {
        expect(sum(-1, -2)).toBe(-3);
    });
});</code></pre>

                    <h3>Mock-функции</h3>
                    <pre><code>test('calls callback with data', () => {
    const mockCallback = jest.fn();
    fetchData(mockCallback);
    expect(mockCallback).toHaveBeenCalledWith('data');
});</code></pre>
                `
            },
            // Практика 5-35
            {
                id: "5-35",
                type: "coding",
                title: "Написание unit-теста",
                starterCode: `// Протестируйте функцию formatDate(date)
// Она принимает Date и возвращает строку "DD.MM.YYYY"

// Ваши тесты здесь
test('форматирует дату правильно', () => {
    // Проверьте что new Date(2023, 0, 1) → "01.01.2023"
});`,
                solution: `function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return \`\${day}.\${month}.\${year}\`;
}

test('форматирует дату правильно', () => {
    expect(formatDate(new Date(2023, 0, 1))).toBe("01.01.2023");
    expect(formatDate(new Date(2020, 11, 31))).toBe("31.12.2020");
});`,
                tests: [
                    {
                        description: "Проверка наличия теста",
                        testFunction: (code) => code.includes("expect(") && code.includes(").toBe(")
                    }
                ]
            },
            {
                id: "5-36",
                type: "theory",
                title: "Что такое фреймворки и библиотеки?",
                content: `
                    <h2>Что такое фреймворки и библиотеки?</h2>
                    <p>Фреймворки и библиотеки — это инструменты, которые упрощают разработку программного обеспечения.</p>
                    <h3>Основные различия:</h3>
                    <ul>
                        <li><strong>Библиотека:</strong> Набор готовых функций, которые вы можете использовать по своему усмотрению.</li>
                        <li><strong>Фреймворк:</strong> Структурированная среда, которая предоставляет правила и шаблоны для разработки приложений.</li>
                    </ul>
                    <h3>Примеры:</h3>
                    <ul>
                        <li>React, Vue.js, Angular — это фреймворки/библиотеки для создания пользовательских интерфейсов.</li>
                        <li>Lodash, Moment.js — это примеры библиотек для работы с данными и временем.</li>
                    </ul>
                `
            },
            {
                id: "5-37",
                type: "quiz",
                title: "Тест: Фреймворки и библиотеки",
                question: "Что из перечисленного является фреймворком?",
                options: [
                    "React",
                    "Lodash",
                    "jQuery",
                    "Moment.js"
                ],
                correctAnswer: 1
            },
            {
                id: "5-38",
                type: "theory",
                title: "Основы React: компоненты и состояние",
                content: `
                    <h2>Основы React</h2>
                    <p>React — это JavaScript-библиотека для создания пользовательских интерфейсов.</p>
                    <h3>Компоненты:</h3>
                    <ul>
                        <li>Компоненты — это строительные блоки React-приложений.</li>
                        <li>Компоненты могут быть функциональными или классовыми.</li>
                    </ul>
                    <h3>Состояние (State):</h3>
                    <ul>
                        <li>Состояние — это объект, который хранит данные компонента.</li>
                        <li>При изменении состояния компонент автоматически перерисовывается.</li>
                    </ul>
                `
            },
            {
                id: "5-39",
                type: "coding",
                title: "Создание простого компонента React",
                starterCode: `// Создайте функциональный компонент, который выводит "Hello, React!"
function App() {
    return (
        // Ваш код здесь
    );
}

export default App;`,
                solution: `function App() {
    return (
        <div>Hello, React!</div>
    );
}

export default App;`,
                tests: [
                    {
                        input: [],
                        expected: "<div>Hello, React!</div>"
                    }
                ]
            },
            {
                id: "5-40",
                type: "theory",
                title: "Основы Vue.js: реактивность и компоненты",
                content: `
                    <h2>Основы Vue.js</h2>
                    <p>Vue.js — это прогрессивный JavaScript-фреймворк для создания пользовательских интерфейсов.</p>
                    <h3>Реактивность:</h3>
                    <ul>
                        <li>Vue.js автоматически отслеживает изменения данных и обновляет DOM.</li>
                        <li>Для этого используется система реактивности.</li>
                    </ul>
                    <h3>Компоненты:</h3>
                    <ul>
                        <li>Компоненты Vue.js позволяют создавать переиспользуемые части интерфейса.</li>
                        <li>Каждый компонент имеет свой собственный шаблон, логику и стили.</li>
                    </ul>
                `
            },
            {
                id: "5-41",
                type: "coding",
                title: "Создание простого компонента Vue.js",
                starterCode: `// Создайте компонент Vue.js, который выводит "Hello, Vue!"
new Vue({
    el: '#app',
    data: {
        message: ''
    }
});`,
                solution: `new Vue({
    el: '#app',
    data: {
        message: 'Hello, Vue!'
    }
});`,
                tests: [
                    {
                        input: [],
                        expected: "Hello, Vue!"
                    }
                ]
            },
            {
                id: "5-42",
                type: "theory",
                title: "Сравнение фреймворков",
                content: `
                    <h2>Сравнение фреймворков</h2>
                    <p>React, Vue.js и Angular — это три популярных решения для создания интерфейсов.</p>
                    <h3>React:</h3>
                    <ul>
                        <li>Библиотека, а не полноценный фреймворк.</li>
                        <li>Гибкость в выборе инструментов.</li>
                    </ul>
                    <h3>Vue.js:</h3>
                    <ul>
                        <li>Простота освоения и использования.</li>
                        <li>Отличная документация.</li>
                    </ul>
                    <h3>Angular:</h3>
                    <ul>
                        <li>Полноценный фреймворк с большим количеством встроенных функций.</li>
                        <li>Подходит для крупных проектов.</li>
                    </ul>
                `
            },
            {
                id: "5-43",
                type: "quiz",
                title: "Тест: Сравнение фреймворков",
                question: "Какой фреймворк лучше всего подходит для начинающих?",
                options: [
                    "React",
                    "Vue.js",
                    "Angular",
                    "Нет правильного ответа"
                ],
                correctAnswer: 2
            },
            {
                id: "5-44",
                type: "theory",
                title: "Введение в Node.js и его экосистему",
                content: `
                    <h2>Что такое Node.js?</h2>
                    <p>Node.js — это среда выполнения JavaScript, которая позволяет запускать JavaScript на стороне сервера.</p>
                    <h3>Основные особенности:</h3>
                    <ul>
                        <li><strong>Асинхронность:</strong> Node.js использует неблокирующий ввод/вывод, что делает его быстрым и эффективным.</li>
                        <li><strong>Однопоточность:</strong> Основан на событийно-ориентированной модели.</li>
                        <li><strong>NPM (Node Package Manager):</strong> Экосистема пакетов для установки библиотек и инструментов.</li>
                    </ul>
                    <h3>Экосистема Node.js:</h3>
                    <ul>
                        <li><strong>Express.js:</strong> Фреймворк для создания веб-приложений и API.</li>
                        <li><strong>MongoDB:</strong> База данных NoSQL, часто используется с Node.js.</li>
                        <li><strong>Socket.IO:</strong> Для работы с WebSocket и реального времени.</li>
                    </ul>
                    <h3>Пример использования:</h3>
                    <p>Node.js часто используется для создания серверных приложений, микросервисов, чатов и RESTful API.</p>
                `
            },
            {
                id: "5-45",
                type: "quiz",
                title: "Тест: Введение в Node.js",
                question: "Какая из перечисленных особенностей характерна для Node.js?",
                options: [
                    "Блокирующий ввод/вывод",
                    "Асинхронность и неблокирующий ввод/вывод",
                    "Многопоточность",
                    "Компиляция в машинный код"
                ],
                correctAnswer: 2
            },
            {
                id: "5-46",
                type: "theory",
                title: "Создание простого сервера",
                content: `
                    <h2>Создание простого сервера в Node.js</h2>
                    <p>Node.js предоставляет встроенный модуль <code>http</code>, который позволяет создавать HTTP-серверы.</p>
                    <h3>Шаги для создания сервера:</h3>
                    <ol>
                        <li>Импортировать модуль <code>http</code>.</li>
                        <li>Создать сервер с помощью метода <code>createServer</code>.</li>
                        <li>Задать порт, на котором будет работать сервер.</li>
                        <li>Обработать входящие запросы и отправить ответ.</li>
                    </ol>
                    <h3>Пример кода:</h3>
                    <pre><code>
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000/');
});
                    </code></pre>
                    <p>Этот сервер отвечает на любой запрос текстом "Hello, World!".</p>
                `
            },
            // Задание на кодинг 5-47: Создание простого сервера
            {
                id: "5-47",
                type: "coding",
                title: "Создание простого сервера",
                starterCode: `// Создайте HTTP-сервер, который отвечает на запросы текстом "Hello, Node.js!"
const http = require('http');

const server = http.createServer((req, res) => {
    // Ваш код здесь
});

server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000/');
});`,
                solution: `const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Node.js!');
});

server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000/');
});`,
                tests: [
                    {
                        input: [],
                        expected: "Hello, Node.js!"
                    }
                ]
            },
            {
                id: "5-48",
                type: "theory",
                title: "Работа с Express.js",
                content: `
                    <h2>Express.js — фреймворк для Node.js</h2>
                    <p>Express.js упрощает создание веб-приложений и API, предоставляя удобные инструменты для маршрутизации, обработки запросов и middleware.</p>
                    <h3>Основные возможности:</h3>
                    <ul>
                        <li><strong>Маршрутизация:</strong> Управление URL-путями и HTTP-методами.</li>
                        <li><strong>Middleware:</strong> Промежуточные функции для обработки запросов.</li>
                        <li><strong>Шаблонизация:</strong> Интеграция с шаблонизаторами (например, EJS, Pug).</li>
                    </ul>
                    <h3>Пример кода:</h3>
                    <pre><code>
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000/');
});
                    </code></pre>
                    <p>Этот код создает сервер, который отвечает на GET-запрос к корню текстом "Hello, Express!".</p>
                `
            },
            // Задание на кодинг 5-49: Создание сервера с Express.js
            {
                id: "5-49",
                type: "coding",
                title: "Создание сервера с Express.js",
                starterCode: `// Создайте сервер Express.js, который отвечает на GET-запрос к "/hello" текстом "Hello, Express!"
const express = require('express');
const app = express();

// Ваш код здесь

app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000/');
});`,
                solution: `const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000/');
});`,
                tests: [
                    {
                        input: ["/hello"],
                        expected: "Hello, Express!"
                    }
                ]
            },
            // Лекция 5-50: Создание RESTful API
            {
                id: "5-50",
                type: "theory",
                title: "Создание RESTful API",
                content: `
                    <h2>RESTful API</h2>
                    <p>REST (Representational State Transfer) — это архитектурный стиль для проектирования сетевых приложений.</p>
                    <h3>Основные принципы:</h3>
                    <ul>
                        <li><strong>Клиент-серверная архитектура:</strong> Разделение логики клиента и сервера.</li>
                        <li><strong>Отсутствие состояния:</strong> Каждый запрос содержит всю необходимую информацию.</li>
                        <li><strong>HTTP-методы:</strong> Использование GET, POST, PUT, DELETE для CRUD-операций.</li>
                    </ul>
                    <h3>Пример API:</h3>
                    <pre><code>
const express = require('express');
const app = express();

let users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

// Получить всех пользователей
app.get('/users', (req, res) => {
    res.json(users);
});

// Добавить нового пользователя
app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000/');
});
                    </code></pre>
                    <p>Этот API позволяет получать список пользователей и добавлять новых.</p>
                `
            },
            // Задание на кодинг 5-51: Создание RESTful API
            {
                id: "5-51",
                type: "coding",
                title: "Создание RESTful API",
                starterCode: `// Создайте RESTful API для управления списком задач (todos)
const express = require('express');
const app = express();
app.use(express.json());

let todos = [{ id: 1, task: 'Learn Node.js' }];

// Ваш код здесь

app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000/');
});`,
                solution: `const express = require('express');
const app = express();
app.use(express.json());

let todos = [{ id: 1, task: 'Learn Node.js' }];

// Получить все задачи
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Добавить новую задачу
app.post('/todos', (req, res) => {
    const newTodo = { id: todos.length + 1, task: req.body.task };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000/');
});`,
                tests: [
                    {
                        input: ["/todos", { method: "GET" }],
                        expected: [{ id: 1, task: "Learn Node.js" }]
                    },
                    {
                        input: ["/todos", { method: "POST", body: { task: "Learn Express.js" } }],
                        expected: { id: 2, task: "Learn Express.js" }
                    }
                ]
            },
            //Module 7
            {
                id: "5-52",
                type: "theory",
                title: "Основы реляционных и нереляционных баз данных",
                content: `
                    <h2>Что такое базы данных?</h2>
                    <p>Базы данных — это системы для хранения, управления и извлечения данных.</p>
                    <h3>Реляционные базы данных:</h3>
                    <ul>
                        <li><strong>Структура:</strong> Данные хранятся в таблицах (строки и столбцы).</li>
                        <li><strong>Примеры:</strong> MySQL, PostgreSQL, SQLite.</li>
                        <li><strong>Особенности:</strong> Строгая схема данных, поддержка SQL.</li>
                    </ul>
                    <h3>Нереляционные базы данных:</h3>
                    <ul>
                        <li><strong>Структура:</strong> Данные хранятся в виде документов, графов или ключей-значений.</li>
                        <li><strong>Примеры:</strong> MongoDB, Redis, Cassandra.</li>
                        <li><strong>Особенности:</strong> Гибкая схема данных, высокая производительность.</li>
                    </ul>
                    <h3>Когда использовать:</h3>
                    <ul>
                        <li>Реляционные БД подходят для структурированных данных и сложных запросов.</li>
                        <li>Нереляционные БД лучше для больших объемов данных и масштабирования.</li>
                    </ul>
                `
            },
            // Тест 5-53: Основы реляционных и нереляционных баз данных
            {
                id: "5-53",
                type: "quiz",
                title: "Тест: Основы реляционных и нереляционных баз данных",
                question: "Какая база данных является нереляционной?",
                options: [
                    "MySQL",
                    "PostgreSQL",
                    "MongoDB",
                    "SQLite"
                ],
                correctAnswer: 3
            },
            // Лекция 5-54: Работа с MongoDB
            {
                id: "5-54",
                type: "theory",
                title: "Работа с MongoDB",
                content: `
                    <h2>MongoDB — нереляционная база данных</h2>
                    <p>MongoDB хранит данные в формате JSON-подобных документов.</p>
                    <h3>Основные понятия:</h3>
                    <ul>
                        <li><strong>Коллекция:</strong> Аналог таблицы в реляционных БД.</li>
                        <li><strong>Документ:</strong> Запись в коллекции, представленная в формате BSON (Binary JSON).</li>
                        <li><strong>Схема:</strong> В MongoDB схема данных не фиксирована, что позволяет гибко управлять данными.</li>
                    </ul>
                    <h3>Пример использования:</h3>
                    <pre><code>
const { MongoClient } = require('mongodb');

async function main() {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection('users');

        // Вставка документа
        await collection.insertOne({ name: 'Alice', age: 25 });

        // Поиск документов
        const users = await collection.find({}).toArray();
        console.log(users);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
                    </code></pre>
                    <p>Этот код подключается к MongoDB, создает коллекцию и выполняет операции с данными.</p>
                `
            },
            // Задание на кодинг 5-55: Работа с MongoDB
            {
                id: "5-55",
                type: "coding",
                title: "Работа с MongoDB",
                starterCode: `// Подключитесь к MongoDB и создайте коллекцию "products"
const { MongoClient } = require('mongodb');

async function main() {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection('products');

        // Ваш код здесь

    } finally {
        await client.close();
    }
}

main().catch(console.error);`,
                solution: `const { MongoClient } = require('mongodb');

async function main() {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection('products');

        // Вставка документа
        await collection.insertOne({ name: 'Laptop', price: 1000 });

        // Поиск документов
        const products = await collection.find({}).toArray();
        console.log(products);
    } finally {
        await client.close();
    }
}

main().catch(console.error);`,
                tests: [
                    {
                        input: [],
                        expected: [{ name: "Laptop", price: 1000 }]
                    }
                ]
            },
            // Лекция 5-56: Создание и управление базами данных
            {
                id: "5-56",
                type: "theory",
                title: "Создание и управление базами данных",
                content: `
                    <h2>Создание и управление базами данных</h2>
                    <p>Для работы с базами данных важно уметь создавать, обновлять и удалять данные.</p>
                    <h3>CRUD-операции:</h3>
                    <ul>
                        <li><strong>Create (Создание):</strong> Добавление новых записей.</li>
                        <li><strong>Read (Чтение):</strong> Получение данных из базы.</li>
                        <li><strong>Update (Обновление):</strong> Изменение существующих записей.</li>
                        <li><strong>Delete (Удаление):</strong> Удаление записей.</li>
                    </ul>
                    <h3>Пример CRUD в MongoDB:</h3>
                    <pre><code>
const { MongoClient } = require('mongodb');

async function main() {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection('items');

        // Create
        await collection.insertOne({ name: 'Book', quantity: 10 });

        // Read
        const items = await collection.find({}).toArray();
        console.log(items);

        // Update
        await collection.updateOne({ name: 'Book' }, { $set: { quantity: 20 } });

        // Delete
        await collection.deleteOne({ name: 'Book' });
    } finally {
        await client.close();
    }
}

main().catch(console.error);
                    </code></pre>
                    <p>Этот код демонстрирует выполнение всех CRUD-операций в MongoDB.</p>
                `
            },
            // Задание на кодинг 5-57: CRUD-операции в MongoDB
            {
                id: "5-57",
                type: "coding",
                title: "CRUD-операции в MongoDB",
                starterCode: `// Реализуйте CRUD-операции в MongoDB для коллекции "books"
const { MongoClient } = require('mongodb');

async function main() {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection('books');

        // Ваш код здесь

    } finally {
        await client.close();
    }
}

main().catch(console.error);`,
                solution: `const { MongoClient } = require('mongodb');

async function main() {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection('books');

        // Create
        await collection.insertOne({ title: 'JavaScript Basics', author: 'John Doe' });

        // Read
        const books = await collection.find({}).toArray();
        console.log(books);

        // Update
        await collection.updateOne({ title: 'JavaScript Basics' }, { $set: { author: 'Jane Doe' } });

        // Delete
        await collection.deleteOne({ title: 'JavaScript Basics' });
    } finally {
        await client.close();
    }
}

main().catch(console.error);`,
                tests: [
                    {
                        input: [],
                        expected: [{ title: "JavaScript Basics", author: "Jane Doe" }]
                    }
                ]
            },
            // Лекция 5-58: Интеграция базы данных с сервером
            {
                id: "5-58",
                type: "theory",
                title: "Интеграция базы данных с сервером",
                content: `
                    <h2>Интеграция базы данных с сервером</h2>
                    <p>Для создания полноценного приложения необходимо интегрировать базу данных с сервером.</p>
                    <h3>Шаги интеграции:</h3>
                    <ol>
                        <li><strong>Подключение к базе данных:</strong> Используйте драйвер или ORM для подключения.</li>
                        <li><strong>Создание API:</strong> Реализуйте маршруты для взаимодействия с базой данных.</li>
                        <li><strong>Обработка данных:</strong> Выполняйте CRUD-операции через API.</li>
                    </ol>
                    <h3>Пример интеграции с Express.js:</h3>
                    <pre><code>
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
app.use(express.json());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectToDatabase() {
    await client.connect();
    return client.db('test').collection('users');
}

app.get('/users', async (req, res) => {
    const collection = await connectToDatabase();
    const users = await collection.find({}).toArray();
    res.json(users);
});

app.post('/users', async (req, res) => {
    const collection = await connectToDatabase();
    const newUser = req.body;
    await collection.insertOne(newUser);
    res.status(201).json(newUser);
});

app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000/');
});
                    </code></pre>
                    <p>Этот код создает API для управления пользователями через MongoDB.</p>
                `
            },
            // Задание на кодинг 5-59: Интеграция базы данных с сервером
            {
                id: "5-59",
                type: "coding",
                title: "Интеграция базы данных с сервером",
                starterCode: `// Создайте API для управления задачами (tasks) с использованием MongoDB
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
app.use(express.json());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectToDatabase() {
    await client.connect();
    return client.db('test').collection('tasks');
}

// Ваш код здесь

app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000/');
});`,
                solution: `const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
app.use(express.json());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectToDatabase() {
    await client.connect();
    return client.db('test').collection('tasks');
}

app.get('/tasks', async (req, res) => {
    const collection = await connectToDatabase();
    const tasks = await collection.find({}).toArray();
    res.json(tasks);
});

app.post('/tasks', async (req, res) => {
    const collection = await connectToDatabase();
    const newTask = req.body;
    await collection.insertOne(newTask);
    res.status(201).json(newTask);
});

app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000/');
});`,
                tests: [
                    {
                        input: ["/tasks", { method: "GET" }],
                        expected: []
                    },
                    {
                        input: ["/tasks", { method: "POST", body: { task: "Learn MongoDB" } }],
                        expected: { task: "Learn MongoDB" }
                    }
                ]
            },
            //Module 8
            // Лекция 5-60: Создание полноценного веб-приложения
            {
                id: "5-60",
                type: "theory",
                title: "Создание полноценного веб-приложения",
                content: `
                    <h2>Как создать веб-приложение?</h2>
                    <p>Веб-приложение — это программа, которая работает в браузере и взаимодействует с сервером.</p>
                    <h3>Этапы разработки:</h3>
                    <ol>
                        <li><strong>Планирование:</strong> Определите функциональность и структуру приложения.</li>
                        <li><strong>Разработка фронтенда:</strong> Создайте интерфейс пользователя (HTML, CSS, JavaScript).</li>
                        <li><strong>Разработка бэкенда:</strong> Реализуйте API и логику работы с базой данных.</li>
                        <li><strong>Интеграция:</strong> Соедините фронтенд и бэкенд через HTTP-запросы.</li>
                        <li><strong>Тестирование:</strong> Проверьте работоспособность приложения.</li>
                        <li><strong>Развертывание:</strong> Выложите приложение на сервер.</li>
                    </ol>
                    <h3>Пример проекта:</h3>
                    <p>Создадим простое приложение для управления задачами (To-Do List).</p>
                `
            },
            // Тест 5-61: Создание полноценного веб-приложения
            {
                id: "5-61",
                type: "quiz",
                title: "Тест: Создание полноценного веб-приложения",
                question: "Какой этап разработки веб-приложения предшествует развертыванию?",
                options: [
                    "Планирование",
                    "Разработка фронтенда",
                    "Тестирование",
                    "Интеграция"
                ],
                correctAnswer: 3
            },
            // Лекция 5-62: Интеграция фронтенда и бэкенда
            {
                id: "5-62",
                type: "theory",
                title: "Интеграция фронтенда и бэкенда",
                content: `
                    <h2>Интеграция фронтенда и бэкенда</h2>
                    <p>Фронтенд и бэкенд общаются через HTTP-запросы. Фронтенд отправляет запросы, а бэкенд отвечает данными в формате JSON.</p>
                    <h3>Шаги интеграции:</h3>
                    <ol>
                        <li><strong>Создание API:</strong> Бэкенд предоставляет RESTful или GraphQL API.</li>
                        <li><strong>Обработка запросов:</strong> Фронтенд отправляет GET, POST, PUT, DELETE запросы.</li>
                        <li><strong>Отображение данных:</strong> Фронтенд отображает данные, полученные от бэкенда.</li>
                    </ol>
                    <h3>Пример интеграции:</h3>
                    <pre><code>
// Фронтенд (JavaScript)
fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(tasks => console.log(tasks));

// Бэкенд (Express.js)
app.get('/tasks', async (req, res) => {
    const tasks = await collection.find({}).toArray();
    res.json(tasks);
});
                    </code></pre>
                    <p>Этот код демонстрирует, как фронтенд получает данные от бэкенда.</p>
                `
            },
            // Задание на кодинг 5-63: Интеграция фронтенда и бэкенда
            {
                id: "5-63",
                type: "coding",
                title: "Интеграция фронтенда и бэкенда",
                starterCode: `// Создайте фронтенд для получения списка задач с бэкенда
async function fetchTasks() {
    // Ваш код здесь
}

fetchTasks();`,
                solution: `async function fetchTasks() {
    const response = await fetch('http://localhost:3000/tasks');
    const tasks = await response.json();
    console.log(tasks);
}

fetchTasks();`,
                tests: [
                    {
                        input: [],
                        expected: []
                    }
                ]
            },
            // Лекция 5-64: Оптимизация и тестирование приложения
            {
                id: "5-64",
                type: "theory",
                title: "Оптимизация и тестирование приложения",
                content: `
                    <h2>Оптимизация приложения</h2>
                    <p>Оптимизация улучшает производительность и удобство использования приложения.</p>
                    <h3>Способы оптимизации:</h3>
                    <ul>
                        <li><strong>Минификация:</strong> Сжатие CSS и JavaScript файлов.</li>
                        <li><strong>Кеширование:</strong> Хранение часто используемых данных в памяти.</li>
                        <li><strong>Ленивая загрузка:</strong> Загрузка ресурсов только при необходимости.</li>
                    </ul>
                    <h2>Тестирование приложения</h2>
                    <p>Тестирование гарантирует корректность работы приложения.</p>
                    <h3>Типы тестирования:</h3>
                    <ul>
                        <li><strong>Юнит-тесты:</strong> Проверка отдельных частей кода.</li>
                        <li><strong>Интеграционные тесты:</strong> Проверка взаимодействия компонентов.</li>
                        <li><strong>UI-тесты:</strong> Проверка пользовательского интерфейса.</li>
                    </ul>
                    <h3>Пример тестирования:</h3>
                    <pre><code>
// Юнит-тест для функции
function add(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});
                    </code></pre>
                `
            },
            // Тест 5-65: Оптимизация и тестирование приложения
            {
                id: "5-65",
                type: "quiz",
                title: "Тест: Оптимизация и тестирование приложения",
                question: "Какой тип тестирования проверяет отдельные части кода?",
                options: [
                    "Интеграционное тестирование",
                    "Юнит-тестирование",
                    "UI-тестирование",
                    "Нагрузочное тестирование"
                ],
                correctAnswer: 2
            },
            // Лекция 5-66: Развертывание приложения на сервере
            {
                id: "5-66",
                type: "theory",
                title: "Развертывание приложения на сервере",
                content: `
                    <h2>Развертывание приложения</h2>
                    <p>Развертывание — это процесс выкладывания приложения на сервер, чтобы оно стало доступным пользователям.</p>
                    <h3>Шаги развертывания:</h3>
                    <ol>
                        <li><strong>Подготовка кода:</strong> Убедитесь, что код готов к продакшену.</li>
                        <li><strong>Выбор хостинга:</strong> Используйте платформы, такие как Heroku, Vercel, AWS.</li>
                        <li><strong>Настройка сервера:</strong> Настройте окружение и базу данных.</li>
                        <li><strong>Деплой:</strong> Выложите приложение на сервер.</li>
                        <li><strong>Мониторинг:</strong> Отслеживайте работу приложения.</li>
                    </ol>
                    <h3>Пример деплоя на Heroku:</h3>
                    <pre><code>
# Шаги деплоя на Heroku
1. Создайте приложение на Heroku.
2. Подключите Git-репозиторий:
   git init
   heroku git:remote -a your-app-name
3. Загрузите код:
   git add .
   git commit -m "Initial commit"
   git push heroku main
4. Запустите приложение:
   heroku open
                    </code></pre>
                `
            },
            // Задание на кодинг 5-67: Развертывание приложения
            {
                id: "5-67",
                type: "coding",
                title: "Развертывание приложения",
                starterCode: `// Подготовьте команды для деплоя приложения на Heroku
// Ваш код здесь`,
                solution: `// Команды для деплоя на Heroku
git init
heroku git:remote -a your-app-name
git add .
git commit -m "Initial commit"
git push heroku main
heroku open`,
                tests: [
                    {
                        input: [],
                        expected: "Deployment successful"
                    }
                ]
            }
        ]
    },
    
    
    {
        id: 3, // Новый модуль с id = 3
        title: "Введение в React",
        description: "Изучение основ фреймворка React для создания пользовательских интерфейсов",
        image: "https://placehold.co/600x400?text=React+Basics",
        lessons: [
            {
                id: "3-1",
                type: "theory",
                title: "Что такое React?",
                content: `
                    <h2>Что такое React?</h2>
                    <p>React — это JavaScript-библиотека для создания пользовательских интерфейсов. Она разработана Facebook и активно используется для создания динамических веб-приложений.</p>
                    <h3>Основные особенности:</h3>
                    <ul>
                        <li>Компонентный подход</li>
                        <li>Декларативный стиль программирования</li>
                        <li>Однонаправленный поток данных</li>
                        <li>Работа с виртуальным DOM</li>
                    </ul>
                `
            },
            {
                id: "3-2",
                type: "theory",
                title: "Установка и настройка окружения",
                content: `
                    <h2>Установка и настройка окружения</h2>
                    <p>Для работы с React необходимо установить Node.js и npm (менеджер пакетов). После этого можно создать проект с помощью Create React App:</p>
                    <pre><code>npx create-react-app my-app</code></pre>
                    <p>Эта команда создаст базовый шаблон приложения React.</p>
                    <h3>Запуск приложения:</h3>
                    <pre><code>cd my-app
npm start</code></pre>
                    <p>Приложение будет доступно по адресу <a href="http://localhost:3000">http://localhost:3000</a>.</p>
                `
            },
            {
                id: "3-3",
                type: "theory",
                title: "Создание первого компонента",
                content: `
                    <h2>Создание первого компонента</h2>
                    <p>Компоненты — это строительные блоки React. Они могут быть функциональными или классовыми. Вот пример функционального компонента:</p>
                    <pre><code>function Welcome() {
    return <h1>Привет, мир!</h1>;
}</code></pre>
                    <p>Чтобы использовать компонент, его нужно импортировать и отрендерить в JSX:</p>
                    <pre><code><Welcome /></code></pre>
                `
            },
            {
                id: "3-4",
                type: "theory",
                title: "JSX и его особенности",
                content: `
                    <h2>JSX и его особенности</h2>
                    <p>JSX — это синтаксический сахар для вызова React.createElement(). Он позволяет писать HTML-подобный код внутри JavaScript.</p>
                    <h3>Пример JSX:</h3>
                    <pre><code>const element = <h1>Hello, world!</h1>;</code></pre>
                    <p>JSX позволяет встраивать JavaScript-выражения в фигурные скобки:</p>
                    <pre><code>const name = "Alice";
const element = <h1>Hello, {name}!</h1>;</code></pre>
                `
            },
            {
                id: "3-5",
                type: "quiz",
                title: "Тест: Что такое React?",
                question: "Что из перечисленного является основной задачей React?",
                options: [
                    "Создание серверных API",
                    "Создание пользовательских интерфейсов",
                    "Управление базами данных",
                    "Автоматизация тестирования"
                ],
                correctAnswer: 2
            },
            {
                id: "3-6",
                type: "quiz",
                title: "Тест: JSX",
                question: "Что такое JSX?",
                options: [
                    "Язык программирования",
                    "Синтаксис для описания UI в React",
                    "База данных",
                    "Фреймворк для тестирования"
                ],
                correctAnswer: 2
            },
            {
                id: "3-7",
                type: "coding",
                title: "Создание простого компонента",
                starterCode: `// Создайте функциональный компонент, который выводит текст "Привет, React!"
function Greeting() {
    // Ваш код здесь
}

export default Greeting;`,
                solution: `function Greeting() {
    return <h1>Привет, React!</h1>;
}

export default Greeting;`,
                tests: [
                    {
                        input: [],
                        expected: "<h1>Привет, React!</h1>"
                    }
                ]
            },
            {
                id: "3-8",
                type: "coding",
                title: "Использование JSX",
                starterCode: `// Используйте JSX для создания элемента, который отображает сумму двух чисел
function SumComponent({ a, b }) {
    // Ваш код здесь
}

export default SumComponent;`,
                solution: `function SumComponent({ a, b }) {
    return <p>Сумма: {a + b}</p>;
}

export default SumComponent;`,
                tests: [
                    {
                        input: [{ a: 5, b: 10 }],
                        expected: "<p>Сумма: 15</p>"
                    },
                    {
                        input: [{ a: 3, b: 7 }],
                        expected: "<p>Сумма: 10</p>"
                    }
                ]
            },
            {
                id: "3-9",
                type: "theory",
                title: "Создание функциональных и классовых компонентов",
                content: `
                    <h2>Создание функциональных и классовых компонентов</h2>
                    <p>В React есть два основных типа компонентов:</p>
                    <h3>Функциональные компоненты:</h3>
                    <pre><code>function Welcome(props) {
        return <h1>Привет, {props.name}!</h1>;
    }</code></pre>
                    <h3>Классовые компоненты:</h3>
                    <pre><code>class Welcome extends React.Component {
        render() {
            return <h1>Привет, {this.props.name}!</h1>;
        }
    }</code></pre>
                    <p>Функциональные компоненты проще и чаще используются в современном React.</p>
                `
            },
            {
                id: "3-10",
                type: "theory",
                title: "Передача данных через пропсы",
                content: `
                    <h2>Передача данных через пропсы</h2>
                    <p>Пропсы — это данные, которые передаются от родительского компонента к дочернему. Они доступны как аргумент функционального компонента или как this.props в классовых компонентах.</p>
                    <h3>Пример:</h3>
                    <pre><code>function Greeting(props) {
        return <h1>Привет, {props.name}!</h1>;
    }
    
    <Greeting name="Алиса" /></code></pre>
                    <p>Здесь "name" — это пропс, который передается в компонент Greeting.</p>
                `
            },
            {
                id: "3-11",
                type: "theory",
                title: "Композиция компонентов",
                content: `
                    <h2>Композиция компонентов</h2>
                    <p>Компоненты можно комбинировать друг с другом, создавая более сложные структуры. Это называется композицией компонентов.</p>
                    <h3>Пример:</h3>
                    <pre><code>function Header() {
        return <header><h1>Мой сайт</h1></header>;
    }
    
    function App() {
        return (
            <div>
                <Header />
                <p>Добро пожаловать на мой сайт!</p>
            </div>
        );
    }</code></pre>
                    <p>Здесь компонент Header используется внутри компонента App.</p>
                `
            },
            {
                id: "3-12",
                type: "theory",
                title: "Управление состоянием компонентов",
                content: `
                    <h2>Управление состоянием компонентов</h2>
                    <p>Состояние (state) — это объект, который хранит данные компонента. В функциональных компонентах состояние управляется через хук useState.</p>
                    <h3>Пример использования useState:</h3>
                    <pre><code>import React, { useState } from 'react';
    
    function Counter() {
        const [count, setCount] = useState(0);
    
        return (
            <div>
                <p>Текущее значение: {count}</p>
                <button onClick={() => setCount(count + 1)}>+1</button>
            </div>
        );
    }</code></pre>
                    <p>Здесь useState инициализирует состояние count и предоставляет функцию setCount для его изменения.</p>
                `
            },
            {
                id: "3-13",
                type: "quiz",
                title: "Тест: Типы компонентов",
                question: "Какие типы компонентов существуют в React?",
                options: [
                    "Функциональные и классовые",
                    "Статические и динамические",
                    "HTML и CSS",
                    "Синхронные и асинхронные"
                ],
                correctAnswer: 1
            },
            {
                id: "3-14",
                type: "quiz",
                title: "Тест: Пропсы",
                question: "Что такое пропсы в React?",
                options: [
                    "Глобальные переменные",
                    "Параметры, передаваемые в компонент",
                    "Состояние компонента",
                    "Методы для обработки событий"
                ],
                correctAnswer: 2
            },
            {
                id: "3-15",
                type: "coding",
                title: "Создание функционального компонента с пропсами",
                starterCode: `// Создайте функциональный компонент, который принимает пропс "name" и выводит текст "Привет, {name}!"
    function Greeting(props) {
        // Ваш код здесь
    }
    
    export default Greeting;`,
                solution: `function Greeting(props) {
        return <h1>Привет, {props.name}!</h1>;
    }
    
    export default Greeting;`,
                tests: [
                    {
                        input: [{ name: "Алиса" }],
                        expected: "<h1>Привет, Алиса!</h1>"
                    },
                    {
                        input: [{ name: "Боб" }],
                        expected: "<h1>Привет, Боб!</h1>"
                    }
                ]
            },
            {
                id: "3-16",
                type: "coding",
                title: "Управление состоянием с помощью useState",
                starterCode: `// Создайте компонент Counter, который увеличивает счетчик на 1 при нажатии кнопки
    import React, { useState } from 'react';
    
    function Counter() {
        // Инициализируйте состояние count и функцию setCount
        // Ваш код здесь
    
        return (
            <div>
                <p>Текущее значение: {/* Выведите значение count */}</p>
                <button onClick={() => {/* Увеличьте значение count на 1 */}}>+1</button>
            </div>
        );
    }
    
    export default Counter;`,
                solution: `import React, { useState } from 'react';
    
    function Counter() {
        const [count, setCount] = useState(0);
    
        return (
            <div>
                <p>Текущее значение: {count}</p>
                <button onClick={() => setCount(count + 1)}>+1</button>
            </div>
        );
    }
    
    export default Counter;`,
                tests: [
                    {
                        input: [],
                        expected: `<div><p>Текущее значение: 0</p><button>+1</button></div>`
                    }
                ]
            },
            {
                id: "3-17",
                type: "theory",
                title: "Введение в состояние (state)",
                content: `
                    <h2>Введение в состояние (state)</h2>
                    <p>Состояние (state) — это объект, который хранит данные компонента. Оно может изменяться в течение жизненного цикла компонента и вызывать перерисовку интерфейса.</p>
                    <h3>Пример:</h3>
                    <pre><code>import React, { useState } from 'react';
    
    function Counter() {
        const [count, setCount] = useState(0);
    
        return (
            <div>
                <p>Текущее значение: {count}</p>
                <button onClick={() => setCount(count + 1)}>+1</button>
            </div>
        );
    }</code></pre>
                    <p>Здесь useState инициализирует состояние count и предоставляет функцию setCount для его изменения.</p>
                `
            },
            {
                id: "3-18",
                type: "theory",
                title: "Хуки useState и useEffect",
                content: `
                    <h2>Хуки useState и useEffect</h2>
                    <p>Хуки — это функции, которые позволяют использовать состояние и другие возможности React без написания классовых компонентов.</p>
                    <h3>useState:</h3>
                    <pre><code>const [state, setState] = useState(initialValue);</code></pre>
                    <p>Используется для управления состоянием.</p>
                    <h3>useEffect:</h3>
                    <pre><code>useEffect(() => {
        // Выполняется после рендера
        return () => {
            // Очистка эффекта
        };
    }, [dependencies]);</code></pre>
                    <p>Используется для выполнения побочных эффектов, таких как запросы к API или подписка на события.</p>
                `
            },
            {
                id: "3-19",
                type: "theory",
                title: "Управление состоянием с помощью контекста",
                content: `
                    <h2>Управление состоянием с помощью контекста</h2>
                    <p>Контекст позволяет передавать данные через дерево компонентов без необходимости передачи пропсов на каждом уровне.</p>
                    <h3>Создание контекста:</h3>
                    <pre><code>const MyContext = React.createContext(defaultValue);</code></pre>
                    <h3>Предоставление контекста:</h3>
                    <pre><code><MyContext.Provider value={/* значение */}>
        <ChildComponent />
    </MyContext.Provider></code></pre>
                    <h3>Использование контекста:</h3>
                    <pre><code>const value = useContext(MyContext);</code></pre>
                    <p>Это позволяет избежать прокидывания пропсов через множество уровней компонентов.</p>
                `
            },
            {
                id: "3-20",
                type: "theory",
                title: "Оптимизация производительности",
                content: `
                    <h2>Оптимизация производительности</h2>
                    <p>React автоматически оптимизирует рендеринг компонентов, но иногда требуется дополнительная оптимизация.</p>
                    <h3>React.memo:</h3>
                    <pre><code>const MemoizedComponent = React.memo(MyComponent);</code></pre>
                    <p>Позволяет предотвратить ненужные рендеры компонента, если его пропсы не изменились.</p>
                    <h3>useMemo и useCallback:</h3>
                    <pre><code>const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    const memoizedCallback = useCallback(() => doSomething(), [dependencies]);</code></pre>
                    <p>useMemo кэширует результат вычислений, а useCallback кэширует функции.</p>
                `
            },
            {
                id: "3-21",
                type: "quiz",
                title: "Тест: Хуки React",
                question: "Что делает хук useEffect?",
                options: [
                    "Управляет состоянием компонента",
                    "Выполняет побочные эффекты после рендера",
                    "Передает данные между компонентами",
                    "Оптимизирует производительность"
                ],
                correctAnswer: 2
            },
            {
                id: "3-22",
                type: "quiz",
                title: "Тест: Контекст",
                question: "Для чего используется React Context?",
                options: [
                    "Для управления состоянием компонента",
                    "Для передачи данных через дерево компонентов",
                    "Для выполнения побочных эффектов",
                    "Для оптимизации производительности"
                ],
                correctAnswer: 2
            },
            {
                id: "3-23",
                type: "coding",
                title: "Использование хука useEffect",
                starterCode: `// Создайте компонент, который выводит сообщение в консоль при монтировании и очищает его при размонтировании
    import React, { useEffect } from 'react';
    
    function LifecycleComponent() {
        useEffect(() => {
            console.log('Компонент смонтирован');
    
            return () => {
                // Ваш код здесь
            };
        }, []);
    
        return <p>Проверьте консоль!</p>;
    }
    
    export default LifecycleComponent;`,
                solution: `import React, { useEffect } from 'react';
    
    function LifecycleComponent() {
        useEffect(() => {
            console.log('Компонент смонтирован');
    
            return () => {
                console.log('Компонент размонтирован');
            };
        }, []);
    
        return <p>Проверьте консоль!</p>;
    }
    
    export default LifecycleComponent;`,
                tests: [
                    {
                        input: [],
                        expected: "Console logs: 'Компонент смонтирован' and 'Компонент размонтирован'"
                    }
                ]
            },
            {
                id: "3-24",
                type: "coding",
                title: "Использование контекста",
                starterCode: `// Создайте контекст и используйте его для передачи значения "theme" в дочерний компонент
    import React, { createContext, useContext } from 'react';
    
    const ThemeContext = createContext();
    
    function ChildComponent() {
        const theme = useContext(ThemeContext);
        return <p>Текущая тема: {theme}</p>;
    }
    
    function ParentComponent() {
        return (
            <ThemeContext.Provider value="dark">
                {/* Ваш код здесь */}
            </ThemeContext.Provider>
        );
    }
    
    export default ParentComponent;`,
                solution: `import React, { createContext, useContext } from 'react';
    
    const ThemeContext = createContext();
    
    function ChildComponent() {
        const theme = useContext(ThemeContext);
        return <p>Текущая тема: {theme}</p>;
    }
    
    function ParentComponent() {
        return (
            <ThemeContext.Provider value="dark">
                <ChildComponent />
            </ThemeContext.Provider>
        );
    }
    
    export default ParentComponent;`,
                tests: [
                    {
                        input: [],
                        expected: "<p>Текущая тема: dark</p>"
                    }
                ]
            },
            {
                id: "3-25",
                type: "theory",
                title: "Установка и настройка React Router",
                content: `
                    <h2>Установка и настройка React Router</h2>
                    <p>React Router — это библиотека для маршрутизации в React-приложениях. Она позволяет создавать одностраничные приложения с навигацией между страницами без перезагрузки.</p>
                    <h3>Установка:</h3>
                    <pre><code>npm install react-router-dom</code></pre>
                    <h3>Настройка:</h3>
                    <pre><code>import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    
    function App() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        );
    }</code></pre>
                    <p>Здесь мы настраиваем маршруты для компонентов Home и About.</p>
                `
            },
            {
                id: "3-26",
                type: "theory",
                title: "Создание маршрутов и навигации",
                content: `
                    <h2>Создание маршрутов и навигации</h2>
                    <p>Для создания маршрутов используется компонент Route, а для навигации — Link.</p>
                    <h3>Пример:</h3>
                    <pre><code>import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
    
    function App() {
        return (
            <Router>
                <nav>
                    <Link to="/">Главная</Link> | 
                    <Link to="/about">О нас</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        );
    }</code></pre>
                    <p>Здесь Link используется для создания ссылок на маршруты.</p>
                `
            },
            {
                id: "3-27",
                type: "theory",
                title: "Передача параметров в маршрутах",
                content: `
                    <h2>Передача параметров в маршрутах</h2>
                    <p>React Router позволяет передавать параметры через URL. Для этого используется динамический сегмент пути.</p>
                    <h3>Пример:</h3>
                    <pre><code>import { useParams } from 'react-router-dom';
    
    function User() {
        const { id } = useParams();
        return <p>Пользователь с ID: {id}</p>;
    }
    
    function App() {
        return (
            <Routes>
                <Route path="/user/:id" element={<User />} />
            </Routes>
        );
    }</code></pre>
                    <p>Здесь useParams извлекает параметр id из URL.</p>
                `
            },
            {
                id: "3-28",
                type: "theory",
                title: "Защита маршрутов и аутентификация",
                content: `
                    <h2>Защита маршрутов и аутентификация</h2>
                    <p>Для защиты маршрутов можно использовать условный рендеринг или специальные компоненты-обертки.</p>
                    <h3>Пример защищенного маршрута:</h3>
                    <pre><code>function PrivateRoute({ children }) {
        const isAuthenticated = checkAuth(); // Функция проверки аутентификации
    
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
    
    function App() {
        return (
            <Routes>
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                } />
            </Routes>
        );
    }</code></pre>
                    <p>Здесь маршрут /dashboard доступен только авторизованным пользователям.</p>
                `
            },
            {
                id: "3-29",
                type: "quiz",
                title: "Тест: React Router",
                question: "Что делает компонент Link в React Router?",
                options: [
                    "Перенаправляет на другой маршрут",
                    "Создает ссылку для навигации",
                    "Защищает маршрут",
                    "Передает параметры в маршрут"
                ],
                correctAnswer: 2
            },
            {
                id: "3-30",
                type: "quiz",
                title: "Тест: Параметры маршрута",
                question: "Как получить параметры из URL в React Router?",
                options: [
                    "Используя props.params",
                    "Используя хук useParams",
                    "Используя контекст",
                    "Используя useState"
                ],
                correctAnswer: 2
            },
            {
                id: "3-31",
                type: "coding",
                title: "Создание маршрутов",
                starterCode: `// Создайте маршруты для страниц Home и About
    import React from 'react';
    import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
    
    function Home() {
        return <h1>Главная страница</h1>;
    }
    
    function About() {
        return <h1>О нас</h1>;
    }
    
    function App() {
        return (
            <Router>
                <nav>
                    {/* Добавьте ссылки на маршруты */}
                </nav>
                <Routes>
                    {/* Добавьте маршруты */}
                </Routes>
            </Router>
        );
    }
    
    export default App;`,
                solution: `import React from 'react';
    import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
    
    function Home() {
        return <h1>Главная страница</h1>;
    }
    
    function About() {
        return <h1>О нас</h1>;
    }
    
    function App() {
        return (
            <Router>
                <nav>
                    <Link to="/">Главная</Link> | 
                    <Link to="/about">О нас</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        );
    }
    
    export default App;`,
                tests: [
                    {
                        input: [],
                        expected: "<h1>Главная страница</h1>"
                    }
                ]
            },
            {
                id: "3-32",
                type: "coding",
                title: "Передача параметров в маршруты",
                starterCode: `// Создайте маршрут для отображения информации о пользователе по ID
    import React from 'react';
    import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
    
    function User() {
        const { id } = useParams();
        return <p>Пользователь с ID: {id}</p>;
    }
    
    function App() {
        return (
            <Router>
                <Routes>
                    {/* Добавьте маршрут с параметром */ }
                </Routes>
            </Router>
        );
    }
    
    export default App;`,
                solution: `import React from 'react';
    import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
    
    function User() {
        const { id } = useParams();
        return <p>Пользователь с ID: {id}</p>;
    }
    
    function App() {
        return (
            <Router>
                <Routes>
                    <Route path="/user/:id" element={<User />} />
                </Routes>
            </Router>
        );
    }
    
    export default App;`,
                tests: [
                    {
                        input: [{ id: "123" }],
                        expected: "<p>Пользователь с ID: 123</p>"
                    }
                ]
            },
            {
                id: "3-33",
                type: "theory",
                title: "Запросы к API с помощью fetch и axios",
                content: `
                    <h2>Запросы к API с помощью fetch и axios</h2>
                    <p>Для взаимодействия с внешними API можно использовать fetch (встроенный в браузер) или axios (популярная библиотека).</p>
                    <h3>fetch:</h3>
                    <pre><code>fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Ошибка:', error));</code></pre>
                    <h3>axios:</h3>
                    <pre><code>import axios from 'axios';
    
    axios.get('https://api.example.com/data')
        .then(response => console.log(response.data))
        .catch(error => console.error('Ошибка:', error));</code></pre>
                    <p>Axios удобен тем, что автоматически преобразует ответ в JSON.</p>
                `
            },
            {
                id: "3-34",
                type: "theory",
                title: "Обработка ответов и ошибок",
                content: `
                    <h2>Обработка ответов и ошибок</h2>
                    <p>При работе с API важно корректно обрабатывать успешные ответы и ошибки.</p>
                    <h3>Пример:</h3>
                    <pre><code>function fetchData() {
        fetch('https://api.example.com/data')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сетевая ошибка');
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error('Ошибка:', error.message));
    }</code></pre>
                    <p>Здесь проверяется статус ответа, и если он не успешный, выбрасывается ошибка.</p>
                `
            },
            {
                id: "3-35",
                type: "theory",
                title: "Создание форм и обработка данных",
                content: `
                    <h2>Создание форм и обработка данных</h2>
                    <p>Формы позволяют собирать данные от пользователя и отправлять их на сервер.</p>
                    <h3>Пример формы:</h3>
                    <pre><code>function FormComponent() {
        const [name, setName] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Отправлено имя:', name);
        };
    
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Введите имя"
                />
                <button type="submit">Отправить</button>
            </form>
        );
    }</code></pre>
                    <p>Здесь состояние управляет значением поля ввода, а форма отправляет данные при нажатии кнопки.</p>
                `
            },
            {
                id: "3-36",
                type: "theory",
                title: "Интеграция с внешними API",
                content: `
                    <h2>Интеграция с внешними API</h2>
                    <p>Для интеграции с внешними API нужно выполнить запросы и отобразить полученные данные.</p>
                    <h3>Пример:</h3>
                    <pre><code>function UserList() {
        const [users, setUsers] = useState([]);
    
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => setUsers(data));
        }, []);
    
        return (
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        );
    }</code></pre>
                    <p>Здесь выполняется запрос к API, и данные отображаются в виде списка.</p>
                `
            },
            {
                id: "3-37",
                type: "quiz",
                title: "Тест: Запросы к API",
                question: "Какой метод используется для отправки GET-запроса с помощью fetch?",
                options: [
                    "fetch.post()",
                    "fetch.get()",
                    "fetch()",
                    "axios.get()"
                ],
                correctAnswer: 3
            },
            {
                id: "3-38",
                type: "quiz",
                title: "Тест: Обработка ошибок",
                question: "Что происходит, если ответ API имеет статус 404?",
                options: [
                    "Ошибки нет, данные успешно загружены",
                    "Выбрасывается ошибка сети",
                    "Выполняется блок catch",
                    "Страница перезагружается"
                ],
                correctAnswer: 3
            },
            {
                id: "3-39",
                type: "coding",
                title: "Запрос к API с использованием fetch",
                starterCode: `// Создайте компонент, который загружает список пользователей с API и отображает их имена
    import React, { useState, useEffect } from 'react';
    
    function UserList() {
        const [users, setUsers] = useState([]);
    
        useEffect(() => {
            // Ваш код здесь
        }, []);
    
        return (
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        );
    }
    
    export default UserList;`,
                solution: `import React, { useState, useEffect } from 'react';
    
    function UserList() {
        const [users, setUsers] = useState([]);
    
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => setUsers(data))
                .catch(error => console.error('Ошибка:', error));
        }, []);
    
        return (
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        );
    }
    
    export default UserList;`,
                tests: [
                    {
                        input: [],
                        expected: "<ul><li>Leanne Graham</li><li>Ervin Howell</li>...</ul>"
                    }
                ]
            },
            {
                id: "3-40",
                type: "coding",
                title: "Создание формы и отправка данных",
                starterCode: `// Создайте форму, которая собирает имя пользователя и выводит его в консоль при отправке
    import React, { useState } from 'react';
    
    function FormComponent() {
        const [name, setName] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            // Ваш код здесь
        };
    
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Введите имя"
                />
                <button type="submit">Отправить</button>
            </form>
        );
    }
    
    export default FormComponent;`,
                solution: `import React, { useState } from 'react';
    
    function FormComponent() {
        const [name, setName] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Отправлено имя:', name);
        };
    
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Введите имя"
                />
                <button type="submit">Отправить</button>
            </form>
        );
    }
    
    export default FormComponent;`,
                tests: [
                    {
                        input: [{ name: "Алиса" }],
                        expected: "Console logs: 'Отправлено имя: Алиса'"
                    }
                ]
            },
            {
                id: "3-41",
                type: "theory",
                title: "Создание полноценного веб-приложения",
                content: `
                    <h2>Создание полноценного веб-приложения</h2>
                    <p>Полноценное веб-приложение включает фронтенд (интерфейс пользователя) и бэкенд (логика сервера). React используется для создания фронтенда.</p>
                    <h3>Этапы разработки:</h3>
                    <ul>
                        <li>Проектирование структуры приложения</li>
                        <li>Создание компонентов</li>
                        <li>Настройка маршрутизации</li>
                        <li>Интеграция с API</li>
                    </ul>
                    <h3>Пример структуры:</h3>
                    <pre><code>src/
    ├── components/      # Компоненты
    ├── pages/           # Страницы
    ├── App.js           # Главный компонент
    ├── index.js         # Точка входа
    └── api.js           # Логика работы с API</code></pre>
                    <p>Такая структура помогает организовать код и сделать его более поддерживаемым.</p>
                `
            },
            {
                id: "3-42",
                type: "theory",
                title: "Интеграция с фронтендом и бэкендом",
                content: `
                    <h2>Интеграция с фронтендом и бэкендом</h2>
                    <p>Фронтенд взаимодействует с бэкендом через API. Для этого используются HTTP-запросы (GET, POST, PUT, DELETE).</p>
                    <h3>Пример интеграции:</h3>
                    <pre><code>// api.js
    import axios from 'axios';
    
    const API_URL = 'https://api.example.com';
    
    export const fetchUsers = () => axios.get(\`\${API_URL}/users\`);
    export const createUser = (userData) => axios.post(\`\${API_URL}/users\`, userData);
    
    // UserList.js
    import { useEffect, useState } from 'react';
    import { fetchUsers } from './api';
    
    function UserList() {
        const [users, setUsers] = useState([]);
    
        useEffect(() => {
            fetchUsers()
                .then(response => setUsers(response.data))
                .catch(error => console.error('Ошибка:', error));
        }, []);
    
        return (
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        );
    }</code></pre>
                    <p>Здесь API-функции вынесены в отдельный файл для повторного использования.</p>
                `
            },
            {
                id: "3-43",
                type: "theory",
                title: "Оптимизация и тестирование приложения",
                content: `
                    <h2>Оптимизация и тестирование приложения</h2>
                    <p>Оптимизация повышает производительность приложения, а тестирование гарантирует его надежность.</p>
                    <h3>Оптимизация:</h3>
                    <ul>
                        <li>Использование React.memo для предотвращения лишних ререндеров</li>
                        <li>Кэширование данных с помощью useMemo и useCallback</li>
                        <li>Ленивая загрузка компонентов (React.lazy)</li>
                    </ul>
                    <h3>Тестирование:</h3>
                    <ul>
                        <li>Юнит-тесты (Jest)</li>
                        <li>Тесты компонентов (React Testing Library)</li>
                        <li>Интеграционные тесты</li>
                    </ul>
                `
            },
            {
                id: "3-44",
                type: "theory",
                title: "Развертывание приложения на сервере",
                content: `
                    <h2>Развертывание приложения на сервере</h2>
                    <p>Для развертывания React-приложения можно использовать такие сервисы, как Netlify, Vercel или GitHub Pages.</p>
                    <h3>Шаги развертывания:</h3>
                    <ol>
                        <li>Сборка приложения: <code>npm run build</code></li>
                        <li>Загрузка собранного приложения на сервер</li>
                        <li>Настройка домена и HTTPS</li>
                    </ol>
                    <h3>Пример развертывания на Netlify:</h3>
                    <pre><code>1. Загрузите репозиторий на Netlify.
    2. Укажите команду сборки: npm run build.
    3. Укажите папку для деплоя: build/.</code></pre>
                    <p>После этого приложение будет доступно по указанному URL.</p>
                `
            },
            {
                id: "3-45",
                type: "quiz",
                title: "Тест: Интеграция фронтенда и бэкенда",
                question: "Какой метод HTTP используется для отправки данных на сервер?",
                options: [
                    "GET",
                    "POST",
                    "PUT",
                    "DELETE"
                ],
                correctAnswer: 2
            },
            {
                id: "3-46",
                type: "quiz",
                title: "Тест: Развертывание приложения",
                question: "Какая команда используется для сборки React-приложения перед развертыванием?",
                options: [
                    "npm start",
                    "npm run build",
                    "npm test",
                    "npm deploy"
                ],
                correctAnswer: 2
            },
            {
                id: "3-47",
                type: "coding",
                title: "Создание простого CRUD-приложения",
                starterCode: `// Создайте компонент, который позволяет добавлять и отображать список задач
    import React, { useState } from 'react';
    
    function TodoApp() {
        const [tasks, setTasks] = useState([]);
        const [newTask, setNewTask] = useState('');
    
        const addTask = () => {
            if (newTask.trim()) {
                setTasks([...tasks, newTask]);
                setNewTask('');
            }
        };
    
        return (
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Введите задачу"
                />
                <button onClick={addTask}>Добавить</button>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        );
    }
    
    export default TodoApp;`,
                solution: `import React, { useState } from 'react';
    
    function TodoApp() {
        const [tasks, setTasks] = useState([]);
        const [newTask, setNewTask] = useState('');
    
        const addTask = () => {
            if (newTask.trim()) {
                setTasks([...tasks, newTask]);
                setNewTask('');
            }
        };
    
        return (
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Введите задачу"
                />
                <button onClick={addTask}>Добавить</button>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        );
    }
    
    export default TodoApp;`,
                tests: [
                    {
                        input: [{ tasks: ["Купить хлеб", "Выгулять собаку"] }],
                        expected: "<ul><li>Купить хлеб</li><li>Выгулять собаку</li></ul>"
                    }
                ]
            },
            {
                id: "3-48",
                type: "coding",
                title: "Развертывание приложения",
                starterCode: `// Напишите инструкцию для развертывания React-приложения на Netlify
    // Ваш ответ здесь`,
                solution: `// Инструкция для развертывания React-приложения на Netlify:
    1. Загрузите ваш репозиторий на Netlify через GitHub, GitLab или Bitbucket.
    2. Укажите команду сборки: npm run build.
    3. Укажите папку для деплоя: build/.
    4. Настройте домен и HTTPS, если необходимо.
    5. После завершения процесса сборки, ваше приложение будет доступно по указанному URL.`,
                tests: [
                    {
                        input: [],
                        expected: "Инструкция содержит шаги для развертывания на Netlify"
                    }
                ]
            }

        ]
    },
    {
        id: 6,
        title: "Введение в TypeScript",
        description: "Основы TypeScript: типы, настройка окружения и базовые концепции",
        image: "https://placehold.co/600x400?text=TypeScript+Basics",
        lessons: [
            {
                id: "6-1",
                type: "theory",
                title: "Что такое TypeScript?",
                content: `
                    <h2>Знакомство с TypeScript</h2>
                    <p>TypeScript — это строго типизированный язык программирования, который расширяет возможности JavaScript.</p>
                    
                    <h3>Основные преимущества:</h3>
                    <ul>
                        <li><strong>Статическая типизация</strong> — выявление ошибок на этапе разработки</li>
                        <li><strong>Поддержка современных стандартов ES6+</strong></li>
                        <li><strong>Улучшенная поддержка IDE</strong> — автодополнение, навигация по коду</li>
                        <li><strong>Постепенное внедрение</strong> — можно использовать как JavaScript с типами</li>
                    </ul>
                    
                    <h3>Где используется?</h3>
                    <p>TypeScript популярен в крупных проектах (Angular, Vue 3, React) и там, где важна надежность кода.</p>
                `
            },
            {
                id: "6-2",
                type: "quiz",
                title: "Проверка знаний: TypeScript",
                question: "Какое утверждение о TypeScript НЕверно?",
                options: [
                    "TypeScript компилируется в JavaScript",
                    "TypeScript добавляет статическую типизацию к JavaScript",
                    "TypeScript может работать только с классами и интерфейсами",
                    "TypeScript поддерживает все возможности JavaScript"
                ],
                correctAnswer: 2
            },
            {
                id: "6-3",
                type: "theory",
                title: "Установка и настройка окружения",
                content: `
                    <h2>Установка TypeScript</h2>
                    <p>Для работы с TypeScript необходимо:</p>
                    
                    <h3>1. Установить Node.js</h3>
                    <p>Скачайте с <a href="https://nodejs.org" target="_blank">официального сайта</a></p>
                    
                    <h3>2. Установить TypeScript глобально</h3>
                    <pre><code>npm install -g typescript</code></pre>
                    
                    <h3>3. Инициализировать проект</h3>
                    <pre><code>tsc --init</code></pre>
                    <p>Создаст файл tsconfig.json с настройками компилятора</p>
                    
                    <h3>4. Запуск компиляции</h3>
                    <pre><code>tsc ваш_файл.ts</code></pre>
                `
            },
            {
                id: "6-4",
                type: "coding",
                title: "Настройка проекта",
                starterCode: `// Создайте простую программу на TypeScript
// 1. Объявите переменную message с типом string
// 2. Присвойте ей значение "Hello, TypeScript!"
// 3. Выведите её в консоль

// Ваш код ниже`,
                solution: `const message: string = "Hello, TypeScript!";
console.log(message);`,
                tests: [
                    {
                        input: [],
                        expected: "Hello, TypeScript!"
                    }
                ]
            },
            {
                id: "6-5",
                type: "theory",
                title: "Основные типы данных",
                content: `
                    <h2>Типы данных в TypeScript</h2>
                    <p>TypeScript добавляет статическую типизацию к JavaScript.</p>
                    
                    <h3>Базовые типы:</h3>
                    <ul>
                        <li><code>string</code> — строки</li>
                        <li><code>number</code> — числа (целые и дробные)</li>
                        <li><code>boolean</code> — true/false</li>
                        <li><code>any</code> — любой тип (отключает проверку)</li>
                        <li><code>void</code> — отсутствие значения (для функций)</li>
                        <li><code>null</code> и <code>undefined</code></li>
                    </ul>
                    
                    <h3>Примеры:</h3>
                    <pre><code>let name: string = "Alice";
let age: number = 30;
let isActive: boolean = true;</code></pre>
                `
            },
            {
                id: "6-6",
                type: "quiz",
                title: "Тест: Типы данных",
                question: "Какой тип нужно указать для переменной, которая может быть строкой или числом?",
                options: [
                    "string | number",
                    "string & number",
                    "string, number",
                    "any"
                ],
                correctAnswer: 0
            },
            {
                id: "6-7",
                type: "coding",
                title: "Типизация переменных",
                starterCode: `// Задание:
// 1. Объявите переменную userName с типом string
// 2. Объявите переменную userAge с типом number
// 3. Объявите переменную isPremium с типом boolean
// 4. Присвойте им соответствующие значения
// 5. Соберите их в объект user и верните его

function createUser() {
    // Ваш код здесь
    return {
        name: userName,
        age: userAge,
        premium: isPremium
    };
}`,
                solution: `function createUser() {
    const userName: string = "Alex";
    const userAge: number = 28;
    const isPremium: boolean = true;
    
    return {
        name: userName,
        age: userAge,
        premium: isPremium
    };
}`,
                tests: [
                    {
                        input: [],
                        expected: {
                            name: "Alex",
                            age: 28,
                            premium: true
                        }
                    }
                ]
            },
            {
                id: "6-8",
                type: "theory",
                title: "Типизация функций",
                content: `
                    <h2>Функции в TypeScript</h2>
                    <p>TypeScript позволяет типизировать параметры и возвращаемые значения функций.</p>
                    
                    <h3>Синтаксис:</h3>
                    <pre><code>function имя(параметр: тип): возвращаемый_тип {
    // тело функции
}</code></pre>
                    
                    <h3>Примеры:</h3>
                    <pre><code>// Функция с типизированными параметрами
function add(a: number, b: number): number {
    return a + b;
}

// Стрелочная функция
const greet = (name: string): string => {
    return \`Hello, \${name}!\`;
};</code></pre>
                    
                    <h3>Необязательные параметры:</h3>
                    <pre><code>function logMessage(message: string, userId?: string): void {
    console.log(message, userId || 'Anonymous');
}</code></pre>
                `
            },
            {
                id: "6-9",
                type: "quiz",
                title: "Тест: Типизация функций",
                question: "Как правильно типизировать функцию, которая принимает строку и возвращает число?",
                options: [
                    "function(str: string): number",
                    "function(str: string) => number",
                    "function(str: string) -> number",
                    "function(str: string) returns number"
                ],
                correctAnswer: 0
            },
            {
                id: "6-10",
                type: "coding",
                title: "Типизированные функции",
                starterCode: `// Задание:
// 1. Напишите функцию calculateTotal, которая принимает:
//    - price (число)
//    - quantity (число)
//    - discount (необязательный параметр, число, по умолчанию 0)
// 2. Функция должна возвращать общую сумму (price * quantity) с учетом скидки
// 3. Типизируйте все параметры и возвращаемое значение

function calculateTotal(price, quantity, discount) {
    // Ваш код здесь
}`,
                solution: `function calculateTotal(price: number, quantity: number, discount: number = 0): number {
    const total = price * quantity;
    return total - (total * discount / 100);
}`,
                tests: [
                    {
                        input: [10, 5],
                        expected: 50
                    },
                    {
                        input: [10, 5, 20],
                        expected: 40
                    }
                ]
            },
            {
                id: "6-11",
                type: "theory",
                title: "Создание и использование интерфейсов",
                content: `
                    <h2>Введение в интерфейсы</h2>
                    <p>Интерфейсы позволяют определять структуру объектов.</p>
                    <pre><code>
// Пример в TypeScript (не будет работать в .js файлах):
interface User {
    name: string;
    age: number;
    email?: string;
}
                    </code></pre>
                    <p>В JavaScript аналогом могут быть JSDoc-аннотации или проверки вручную:</p>
                    <pre><code>
/**
 * @typedef {Object} User
 * @property {string} name
 * @property {number} age
 * @property {string} [email] Необязательное поле
 */

// Проверка типа вручную
function isUser(obj) {
    return typeof obj.name === 'string' && 
           typeof obj.age === 'number';
}
                    </code></pre>
                `
            },
            {
                id: "6-12",
                type: "quiz",
                title: "Проверка знаний: интерфейсы",
                question: "Какой из способов НЕ подходит для описания структуры объекта в JavaScript?",
                options: [
                    "JSDoc-аннотации",
                    "Ручные проверки типов",
                    "Ключевое слово interface (без TypeScript)",
                    "Комментарии в коде"
                ],
                correctAnswer: 2
            },
            {
                id: "6-13",
                type: "coding",
                title: "Проверка структуры объекта",
                starterCode: `// Задача: Напишите функцию validateUser, которая проверяет объект пользователя
// Пользователь должен иметь:
// - name (строка)
// - age (число)
// - email (необязательно, но если есть - строка)

function validateUser(user) {
    // Ваш код здесь
    return false;
}

// Тестовые вызовы
console.log(validateUser({ name: "Иван", age: 30 })); // true
console.log(validateUser({ name: "Мария", age: 25, email: "test@test.com" })); // true
console.log(validateUser({ name: "Ошибка", age: "30" })); // false`,
                solution: `function validateUser(user) {
    if (!user || typeof user.name !== 'string' || typeof user.age !== 'number') {
        return false;
    }
    if (user.email && typeof user.email !== 'string') {
        return false;
    }
    return true;
}`,
                tests: [
                    { input: [{ name: "Иван", age: 30 }], expected: true },
                    { input: [{ name: "Мария", age: 25, email: "test@test.com" }], expected: true },
                    { input: [{ name: "Ошибка", age: "30" }], expected: false }
                ]
            },
            {
                id: "6-14",
                type: "theory",
                title: "Типы объектов и массивов",
                content: `
                    <h2>Структуры данных в JavaScript</h2>
                    <pre><code>
// Проверка типа массива
function isNumberArray(arr) {
    return Array.isArray(arr) && arr.every(item => typeof item === 'number');
}

// Проверка объекта
function isPoint(obj) {
    return obj && typeof obj.x === 'number' && typeof obj.y === 'number';
}
                    </code></pre>
                `
            },
            {
                id: "6-15",
                type: "coding",
                title: "Обработка массива пользователей",
                starterCode: `// Задача: Напишите функцию getAdultUsers, которая:
// 1) Принимает массив пользователей
// 2) Проверяет, что каждый элемент - валидный пользователь (используйте validateUser)
// 3) Возвращает массив пользователей старше 18 лет

function getAdultUsers(users) {
    // Ваш код здесь
    return [];
}`,
                solution: `function getAdultUsers(users) {
    if (!Array.isArray(users)) return [];
    return users.filter(user => validateUser(user) && user.age >= 18);
}`,
                tests: [
                    { 
                        input: [[{ name: "Иван", age: 30 }, { name: "Ребенок", age: 12 }]], 
                        expected: [{ name: "Иван", age: 30 }] 
                    }
                ]
            },
            {
                id: "6-16",
                type: "theory",
                title: "Объединение и пересечение типов",
                content: `
                    <h2>Работа с разными типами</h2>
                    <pre><code>
// Проверка типа
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else if (typeof id === 'number') {
        console.log(id.toFixed(2));
    }
}
                    </code></pre>
                `
            },
            {
                id: "6-17",
                type: "coding",
                title: "Форматирование значений",
                starterCode: `// Задача: Напишите функцию formatValue, которая:
// - для строк: возвращает их в верхнем регистре
// - для чисел: возвращает строку с 2 знаками после запятой
// - для других типов: возвращает "UNSUPPORTED TYPE"

function formatValue(value) {
    // Ваш код здесь
    return "";
}`,
                solution: `function formatValue(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    if (typeof value === 'number') {
        return value.toFixed(2);
    }
    return "UNSUPPORTED TYPE";
}`,
                tests: [
                    { input: ["test"], expected: "TEST" },
                    { input: [3.1415], expected: "3.14" },
                    { input: [true], expected: "UNSUPPORTED TYPE" }
                ]
            },
            {
                id: "6-18",
                type: "theory",
                title: "Типизация React-компонентов",
                content: `
                    <h2>Введение в типизацию компонентов</h2>
                    <p>TypeScript добавляет статическую типизацию к React-компонентам, что помогает избежать многих ошибок.</p>
                    
                    <h3>Основные концепции:</h3>
                    <ul>
                        <li>Типизация функциональных компонентов с React.FC</li>
                        <li>Типы для пропсов компонентов</li>
                        <li>Дженерики в React-компонентах</li>
                    </ul>
                    
                    <h3>Пример типизированного компонента:</h3>
                    <pre><code>interface UserProps {
    name: string;
    age: number;
    isAdmin?: boolean;
}

const User: React.FC&lt;UserProps&gt; = ({ name, age, isAdmin = false }) => {
    return (
        &lt;div&gt;
            &lt;p&gt;{name}, {age} лет&lt;/p&gt;
            {isAdmin && &lt;p&gt;Администратор&lt;/p&gt;}
        &lt;/div&gt;
    );
};</code></pre>
                `
            },
            // Урок 2: Тест по типизации компонентов
            {
                id: "6-19",
                type: "quiz",
                title: "Проверка знаний: типизация компонентов",
                question: "Как правильно типизировать пропсы функционального компонента в TypeScript?",
                options: [
                    "Используя interface или type для пропсов и React.FC<Props>",
                    "Через PropTypes как в обычном React",
                    "Достаточно указать типы параметров функции",
                    "TypeScript автоматически определяет типы пропсов"
                ],
                correctAnswer: 1
            },
            // Урок 3: Практика - типизация компонента
            {
                id: "6-20",
                type: "coding",
                title: "Создание типизированного компонента",
                starterCode: `import React from 'react';

// Задача: создать типизированный компонент Button
// Требования:
// 1. Принимает пропсы: 
//    - text (string, обязательный)
//    - onClick (функция без параметров и возвращаемого значения, обязательный)
//    - disabled (boolean, необязательный, по умолчанию false)
// 2. Возвращает кнопку (<button>) с переданным текстом

interface ButtonProps {
    // Ваш код здесь
}

const Button: React.FC<ButtonProps> = ({ /* деструктуризация пропсов */ }) => {
    // Ваш код здесь
};

// Пример использования:
// <Button text="Нажми меня" onClick={() => console.log('Клик!')} />
`,
                solution: `import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};`,
                tests: [
                    {
                        description: "Компонент должен рендерить кнопку с правильным текстом",
                        test: `const { getByText } = render(<Button text="Тест" onClick={() => {}} />);
expect(getByText("Тест")).toBeInTheDocument();`
                    },
                    {
                        description: "Кнопка должна вызывать onClick при клике",
                        test: `const mockFn = jest.fn();
const { getByText } = render(<Button text="Тест" onClick={mockFn} />);
fireEvent.click(getByText("Тест"));
expect(mockFn).toHaveBeenCalled();`
                    }
                ]
            },
            // Урок 4: Использование пропсов и состояния
            {
                id: "6-21",
                type: "theory",
                title: "Пропсы и состояние в TypeScript",
                content: `
                    <h2>Работа с пропсами и состоянием</h2>
                    <p>TypeScript помогает четко определить типы для пропсов и состояния компонентов.</p>
                    
                    <h3>Типизация состояния:</h3>
                    <pre><code>interface CounterState {
    count: number;
    lastUpdated?: Date;
}

const Counter: React.FC = () => {
    const [state, setState] = React.useState&lt;CounterState&gt;({ count: 0 });
    
    return (
        &lt;div&gt;
            &lt;p&gt;Count: {state.count}&lt;/p&gt;
            &lt;button onClick={() => setState({ count: state.count + 1, lastUpdated: new Date() })}&gt;
                Increment
            &lt;/button&gt;
        &lt;/div&gt;
    );
};</code></pre>
                    
                    <h3>Типизация сложных пропсов:</h3>
                    <pre><code>interface UserListProps {
    users: Array&lt;{
        id: number;
        name: string;
        email: string;
    }&gt;;
    onUserSelect: (id: number) => void;
}</code></pre>
                `
            },
            // Урок 5: Тест по пропсам и состоянию
            
            // Урок 6: Практика - форма с типизированным состоянием
            {
                id: "6-23",
                type: "coding",
                title: "Форма входа с валидацией",
                starterCode: `import React, { useState } from 'react';

// Задача: создать форму входа с валидацией
// Требования:
// 1. Состояние должно содержать email и password (строки)
// 2. При submit формы выводить данные в консоль
// 3. Добавить валидацию:
//    - email должен содержать @
//    - password не менее 6 символов
// 4. Показывать ошибки валидации

const LoginForm: React.FC = () => {
    // Ваш код здесь
    
    return (
        <form onSubmit={/* обработчик */}>
            {/* поля ввода и кнопка */}
        </form>
    );
};`,
                solution: `import React, { useState } from 'react';

interface FormState {
    email: string;
    password: string;
    errors: {
        email?: string;
        password?: string;
    };
}

const LoginForm: React.FC = () => {
    const [state, setState] = useState<FormState>({
        email: '',
        password: '',
        errors: {}
    });

    const validate = (): boolean => {
        const errors: FormState['errors'] = {};
        if (!state.email.includes('@')) {
            errors.email = 'Email должен содержать @';
        }
        if (state.password.length < 6) {
            errors.password = 'Пароль должен быть не менее 6 символов';
        }
        setState(prev => ({ ...prev, errors }));
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Форма отправлена:', { email: state.email, password: state.password });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={state.email}
                    onChange={(e) => setState({ ...state, email: e.target.value })}
                />
                {state.errors.email && <span style={{ color: 'red' }}>{state.errors.email}</span>}
            </div>
            <div>
                <label>Пароль:</label>
                <input
                    type="password"
                    value={state.password}
                    onChange={(e) => setState({ ...state, password: e.target.value })}
                />
                {state.errors.password && <span style={{ color: 'red' }}>{state.errors.password}</span>}
            </div>
            <button type="submit">Войти</button>
        </form>
    );
};`,
                tests: [
                    {
                        description: "Форма должна показывать ошибку при невалидном email",
                        test: `const { getByLabelText, getByText } = render(<LoginForm />);
const emailInput = getByLabelText('Email:');
fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
fireEvent.submit(getByRole('form'));
expect(getByText(/Email должен содержать @/i)).toBeInTheDocument();`
                    },
                    {
                        description: "Форма должна выводить данные в консоль при валидных данных",
                        test: `const consoleSpy = jest.spyOn(console, 'log');
const { getByLabelText, getByText } = render(<LoginForm />);
fireEvent.change(getByLabelText('Email:'), { target: { value: 'test@example.com' } });
fireEvent.change(getByLabelText('Пароль:'), { target: { value: 'password' } });
fireEvent.submit(getByRole('form'));
expect(consoleSpy).toHaveBeenCalledWith('Форма отправлена:', {
    email: 'test@example.com',
    password: 'password'
});`
                    }
                ]
            },
            // Урок 7: Типизация событий и обработчиков
            {
                id: "6-24",
                type: "theory",
                title: "Типизация событий и обработчиков",
                content: `
                    <h2>Работа с событиями в TypeScript</h2>
                    <p>React предоставляет готовые типы для событий, которые помогают избежать ошибок.</p>
                    
                    <h3>Основные типы событий:</h3>
                    <ul>
                        <li>React.ChangeEvent&lt;HTMLInputElement&gt; - изменение input</li>
                        <li>React.MouseEvent&lt;HTMLButtonElement&gt; - клик по кнопке</li>
                        <li>React.FormEvent&lt;HTMLFormElement&gt; - отправка формы</li>
                        <li>React.KeyboardEvent&lt;HTMLInputElement&gt; - нажатие клавиш</li>
                    </ul>
                    
                    <h3>Примеры:</h3>
                    <pre><code>const handleChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) => {
    console.log(e.target.value);
};

const handleClick = (e: React.MouseEvent&lt;HTMLButtonElement&gt;) => {
    e.preventDefault();
    console.log('Кнопка нажата');
};</code></pre>
                `
            },
            // Урок 8: Практика - типизация событий
            {
                id: "6-25",
                type: "coding",
                title: "Обработка событий с TypeScript",
                starterCode: `import React from 'react';

// Задача: создать компонент поиска с обработкой событий
// Требования:
// 1. При изменении input вызывать onSearch с текущим значением
// 2. При нажатии Enter в input вызывать onSearchEnter с текущим значением
// 3. При клике на кнопку вызывать onButtonClick с текущим значением

interface SearchProps {
    onSearch: (value: string) => void;
    onSearchEnter: (value: string) => void;
    onButtonClick: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch, onSearchEnter, onButtonClick }) => {
    const [value, setValue] = React.useState('');
    
    // Ваши обработчики здесь
    
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={/* обработчик */}
                onKeyDown={/* обработчик */}
            />
            <button onClick={/* обработчик */}>
                Поиск
            </button>
        </div>
    );
};`,
                solution: `import React from 'react';

interface SearchProps {
    onSearch: (value: string) => void;
    onSearchEnter: (value: string) => void;
    onButtonClick: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch, onSearchEnter, onButtonClick }) => {
    const [value, setValue] = React.useState('');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        onSearch(newValue);
    };
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearchEnter(value);
        }
    };
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onButtonClick(value);
    };
    
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleClick}>
                Поиск
            </button>
        </div>
    );
};`,
                tests: [
                    {
                        description: "onSearch должен вызываться при изменении input",
                        test: `const mockSearch = jest.fn();
const { getByRole } = render(<Search onSearch={mockSearch} onSearchEnter={() => {}} onButtonClick={() => {}} />);
fireEvent.change(getByRole('textbox'), { target: { value: 'test' } });
expect(mockSearch).toHaveBeenCalledWith('test');`
                    },
                    {
                        description: "onSearchEnter должен вызываться при нажатии Enter",
                        test: `const mockEnter = jest.fn();
const { getByRole } = render(<Search onSearch={() => {}} onSearchEnter={mockEnter} onButtonClick={() => {}} />);
fireEvent.change(getByRole('textbox'), { target: { value: 'test' } });
fireEvent.keyDown(getByRole('textbox'), { key: 'Enter' });
expect(mockEnter).toHaveBeenCalledWith('test');`
                    }
                ]
            },
            // Урок 9: Классовые компоненты в TypeScript
            {
                id: "6-26",
                type: "theory",
                title: "Классовые компоненты в TypeScript",
                content: `
                    <h2>Работа с классовыми компонентами</h2>
                    <p>Хотя функциональные компоненты более популярны, классовые компоненты все еще используются.</p>
                    
                    <h3>Типизация классового компонента:</h3>
                    <pre><code>interface CounterProps {
    initialValue?: number;
}

interface CounterState {
    count: number;
}

class Counter extends React.Component&lt;CounterProps, CounterState&gt; {
    constructor(props: CounterProps) {
        super(props);
        this.state = {
            count: props.initialValue || 0
        };
    }
    
    increment = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };
    
    render() {
        return (
            &lt;div&gt;
                &lt;p&gt;Count: {this.state.count}&lt;/p&gt;
                &lt;button onClick={this.increment}&gt;Increment&lt;/button&gt;
            &lt;/div&gt;
        );
    }
}</code></pre>
                `
            },
            {
                id: "6-28",
                type: "theory",
                title: "Что такое дженерики?",
                content: `
                    <h2>Основы обобщённого программирования</h2>
                    <p>Дженерики (Generics) позволяют создавать компоненты, которые могут работать с разными типами данных, сохраняя при этом строгую типизацию.</p>
                    
                    <h3>Зачем нужны дженерики?</h3>
                    <ul>
                        <li>Повторное использование кода для разных типов</li>
                        <li>Сохранение информации о типах</li>
                        <li>Обеспечение типобезопасности</li>
                    </ul>
                    
                    <h3>Простейший пример:</h3>
                    <pre><code>function identity&lt;T&gt;(arg: T): T {
    return arg;
}

// Использование:
let output1 = identity&lt;string&gt;("hello"); // тип string
let output2 = identity&lt;number&gt;(42);     // тип number</code></pre>
                    
                    <h3>Обобщённые интерфейсы:</h3>
                    <pre><code>interface KeyValuePair&lt;K, V&gt; {
    key: K;
    value: V;
}

// Использование:
const pair1: KeyValuePair&lt;number, string&gt; = { key: 1, value: "one" };
const pair2: KeyValuePair&lt;string, boolean&gt; = { key: "isValid", value: true };</code></pre>
                `
            },
            // Урок 2: Тест по основам дженериков
            {
                id: "6-29",
                type: "quiz",
                title: "Проверка знаний: основы дженериков",
                questions: [
                    {
                        question: "Как объявить дженерик-функцию в TypeScript?",
                        options: [
                            "function name&lt;T&gt;(arg: T): T",
                            "function name&lt;Generic T&gt;(arg: T)",
                            "function name(T)(arg: T)",
                            "function name: &lt;T&gt;(arg: T)"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "Какой символ обычно используют для обозначения дженерик-типа?",
                        options: [
                            "T",
                            "G",
                            "J",
                            "Любой символ, но T - это конвенция"
                        ],
                        correctAnswer: 4
                    }
                ]
            },
            // Урок 3: Практика - дженерик-функции
            {
                id: "6-30",
                type: "coding",
                title: "Создание дженерик-функций",
                starterCode: `// Задача: реализовать дженерик-функции
// 1. reverseArray - принимает массив элементов любого типа и возвращает новый массив с элементами в обратном порядке
// 2. mapArray - принимает массив и функцию преобразования, возвращает новый массив с преобразованными элементами

function reverseArray<T>(array: T[]): T[] {
    // Ваш код здесь
}

function mapArray<T, U>(array: T[], mapper: (item: T) => U): U[] {
    // Ваш код здесь
}

// Пример использования:
// reverseArray([1, 2, 3]) → [3, 2, 1]
// mapArray([1, 2, 3], x => x.toString()) → ["1", "2", "3"]
`,
                solution: `function reverseArray<T>(array: T[]): T[] {
    return [...array].reverse();
}

function mapArray<T, U>(array: T[], mapper: (item: T) => U): U[] {
    return array.map(mapper);
}`,
                tests: [
                    {
                        description: "reverseArray должен возвращать перевёрнутый массив чисел",
                        test: `expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);`
                    },
                    {
                        description: "reverseArray должен работать с любыми типами",
                        test: `expect(reverseArray(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);`
                    },
                    {
                        description: "mapArray должен преобразовывать элементы",
                        test: `expect(mapArray([1, 2, 3], x => x * 2)).toEqual([2, 4, 6]);`
                    },
                    {
                        description: "mapArray должен изменять типы элементов",
                        test: `expect(mapArray([1, 2, 3], x => x.toString())).toEqual(['1', '2', '3']);`
                    }
                ]
            },
            // Урок 4: Дженерик-классы и коллекции
            {
                id: "6-31",
                type: "theory",
                title: "Дженерик-классы и типизация коллекций",
                content: `
                    <h2>Обобщённые классы</h2>
                    <p>Дженерики особенно полезны при работе с классами, которые могут обрабатывать разные типы данных.</p>
                    
                    <h3>Пример дженерик-класса:</h3>
                    <pre><code>class DataStorage&lt;T&gt; {
    private data: T[] = [];
    
    addItem(item: T) {
        this.data.push(item);
    }
    
    getItem(index: number): T {
        return this.data[index];
    }
    
    getAllItems(): T[] {
        return [...this.data];
    }
}

// Использование:
const stringStorage = new DataStorage&lt;string&gt;();
stringStorage.addItem("Hello");
stringStorage.addItem("World");

const numberStorage = new DataStorage&lt;number&gt;();
numberStorage.addItem(1);
numberStorage.addItem(2);</code></pre>
                    
                    <h3>Типизация коллекций:</h3>
                    <pre><code>// Массивы:
const numbers: Array&lt;number&gt; = [1, 2, 3];
const strings: string[] = ["a", "b", "c"];

// Промисы:
const promise: Promise&lt;string&gt; = new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
});

// Record для объектов:
const dictionary: Record&lt;string, number&gt; = {
    "one": 1,
    "two": 2
};</code></pre>
                `
            },
            // Урок 5: Тест по классам и коллекциям
            {
                id: "6-32",
                type: "quiz",
                title: "Проверка знаний: классы и коллекции",
                questions: [
                    {
                        question: "Как объявить дженерик-класс в TypeScript?",
                        options: [
                            "class Name&lt;T&gt; { ... }",
                            "class Name with Generic T { ... }",
                            "class Name<T extends any> { ... }",
                            "class Name implements Generic<T> { ... }"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "Какой тип использовать для объекта с динамическими ключами строкового типа?",
                        options: [
                            "Record&lt;string, any&gt;",
                            "Object&lt;string&gt;",
                            "DynamicObject",
                            "Map&lt;string, any&gt;"
                        ],
                        correctAnswer: 1
                    }
                ]
            },
            // Урок 6: Практика - дженерик-класс
            {
                id: "6-33",
                type: "coding",
                title: "Реализация дженерик-класса",
                starterCode: `// Задача: реализовать дженерик-класс Stack
// Требования:
// 1. Метод push(item: T) - добавляет элемент в стек
// 2. Метод pop(): T | undefined - удаляет и возвращает верхний элемент
// 3. Метод peek(): T | undefined - возвращает верхний элемент без удаления
// 4. Метод isEmpty(): boolean - проверяет, пуст ли стек
// 5. Метод size(): number - возвращает количество элементов

class Stack<T> {
    // Ваш код здесь
}

// Пример использования:
// const numberStack = new Stack<number>();
// numberStack.push(1);
// numberStack.push(2);
// numberStack.pop(); → 2
`,
                solution: `class Stack<T> {
    private items: T[] = [];
    
    push(item: T) {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
    
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
    
    isEmpty(): boolean {
        return this.items.length === 0;
    }
    
    size(): number {
        return this.items.length;
    }
}`,
                tests: [
                    {
                        description: "Stack должен корректно добавлять и извлекать элементы",
                        test: `const stack = new Stack<number>();
stack.push(1);
stack.push(2);
expect(stack.pop()).toBe(2);
expect(stack.pop()).toBe(1);`
                    },
                    {
                        description: "peek должен возвращать элемент без удаления",
                        test: `const stack = new Stack<string>();
stack.push("test");
expect(stack.peek()).toBe("test");
expect(stack.size()).toBe(1);`
                    },
                    {
                        description: "isEmpty должен корректно отражать состояние стека",
                        test: `const stack = new Stack<boolean>();
expect(stack.isEmpty()).toBe(true);
stack.push(true);
expect(stack.isEmpty()).toBe(false);`
                    }
                ]
            },
            // Урок 7: Дженерики в React
            {
                id: "6-34",
                type: "theory",
                title: "Применение дженериков в React",
                content: `
                    <h2>Дженерики в React-компонентах</h2>
                    <p>Дженерики особенно полезны для создания универсальных компонентов, которые могут работать с разными типами данных.</p>
                    
                    <h3>Дженерик-компонент списка:</h3>
                    <pre><code>interface ListProps&lt;T&gt; {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

function List&lt;T&gt;({ items, renderItem }: ListProps&lt;T&gt;) {
    return (
        &lt;ul&gt;
            {items.map((item, index) => (
                &lt;li key={index}&gt;{renderItem(item)}&lt;/li&gt;
            ))}
        &lt;/ul&gt;
    );
}

// Использование:
&lt;List
    items={[{ id: 1, name: "John" }, { id: 2, name: "Jane" }]}
    renderItem={(user) => &lt;span&gt;{user.name}&lt;/span&gt;}
/&gt;</code></pre>
                    
                    <h3>Дженерик-хуки:</h3>
                    <pre><code>function useFetch&lt;T&gt;(url: string): [T | null, boolean, Error | null] {
    const [data, setData] = React.useState&lt;T | null&gt;(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState&lt;Error | null&gt;(null);
    
    React.useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data as T);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [url]);
    
    return [data, loading, error];
}

// Использование:
const [user, loading, error] = useFetch&lt;User&gt;("/api/user/1");</code></pre>
                `
            },
            // Урок 8: Практика - дженерик-компонент
            {
                id: "6-35",
                type: "coding",
                title: "Создание универсального компонента Table",
                starterCode: `import React from 'react';

// Задача: создать дженерик-компонент Table
// Требования:
// 1. Принимает пропсы:
//    - data: массив элементов типа T
//    - columns: массив объектов с { key: keyof T, title: string }
//    - keyExtractor: функция для извлечения ключа (item: T) => string | number
// 2. Рендерит таблицу с данными

interface TableProps<T> {
    data: T[];
    columns: {
        key: keyof T;
        title: string;
    }[];
    keyExtractor: (item: T) => string | number;
}

function Table<T>({ data, columns, keyExtractor }: TableProps<T>) {
    // Ваш код здесь
}

// Пример использования:
/*
<Table
    data={[
        { id: 1, name: "John", age: 25 },
        { id: 2, name: "Jane", age: 30 }
    ]}
    columns={[
        { key: "name", title: "Name" },
        { key: "age", title: "Age" }
    ]}
    keyExtractor={(item) => item.id}
/>
*/
`,
                solution: `import React from 'react';

interface TableProps<T> {
    data: T[];
    columns: {
        key: keyof T;
        title: string;
    }[];
    keyExtractor: (item: T) => string | number;
}

function Table<T>({ data, columns, keyExtractor }: TableProps<T>) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={String(column.key)}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={keyExtractor(item)}>
                        {columns.map(column => (
                            <td key={String(column.key)}>
                                {String(item[column.key])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}`,
                tests: [
                    {
                        description: "Table должен рендерить правильное количество строк",
                        test: `const testData = [
    { id: 1, name: "Test 1" },
    { id: 2, name: "Test 2" }
];
const { getAllByRole } = render(
    <Table
        data={testData}
        columns={[{ key: "name", title: "Name" }]}
        keyExtractor={(item) => item.id}
    />
);
expect(getAllByRole('row')).toHaveLength(3); // header + 2 rows`
                    },
                    {
                        description: "Table должен отображать правильные данные",
                        test: `const testData = [{ id: 1, name: "Test Name" }];
const { getByText } = render(
    <Table
        data={testData}
        columns={[{ key: "name", title: "Name" }]}
        keyExtractor={(item) => item.id}
    />
);
expect(getByText("Test Name")).toBeInTheDocument();`
                    }
                ]
            },
            // Урок 9: Продвинутые дженерики
            {
                id: "6-36",
                type: "theory",
                title: "Продвинутые техники работы с дженериками",
                content: `
                    <h2>Ограничения дженериков (Constraints)</h2>
                    <p>Мы можем накладывать ограничения на типы, используемые в дженериках.</p>
                    
                    <pre><code>interface HasId {
    id: number;
}

function logId&lt;T extends HasId&gt;(item: T) {
    console.log(item.id);
}

// Работает:
logId({ id: 1, name: "John" });

// Ошибка (нет свойства id):
logId({ name: "John" });</code></pre>
                    
                    <h2>Дженерики по умолчанию</h2>
                    <pre><code>interface PaginationProps&lt;T = string&gt; {
    items: T[];
    itemsPerPage?: number;
}

// Можно использовать со строкой по умолчанию:
const stringPagination: PaginationProps = { items: ["a", "b"] };

// Или с другим типом:
const numberPagination: PaginationProps&lt;number&gt; = { items: [1, 2, 3] };</code></pre>
                    
                    <h2>Утилиты типов с дженериками</h2>
                    <pre><code>type PartialRecord&lt;K extends keyof any, T&gt; = {
    [P in K]?: T;
};

// Использование:
const config: PartialRecord&lt;string, number&gt; = {
    timeout: 1000,
    // retries: 3 - необязательное поле
};</code></pre>
                `
            },
            // Урок 10: Итоговый тест
            {
                id: "6-37",
                type: "quiz",
                title: "Итоговый тест по дженерикам",
                questions: [
                    {
                        question: "Как ограничить дженерик-тип, чтобы он должен был иметь свойство id?",
                        options: [
                            "<T extends { id: any }>",
                            "<T has id>",
                            "<T implements Idable>",
                            "<T with id>"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "Как создать дженерик с типом по умолчанию?",
                        options: [
                            "<T = DefaultType>",
                            "<T extends DefaultType>",
                            "<T: DefaultType>",
                            "<T as DefaultType>"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "Какой тип использовать для функции, которая принимает React-компонент и пропсы этого компонента?",
                        options: [
                            "<T extends React.ComponentType<any>>(component: T, props: React.ComponentProps<T>)",
                            "<T>(component: T, props: T['props'])",
                            "Function<component, props>",
                            "Любой из вышеперечисленных"
                        ],
                        correctAnswer: 1
                    }
                ]
            },
            {
                id: "6-38",
                type: "theory",
                title: "Миграция проекта на TypeScript",
                content: `
                    <h2>Стратегия постепенной миграции</h2>
                    <p>Лучший подход - постепенное внедрение TypeScript без остановки разработки.</p>
                    
                    <h3>Пошаговый план:</h3>
                    <ol>
                        <li><strong>Настройка окружения</strong>
                            <pre><code>npm install --save-dev typescript @types/node</code></pre>
                        </li>
                        <li><strong>Создание tsconfig.json</strong>
                            <pre><code>npx tsc --init</code></pre>
                        </li>
                        <li><strong>Переименование файлов</strong> (.js → .ts/.tsx поэтапно)</li>
                        <li><strong>Добавление типов</strong> к основным компонентам</li>
                        <li><strong>Настройка сборки</strong> (Webpack/Babel)</li>
                    </ol>
                    
                    <h3>Пример hybrid-проекта (JS + TS):</h3>
                    <pre><code>// tsconfig.json
{
    "compilerOptions": {
        "allowJs": true,  // Разрешить .js файлы
        "checkJs": true,  // Проверять типы в .js
        "outDir": "./dist",
        "strict": false    // Начать с нестрогого режима
    },
    "include": ["src/**/*"]
}</code></pre>
                    
                    <h3>Типизация существующего кода:</h3>
                    <pre><code>// Было (JS)
function getUser(id) {
    return api.fetchUser(id);
}

// Стало (TS) - вариант с постепенной типизацией
/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 */

/**
 * @param {number} id
 * @returns {Promise<User>}
 */
function getUser(id) {
    return api.fetchUser(id);
}</code></pre>
                `
            },
            // Урок 2: Тест по миграции
            {
                id: "6-39",
                type: "quiz",
                title: "Проверка знаний: миграция на TypeScript",
                questions: [
                    {
                        question: "Какой флаг в tsconfig.json разрешает использование JS-файлов?",
                        options: [
                            "allowJS",
                            "jsCompat",
                            "mixedMode",
                            "jsSupport"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "Какой подход лучше для миграции большого проекта?",
                        options: [
                            "Полный рефакторинг всего кода сразу",
                            "Постепенное переименование файлов и добавление типов",
                            "Создание нового проекта с нуля",
                            "Использование только деклараций типов"
                        ],
                        correctAnswer: 2
                    }
                ]
            },
            // Урок 3: Практика - миграция компонента
            {
                id: "6-40",
                type: "coding",
                title: "Перенос React-компонента на TypeScript",
                starterCode: `// Задача: перевести компонент на TypeScript
// Исходный JS-код:
import React from 'react';

function UserCard({ user, onClick }) {
    return (
        <div className="card" onClick={() => onClick(user.id)}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Role: {user.isAdmin ? 'Admin' : 'User'}</p>
        </div>
    );
}

// 1. Создайте интерфейс для пропсов
// 2. Добавьте типы для параметров
// 3. Укажите тип возвращаемого значения
`,
                solution: `import React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
}

interface UserCardProps {
    user: User;
    onClick: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
    return (
        <div className="card" onClick={() => onClick(user.id)}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Role: {user.isAdmin ? 'Admin' : 'User'}</p>
        </div>
    );
};`,
                tests: [
                    {
                        description: "Компонент должен корректно типизировать пропсы",
                        test: `const mockUser = {
            id: 1,
            name: 'Test',
            email: 'test@example.com',
            isAdmin: false
        };
        const mockFn = jest.fn();
        render(<UserCard user={mockUser} onClick={mockFn} />);
        expect(screen.getByText(/Test/)).toBeInTheDocument();`
                    }
                ]
            },
            // Урок 4: Работа с библиотеками
            {
                id: "6-41",
                type: "theory",
                title: "Интеграция с библиотеками",
                content: `
                    <h2>Типы для сторонних библиотек</h2>
                    <p>Большинство популярных библиотек предоставляют типы через DefinitelyTyped.</p>
                    
                    <h3>Установка типов:</h3>
                    <pre><code>npm install --save-dev @types/react @types/lodash @types/jest</code></pre>
                    
                    <h3>Если типов нет:</h3>
                    <ol>
                        <li>Создать декларацию в <code>src/types/</code></li>
                        <li>Использовать <code>declare module</code></li>
                    </ol>
                    
                    <h3>Пример декларации:</h3>
                    <pre><code>// types/legacy-lib.d.ts
declare module 'legacy-library' {
    export function oldFunc(param: string): number;
    export const deprecatedVar: boolean;
}</code></pre>
                    
                    <h3>Работа с нетипизированными зависимостями:</h3>
                    <pre><code>// @ts-ignore - временное решение
import untypedLib from 'untyped-lib';

// Альтернатива - типизировать через any с постепенным уточнением
const typedLib = untypedLib as {
    method1: (arg: string) => void;
    property1: number;
};</code></pre>
                `
            },
            // Урок 5: Тест по работе с библиотеками
            {
                id: "6-42",
                type: "quiz",
                title: "Проверка знаний: библиотеки и типы",
                questions: [
                    {
                        question: "Как добавить типы для библиотеки, если их нет в @types?",
                        options: [
                            "Создать .d.ts файл с declare module",
                            "Использовать // @ts-ignore",
                            "Переписать библиотеку",
                            "Отказаться от её использования"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "Где DefinitelyTyped хранит типы для библиотек?",
                        options: [
                            "В репозитории @types на GitHub",
                            "В npm-пакетах @types/название",
                            "Встроены в сам TypeScript",
                            "И то, и другое"
                        ],
                        correctAnswer: 4
                    }
                ]
            },
            // Урок 6: Практика - типизация API
            {
                id: "6-43",
                type: "coding",
                title: "Типизация API-клиента",
                starterCode: `// Задача: типизировать API-клиент
// Исходный JS-код:
async function fetchData(endpoint, params) {
    const response = await fetch(\`/api/\${endpoint}\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    });
    return response.json();
}

// 1. Создайте тип для параметров (endpoint и params)
// 2. Добавьте дженерик для возвращаемого типа
// 3. Обработайте возможные ошибки
`,
                solution: `interface ApiParams {
    endpoint: 'users' | 'products' | 'orders';
    params: Record<string, unknown>;
}

async function fetchData<T>(
    endpoint: ApiParams['endpoint'],
    params: ApiParams['params']
): Promise<T> {
    const response = await fetch(\`/api/\${endpoint}\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    });
    
    if (!response.ok) {
        throw new Error(\`API request failed: \${response.status}\`);
    }
    
    return response.json() as Promise<T>;
}

// Пример использования:
interface User {
    id: number;
    name: string;
}

// const user = await fetchData<User>('users', { id: 1 });`,
                tests: [
                    {
                        description: "Функция должна корректно типизировать возвращаемое значение",
                        test: `const mockUser = { id: 1, name: 'Test' };
global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUser),
    })
);

const result = await fetchData<User>('users', {});
expect(result).toEqual(mockUser);`
                    }
                ]
            },
            // Урок 7: Настройка TypeScript
            {
                id: "6-44",
                type: "theory",
                title: "Конфигурация TypeScript",
                content: `
                    <h2>Оптимальная настройка tsconfig.json</h2>
                    <p>Рекомендуемые настройки для разных этапов проекта:</p>
                    
                    <h3>Базовый конфиг (начало миграции):</h3>
                    <pre><code>{
    "compilerOptions": {
        "target": "ES6",
        "module": "ESNext",
        "allowJs": true,
        "checkJs": true,
        "outDir": "./dist",
        "strict": false,
        "esModuleInterop": true,
        "skipLibCheck": true
    }
}</code></pre>
                    
                    <h3>Строгий режим (для новых проектов):</h3>
                    <pre><code>{
    "compilerOptions": {
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "strictFunctionTypes": true,
        "strictBindCallApply": true,
        "strictPropertyInitialization": true,
        "noImplicitThis": true,
        "alwaysStrict": true
    }
}</code></pre>
                    
                    <h3>Настройки для React:</h3>
                    <pre><code>{
    "compilerOptions": {
        "jsx": "react-jsx",
        "baseUrl": "./src",
        "paths": {
            "@components/*": ["components/*"],
            "@utils/*": ["utils/*"]
        }
    }
}</code></pre>
                    
                    <h3>Интеграция с ESLint:</h3>
                    <pre><code>// .eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ]
};</code></pre>
                `
            },
            // Урок 8: Тест по настройке
            {
                id: "6-45",
                type: "quiz",
                title: "Проверка знаний: конфигурация",
                questions: [
                    {
                        question: "Какая опция включает все strict-проверки?",
                        options: [
                            "strict: true",
                            "allChecks: true",
                            "strictMode: true",
                            "strictAll: true"
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: "Как настроить алиасы для импортов?",
                        options: [
                            "Через baseUrl и paths в tsconfig",
                            "Только через Webpack-конфиг",
                            "Через специальный файл aliases.json",
                            "Алиасы невозможны в TypeScript"
                        ],
                        correctAnswer: 1
                    }
                ]
            },
            // Урок 9: Отладка и тестирование
            {
                id: "6-46",
                type: "theory",
                title: "Отладка и тестирование",
                content: `
                    <h2>Техники отладки TypeScript-кода</h2>
                    
                    <h3>1. Использование source maps</h3>
                    <pre><code>// tsconfig.json
{
    "compilerOptions": {
        "sourceMap": true
    }
}</code></pre>
                    
                    <h3>2. Утилитарные типы для отладки</h3>
                    <pre><code>type DebugType&lt;T&gt; = {
    [K in keyof T]: T[K];
};

// Использование для просмотра сложных типов
type UserDebug = DebugType&lt;ComplexUserType&gt;;</code></pre>
                    
                    <h3>3. Проверка типов в runtime</h3>
                    <pre><code>function assertIsUser(user: any): asserts user is User {
    if (!user.id || !user.name) {
        throw new Error('Not a User type');
    }
}

// В коде:
const data = await response.json();
assertIsUser(data);</code></pre>
                    
                    <h2>Тестирование TypeScript-кода</h2>
                    <h3>Jest с TypeScript:</h3>
                    <pre><code>// Установка
npm install --save-dev ts-jest @types/jest

// Конфиг jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};</code></pre>
                    
                    <h3>Пример теста:</h3>
                    <pre><code>import { sum } from './math';

describe('sum function', () => {
    it('correctly adds numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });
    
    it('handles type checking', () => {
        // @ts-expect-error - проверка на неверные типы
        expect(sum('1', 2)).toBeNaN();
    });
});</code></pre>
                `
            },
            // Урок 10: Итоговый проект
            {
                id: "6-47",
                type: "coding",
                title: "Миграция модуля проекта",
                description: `
                    <p>Задача: перенести на TypeScript модуль работы с заказами.</p>
                    <h3>Исходный JS-код:</h3>
                    <pre><code>// orderService.js
export function createOrder(productIds, userId) {
    if (!productIds.length) {
        throw new Error('Empty order');
    }
    
    return {
        id: Date.now(),
        products: productIds,
        user: userId,
        status: 'pending',
        createdAt: new Date()
    };
}

export function validateOrder(order) {
    return order.products.length > 0 && order.user;
}

// orderUtils.js
export function getOrderTotal(order, products) {
    return order.products
        .map(id => products.find(p => p.id === id)?.price ?? 0)
        .reduce((sum, price) => sum + price, 0);
}</code></pre>
                    
                    <h3>Требования:</h3>
                    <ol>
                        <li>Создать интерфейсы для Order, Product и User</li>
                        <li>Типизировать все функции</li>
                        <li>Добавить обработку ошибок</li>
                        <li>Написать тесты</li>
                    </ol>
                `,
                solution: `// types.ts
interface Product {
    id: number;
    price: number;
    name: string;
}

interface User {
    id: number;
    name: string;
    email: string;
}

interface Order {
    id: number;
    products: number[];
    user: number;
    status: 'pending' | 'completed' | 'cancelled';
    createdAt: Date;
}

// orderService.ts
export function createOrder(
    productIds: number[],
    userId: number
): Order {
    if (!productIds.length) {
        throw new Error('Empty order');
    }
    
    return {
        id: Date.now(),
        products: productIds,
        user: userId,
        status: 'pending',
        createdAt: new Date()
    };
}

export function validateOrder(order: Order): boolean {
    return order.products.length > 0 && !!order.user;
}

// orderUtils.ts
export function getOrderTotal(
    order: Pick<Order, 'products'>,
    products: Product[]
): number {
    return order.products
        .map(id => products.find(p => p.id === id)?.price ?? 0)
        .reduce((sum, price) => sum + price, 0);
}

// Тесты (order.test.ts)
describe('Order Service', () => {
    const testProducts = [1, 2, 3];
    const testUser = 123;
    
    it('creates valid order', () => {
        const order = createOrder(testProducts, testUser);
        expect(order.products).toEqual(testProducts);
        expect(validateOrder(order)).toBeTruthy();
    });
    
    it('throws for empty order', () => {
        expect(() => createOrder([], testUser)).toThrow();
    });
    
    it('calculates total correctly', () => {
        const products: Product[] = [
            { id: 1, price: 100, name: 'Product 1' },
            { id: 2, price: 200, name: 'Product 2' }
        ];
        const order = createOrder([1, 2], testUser);
        expect(getOrderTotal(order, products)).toBe(300);
    });
});`,
                tests: [
                    {
                        description: "createOrder должен возвращать корректный Order",
                        test: `const order = createOrder([1, 2], 123);
expect(order).toHaveProperty('id');
expect(order.status).toBe('pending');`
                    },
                    {
                        description: "validateOrder должен проверять обязательные поля",
                        test: `const validOrder = createOrder([1], 1);
const invalidOrder = { ...validOrder, products: [] };
expect(validateOrder(validOrder)).toBe(true);
expect(validateOrder(invalidOrder)).toBe(false);`
                    }
                ]
            },
            {
                id: "6-48",
                type: "theory",
                title: "Настройка проекта",
                content: `
                    <h2>Создание React+TypeScript приложения</h2>
                    
                    <h3>1. Инициализация проекта:</h3>
                    <pre><code>npx create-react-app my-app --template typescript
cd my-app</code></pre>
                    
                    <h3>2. Рекомендуемая структура папок:</h3>
                    <pre><code>src/
├── api/          # API-клиенты и типы
├── components/   # Компоненты
├── pages/        # Страницы
├── store/        # State management
├── utils/        # Вспомогательные функции
├── App.tsx
└── index.tsx</code></pre>
                    
                    <h3>3. Дополнительные зависимости:</h3>
                    <pre><code>npm install axios react-router-dom @types/react-router-dom
npm install --save-dev @testing-library/react-hooks prettier</code></pre>
                    
                    <h3>4. Настройка абсолютных импортов (tsconfig.json):</h3>
                    <pre><code>{
    "compilerOptions": {
        "baseUrl": "./src",
        "paths": {
            "@components/*": ["components/*"],
            "@api/*": ["api/*"]
        }
    }
}</code></pre>
                `
            },
            // Урок 2: Практика - настройка проекта
            {
                id: "6-49",
                type: "coding",
                title: "Инициализация приложения",
                description: `
                    <p>Задача: настроить базовую структуру проекта</p>
                    <ol>
                        <li>Создать React+TypeScript проект</li>
                        <li>Настроить абсолютные импорты</li>
                        <li>Создать базовую структуру папок</li>
                        <li>Добавить необходимые зависимости</li>
                    </ol>
                `,
                solution: `# В терминале:
npx create-react-app task-manager --template typescript
cd task-manager
npm install axios react-router-dom @types/react-router-dom
npm install --save-dev @testing-library/react-hooks prettier

# Затем настроить tsconfig.json как в теории`,
                tests: [
                    {
                        description: "Проект должен запускаться без ошибок",
                        test: `npm start`
                    },
                    {
                        description: "Должны быть установлены все зависимости",
                        test: `npm list axios react-router-dom typescript`
                    }
                ]
            },
            // Урок 3: Типизация API
            {
                id: "6-50",
                type: "theory",
                title: "Типизация API-запросов",
                content: `
                    <h2>Создание типизированного API-клиента</h2>
                    
                    <h3>1. Базовый клиент (api/client.ts):</h3>
                    <pre><code>import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

// Интерцепторы для обработки ошибок
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Типизированная обработка ошибок
        if (error.response) {
            throw new Error(\`API Error: \${error.response.status}\`);
        }
        throw error;
    }
);

export default apiClient;</code></pre>
                    
                    <h3>2. Типизированные API-методы (api/tasks.ts):</h3>
                    <pre><code>import apiClient from './client';

interface Task {
    id: number;
    title: string;
    completed: boolean;
    createdAt: string;
}

export const fetchTasks = async (): Promise&lt;Task[]&gt; => {
    const response = await apiClient.get&lt;Task[]&gt;('/tasks');
    return response.data;
};

export const createTask = async (task: Omit&lt;Task, 'id' | 'createdAt'&gt;): Promise&lt;Task&gt; => {
    const response = await apiClient.post&lt;Task&gt;('/tasks', task);
    return response.data;
};</code></pre>
                    
                    <h3>3. Кастомные хуки для API (api/hooks.ts):</h3>
                    <pre><code>import { useQuery } from 'react-query';
import { fetchTasks } from './tasks';

export const useTasks = () => {
    return useQuery&lt;Task[], Error&gt;('tasks', fetchTasks);
};</code></pre>
                `
            },
            // Урок 4: Практика - типизация API
            {
                id: "6-51",
                type: "coding",
                title: "Создание API-клиента",
                description: `
                    <p>Задача: реализовать типизированный API-клиент для работы с задачами</p>
                    <ol>
                        <li>Создать базовый API-клиент на axios</li>
                        <li>Определить интерфейсы для данных</li>
                        <li>Реализовать методы для работы с задачами</li>
                        <li>Добавить обработку ошибок</li>
                    </ol>
                `,
                starterCode: `// api/client.ts
// Реализуйте базовый API-клиент

// api/tasks.ts
// Создайте методы для работы с задачами

// types/task.ts
// Определите интерфейсы для задач`,
                solution: `// api/client.ts
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            throw new Error(\`API Error: \${error.response.status}\`);
        }
        throw new Error('Network error');
    }
);

export default apiClient;

// types/task.ts
export interface Task {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

// api/tasks.ts
import apiClient from './client';
import { Task } from '../types/task';

export const fetchTasks = async (): Promise<Task[]> => {
    const response = await apiClient.get<Task[]>('/todos');
    return response.data;
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
    const response = await apiClient.post<Task>('/todos', task);
    return response.data;
};`,
                tests: [
                    {
                        description: "API-клиент должен корректно обрабатывать ошибки",
                        test: `// Тест обработки ошибок
const mockError = new Error('API Error');
jest.spyOn(apiClient, 'get').mockRejectedValue(mockError);

await expect(fetchTasks()).rejects.toThrow('API Error');`
                    }
                ]
            },
            // Урок 5: Создание компонентов
            {
                id: "6-52",
                type: "theory",
                title: "Типизированные React-компоненты",
                content: `
                    <h2>Создание компонентов с TypeScript</h2>
                    
                    <h3>1. Типизированные пропсы:</h3>
                    <pre><code>interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskItem: React.FC&lt;TaskItemProps&gt; = ({ task, onToggle, onDelete }) => {
    return (
        &lt;div className="task-item"&gt;
            &lt;input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => onToggle(task.id)} 
            /&gt;
            &lt;span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}&gt;
                {task.title}
            &lt;/span&gt;
            &lt;button onClick={() => onDelete(task.id)}&gt;Delete&lt;/button&gt;
        &lt;/div&gt;
    );
};</code></pre>
                    
                    <h3>2. Работа с состоянием:</h3>
                    <pre><code>const [tasks, setTasks] = useState&lt;Task[]&gt;([]);
const [isLoading, setIsLoading] = useState&lt;boolean&gt;(false);
const [error, setError] = useState&lt;string | null&gt;(null);</code></pre>
                    
                    <h3>3. Типизация событий:</h3>
                    <pre><code>const handleSubmit = (e: React.FormEvent&lt;HTMLFormElement&gt;) => {
    e.preventDefault();
    // Обработка формы
};

const handleInputChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) => {
    setInputValue(e.target.value);
};</code></pre>
                `
            },
            // Урок 6: Практика - создание компонентов
            {
                id: "6-53",
                type: "coding",
                title: "Реализация TaskList",
                description: `
                    <p>Задача: создать типизированный компонент списка задач</p>
                    <ol>
                        <li>Создать компонент TaskList</li>
                        <li>Реализовать загрузку задач через API</li>
                        <li>Добавить обработку состояний загрузки и ошибок</li>
                        <li>Реализовать возможность отметки задач</li>
                    </ol>
                `,
                starterCode: `// components/TaskList.tsx
// Реализуйте компонент списка задач`,
                solution: `import React, { useState, useEffect } from 'react';
import { fetchTasks, Task } from '@api/tasks';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadTasks = async () => {
            setIsLoading(true);
            try {
                const data = await fetchTasks();
                setTasks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        
        loadTasks();
    }, []);

    const handleToggle = (id: number) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="task-list">
            {tasks.map(task => (
                <div key={task.id} className="task-item">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggle(task.id)}
                    />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.title}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default TaskList;`,
                tests: [
                    {
                        description: "Компонент должен отображать список задач",
                        test: `const mockTasks: Task[] = [
    { id: 1, title: 'Task 1', completed: false, userId: 1 },
    { id: 2, title: 'Task 2', completed: true, userId: 1 }
];

jest.spyOn(api, 'fetchTasks').mockResolvedValue(mockTasks);

const { findAllByText } = render(<TaskList />);
const items = await findAllByText(/Task/);
expect(items).toHaveLength(2);`
                    }
                ]
            },
            // Урок 7: Оптимизация и тестирование
            {
                id: "6-54",
                type: "theory",
                title: "Оптимизация приложения",
                content: `
                    <h2>Оптимизация TypeScript-приложения</h2>
                    
                    <h3>1. Code splitting:</h3>
                    <pre><code>const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = () => (
    &lt;React.Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
        &lt;LazyComponent /&gt;
    &lt;/React.Suspense&gt;
);</code></pre>
                    
                    <h3>2. Мемоизация:</h3>
                    <pre><code>const memoizedTasks = React.useMemo(() => 
    tasks.filter(t => t.completed), 
    [tasks]
);

const handleTaskToggle = React.useCallback(
    (id: number) => {
        // Обработка
    },
    [dependencies]
);</code></pre>
                    
                    <h3>3. Тестирование:</h3>
                    <pre><code>// Тест компонента
test('should render tasks', async () => {
    jest.spyOn(api, 'fetchTasks').mockResolvedValue(mockTasks);
    render(&lt;TaskList /&gt;);
    expect(await screen.findByText('Task 1')).toBeInTheDocument();
});

// Тест типов
test('Task type should have required fields', () => {
    const testTask: Task = {
        id: 1,
        title: 'Test',
        completed: false,
        createdAt: new Date().toISOString()
    };
    expect(testTask).toBeDefined();
});</code></pre>
                `
            },
            // Урок 8: Практика - тестирование
            {
                id: "6-55",
                type: "coding",
                title: "Написание тестов",
                description: `
                    <p>Задача: написать тесты для компонентов и API</p>
                    <ol>
                        <li>Тесты для API-клиента</li>
                        <li>Тесты для компонента TaskList</li>
                        <li>Тесты типов</li>
                    </ol>
                `,
                starterCode: `// tests/api.test.ts
// Напишите тесты для API

// tests/TaskList.test.tsx
// Напишите тесты для компонента`,
                solution: `// tests/api.test.ts
import { fetchTasks } from '@api/tasks';
import apiClient from '@api/client';

describe('Tasks API', () => {
    beforeEach(() => {
        jest.spyOn(apiClient, 'get').mockClear();
    });

    it('should fetch tasks', async () => {
        const mockTasks = [
            { id: 1, title: 'Task 1', completed: false, userId: 1 }
        ];
        jest.spyOn(apiClient, 'get').mockResolvedValue({ data: mockTasks });
        
        const result = await fetchTasks();
        expect(result).toEqual(mockTasks);
        expect(apiClient.get).toHaveBeenCalledWith('/todos');
    });

    it('should handle API errors', async () => {
        jest.spyOn(apiClient, 'get').mockRejectedValue({
            response: { status: 500 }
        });
        
        await expect(fetchTasks()).rejects.toThrow('API Error: 500');
    });
});

// tests/TaskList.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '@components/TaskList';
import { fetchTasks } from '@api/tasks';

jest.mock('@api/tasks');

describe('TaskList', () => {
    const mockTasks = [
        { id: 1, title: 'Task 1', completed: false, userId: 1 },
        { id: 2, title: 'Task 2', completed: true, userId: 1 }
    ];

    beforeEach(() => {
        (fetchTasks as jest.Mock).mockResolvedValue(mockTasks);
    });

    it('should render tasks', async () => {
        render(<TaskList />);
        expect(await screen.findByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
    });

    it('should toggle task completion', async () => {
        render(<TaskList />);
        const checkbox = await screen.findByLabelText('Task 1');
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
    });
});`,
                tests: [
                    {
                        description: "Тесты должны проходить",
                        test: `npm test`
                    }
                ]
            },
            // Урок 9: Развертывание
            {
                id: "6-56",
                type: "theory",
                title: "Развертывание приложения",
                content: `
                    <h2>Деплой TypeScript-приложения</h2>
                    
                    <h3>1. Сборка проекта:</h3>
                    <pre><code>npm run build</code></pre>
                    
                    <h3>2. Настройка окружения:</h3>
                    <pre><code>// src/config.ts
interface AppConfig {
    apiUrl: string;
    env: 'development' | 'production';
}

const config: AppConfig = {
    apiUrl: process.env.REACT_APP_API_URL || '/api',
    env: process.env.NODE_ENV as 'development' | 'production'
};

export default config;</code></pre>
                    
                    <h3>3. Docker-контейнер:</h3>
                    <pre><code># Dockerfile
FROM node:16 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]</code></pre>
                    
                    <h3>4. Развертывание:</h3>
                    <pre><code># Сборка и запуск контейнера
docker build -t my-app .
docker run -p 80:80 my-app

# Или деплой на Vercel/Netlify
npm install -g vercel
vercel</code></pre>
                `
            },
            // Урок 10: Итоговый проект
            {
                id: "6-57",
                type: "project",
                title: "Завершение проекта",
                description: `
                    <h2>Финальный проект: Task Manager</h2>
                    <p>Создайте полноценное приложение для управления задачами с использованием:</p>
                    <ul>
                        <li>React с TypeScript</li>
                        <li>Типизированного API-клиента</li>
                        <li>React Router</li>
                        <li>Локального состояния или Redux</li>
                    </ul>
                    
                    <h3>Требования:</h3>
                    <ol>
                        <li>Просмотр списка задач</li>
                        <li>Добавление/удаление задач</li>
                        <li>Отметка выполнения</li>
                        <li>Фильтрация задач</li>
                        <li>Адаптивный дизайн</li>
                        <li>Тесты для основных компонентов</li>
                        <li>Документация по запуску</li>
                    </ol>
                    
                    <h3>Дополнительно:</h3>
                    <ul>
                        <li>Авторизация пользователей</li>
                        <li>Оффлайн-режим</li>
                        <li>Деплой на выбранный хостинг</li>
                    </ul>
                `,
                evaluationCriteria: `
                    <h3>Критерии оценки:</h3>
                    <ol>
                        <li>Корректность типизации (20 баллов)</li>
                        <li>Полнота функционала (20 баллов)</li>
                        <li>Качество кода и структура (20 баллов)</li>
                        <li>Тестирование (20 баллов)</li>
                        <li>Документация и деплой (20 баллов)</li>
                    </ol>
                `,
                resources: `
                    <h3>Полезные ресурсы:</h3>
                    <ul>
                        <li><a href="https://jsonplaceholder.typicode.com/" target="_blank">Mock API</a></li>
                        <li><a href="https://create-react-app.dev/docs/adding-typescript/" target="_blank">CRA + TypeScript</a></li>
                        <li><a href="https://www.typescriptlang.org/docs/handbook/react.html" target="_blank">TypeScript для React</a></li>
                    </ul>
                `
            }
            // Урок 10: Финальный тест
            

        ]
    }

    
];