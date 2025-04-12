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
    }
    
];