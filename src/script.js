import { showAuthPopup, getHTMLForPopup, setupCloseAuthPopup } from './authorization_menu.js';

document.addEventListener('DOMContentLoaded', () => {
    // Вставляем HTML для окна авторизации
    document.body.insertAdjacentHTML('beforeend', getHTMLForPopup());
    
    // Привязываем событие закрытия окна авторизации
    setupCloseAuthPopup();

    // Привязываем событие открытия окна авторизации к кнопке профиля
    const profileButton = document.getElementById('authorizationOverlay_button');
    if (profileButton) {
        profileButton.addEventListener('click', () => {
            showAuthPopup();
        });
    }
});
