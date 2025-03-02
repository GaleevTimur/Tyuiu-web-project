
export function basicCSSConcepts() {
    return `
        <div class="container">
        <h1>Изучение CSS</h1>
        <p>CSS (*Cascading Style Sheets*) — это язык стилей, который используется для оформления веб-страниц. Он позволяет задавать цвета, шрифты, отступы, анимации и многое другое, делая сайты красивыми и удобными для пользователей.</p>
        
        <h2>Что такое CSS?</h2>
        <p>CSS отвечает за внешний вид веб-страницы и отделяет стиль от структуры, что позволяет:</p>
        <ul>
            <li>Изменять оформление без изменения HTML-кода.</li>
            <li>Делать сайты адаптивными под разные устройства.</li>
            <li>Добавлять анимации и интерактивные элементы.</li>
        </ul>
        
        <h2>Основные понятия</h2>
        <div class="example">
            <p><strong>Пример CSS-кода:</strong></p>
            <pre>
body {
  background-color: #f0f0f0;
  color: #333;
  font-family: Arial, sans-serif;
}
            </pre>
        </div>
        
        <h3>Селекторы</h3>
        <p>Селекторы позволяют выбирать HTML-элементы, к которым применяется стиль.</p>
        <div class="example">
            <pre>
p { color: blue; } /* Все параграфы будут синими */
#header { font-size: 24px; } /* Элемент с id="header" увеличится */
.button { background-color: red; } /* Все элементы с class="button" станут красными */
            </pre>
        </div>
        
        <h3>Свойства и значения</h3>
        <div class="example">
            <pre>
h1 {
  font-size: 30px;
  text-align: center;
  color: darkblue;
}
            </pre>
        </div>
        
        <h3>Каскадность и наследование</h3>
        <p>CSS применяет стили в порядке приоритета:</p>
        <ol>
            <li>Браузерные стили (по умолчанию).</li>
            <li>Внешние файлы CSS.</li>
            <li>Встроенные стили (<code>&lt;style&gt;</code> в HTML).</li>
            <li>Встроенные в атрибут <code>style=""</code>.</li>
        </ol>
        
        <h2>Адаптивность (Responsive Design)</h2>
        <div class="example">
            <pre>
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
            </pre>
        </div>
        
        <h2>Интерактивный пример</h2>
        <p>Нажмите на кнопку, чтобы изменить цвет заголовка:</p>
        <button onclick="changeColor()">Изменить цвет</button>
    </div>
    `;
}