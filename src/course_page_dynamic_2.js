import '/styles/course_filling2.css';

export function basicHTMLConcepts() {
    return `
        <div class="basicHTMLConcepts">
            <h1>Что такое HTML?</h1>
            <p>
                HTML (HyperText Markup Language) — это стандартный язык разметки, который используется для создания веб-страниц. 
                Он задаёт структуру и содержание страницы, определяя, как текст, изображения, видео и другие элементы будут отображаться в браузере.
            </p>

            <h2>Основные понятия HTML</h2>

            <h3>1. Структура HTML-документа</h3>
            <p>
                Каждый HTML-документ начинается с декларации <code>&lt;!DOCTYPE html&gt;</code>, которая сообщает браузеру, что используется последняя версия HTML. Основная структура документа включает:
            </p>
            <ul>
                <li><code>&lt;html&gt;</code> — корневой элемент.</li>
                <li><code>&lt;head&gt;</code> — метаинформация о документе (заголовок, стили, скрипты).</li>
                <li><code>&lt;body&gt;</code> — содержимое страницы, видимое пользователю.</li>
            </ul>
            <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Моя первая страница&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Добро пожаловать!&lt;/h1&gt;
    &lt;p&gt;Это мой первый веб-сайт.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>

            <h3>2. Элементы и их атрибуты</h3>
            <p>
                HTML состоит из элементов, заключённых в теги, например <code>&lt;h1&gt;</code> или <code>&lt;p&gt;</code>. Атрибуты добавляют элементам дополнительные свойства.
            </p>
            <pre><code>
&lt;img src="image.jpg" alt="Описание изображения" width="300"&gt;
            </code></pre>

            <h3>3. Семантические элементы</h3>
            <p>
                Семантические элементы, такие как <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, улучшают читаемость кода и помогают поисковым системам понимать структуру страницы.
            </p>
            <pre><code>
&lt;header&gt;
    &lt;h1&gt;Мой блог&lt;/h1&gt;
&lt;/header&gt;
&lt;article&gt;
    &lt;h2&gt;Первая статья&lt;/h2&gt;
    &lt;p&gt;Это пример статьи в блоге.&lt;/p&gt;
&lt;/article&gt;
&lt;footer&gt;
    &lt;p&gt;Автор: Иван Иванов&lt;/p&gt;
&lt;/footer&gt;
            </code></pre>

            <h3>4. Формы и их элементы</h3>
            <p>Формы позволяют пользователям взаимодействовать с веб-сайтом: вводить данные, отправлять запросы и т.д.</p>
            <pre><code>
&lt;form action="/submit" method="post"&gt;
    &lt;label for="name"&gt;Имя:&lt;/label&gt;
    &lt;input type="text" id="name" name="name" required&gt;
    &lt;br&gt;
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" required&gt;
    &lt;br&gt;
    &lt;button type="submit"&gt;Отправить&lt;/button&gt;
&lt;/form&gt;
            </code></pre>

            <h2>Методы обучения HTML</h2>

            <h3>1. Лекция:</h3>
            <ul>
                <li>Разбор структуры HTML-документа.</li>
                <li>Обсуждение основных тегов и атрибутов.</li>
                <li>Введение в семантическую разметку.</li>
            </ul>

            <h3>2. Практическое занятие:</h3>
            <p>Создание веб-страницы с заголовками, параграфами, списками, изображениями и формами.</p>
            <p><strong>Пример практического задания:</strong> Создайте веб-страницу с заголовком, описанием, изображением и формой обратной связи.</p>

            <h2>Интерактивные элементы</h2>

            <h3>1. Изменение текста:</h3>
            <p>Нажмите на кнопку, чтобы изменить текст на странице:</p>
            <pre><code>
&lt;div&gt;
    &lt;p id="text"&gt;Привет, мир!&lt;/p&gt;
    &lt;button onclick="document.getElementById('text').innerText = 'HTML — это просто!'"&gt;
        Изменить текст
    &lt;/button&gt;
&lt;/div&gt;
            </code></pre>

            <h3>2. Изображение по нажатию:</h3>
            <p>Нажмите кнопку, чтобы отобразить изображение:</p>
            <pre><code>
&lt;div&gt;
    &lt;button onclick="document.getElementById('image').style.display = 'block'"&gt;
        Показать изображение
    &lt;/button&gt;
    &lt;img id="image" src="image.jpg" alt="Красивая картинка" style="display:none;"&gt;
&lt;/div&gt;
            </code></pre>

            <h2>Совет для начинающих</h2>
            <p>Изучая HTML, старайтесь экспериментировать: создавайте простые страницы, пробуйте разные теги и стили. Ошибки — это часть обучения.</p>

            <h2>Итог</h2>
            <p>Освоив основы HTML, вы сможете создавать структуры веб-страниц, которые станут основой для добавления стилей (CSS) и интерактивности (JavaScript).</p>
        </div>
    `;
}