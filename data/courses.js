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
    }   
];