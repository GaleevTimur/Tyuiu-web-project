import '../style.css';

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

// Функция для показа окна авторизации
export function showAuthPopup() {
    const overlay = document.getElementById('authorizationOverlay');
    if (overlay) {
        overlay.classList.remove('hidden');
    }
}

// Функция для привязки события закрытия окна
export function setupCloseAuthPopup() {
    const closeButton = document.getElementById('closeAuthPopup');
    const overlay = document.getElementById('authorizationOverlay');
    
    if (closeButton && overlay) {
        closeButton.addEventListener('click', () => {
            overlay.classList.add('hidden');
        });
    }
}