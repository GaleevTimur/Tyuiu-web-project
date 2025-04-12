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
    },

       
];