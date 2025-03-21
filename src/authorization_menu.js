import '/styles/main-menu.css';

// Функция для получения HTML-кода попапа
export function getHTMLForPopup() {
    return `
        <div class="overlay hidden" id="authorizationOverlay">
            <div class="authorization_menu">
                <button class="close-btn" id="closeAuthPopup">&times;</button>
                <h2>Авторизация</h2>
                <form>
                <label for="username">Логин</label>
                <input type="text" id="username" name="username" required>
                
                <label for="password">Пароль</label>
                <input type="password" id="password" name="password" required>
                
                <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    `;
}

// Функция для вставки попапа в DOM
export function initializeAuthPopup() {
    const popupHTML = getHTMLForPopup();
    const body = document.body;

    // Проверяем, не добавлен ли попап уже в DOM
    if (!document.getElementById('authorizationOverlay')) {
        body.insertAdjacentHTML('beforeend', popupHTML);
        console.log('Попап добавлен в DOM'); // Логируем добавление
    } else {
        console.log('Попап уже существует в DOM'); // Логируем, если попап уже есть
    }
}

// Функция для показа окна авторизации
export function showAuthPopup() {
    const overlay = document.getElementById('authorizationOverlay');
    if (overlay) {
        overlay.classList.remove('hidden');
        console.log('Попап отображён'); // Логируем отображение
    } else {
        console.error('Ошибка: попап авторизации не найден в DOM.'); // Логируем ошибку
    }
}

// Функция для привязки события закрытия окна
export function setupCloseAuthPopup() {
    const closeButton = document.getElementById('closeAuthPopup');
    const overlay = document.getElementById('authorizationOverlay');
    
    if (closeButton && overlay) {
        closeButton.addEventListener('click', () => {
            overlay.classList.add('hidden');
            console.log('Попап закрыт'); // Логируем закрытие
        });
    } else {
        console.error('Ошибка: элементы для закрытия попапа не найдены.'); // Логируем ошибку
    }
}