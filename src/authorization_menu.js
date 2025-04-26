import '/styles/main-menu.css';

// Конфигурация Firebase (вынесите в отдельный файл при необходимости)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Инициализация Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

// Функция для получения HTML-кода попапа
export function getHTMLForPopup() {
    return `
        <div class="overlay hidden" id="authorizationOverlay">
            <div class="authorization_menu">
                <button class="close-btn" id="closeAuthPopup">&times;</button>
                
                <!-- Контейнер для форм -->
                <div id="authFormsContainer">
                    <!-- Форма авторизации (видна по умолчанию) -->
                    <form id="loginForm" class="auth-form">
                        <h2>Вход</h2>
                        <label for="loginEmail">Email</label>
                        <input type="email" id="loginEmail" required>
                        
                        <label for="loginPassword">Пароль</label>
                        <input type="password" id="loginPassword" required>
                        
                        <button type="submit">Войти</button>
                        <div class="auth-switch">
                            Нет аккаунта? <a href="#" id="switchToRegister">Зарегистрироваться</a>
                        </div>
                    </form>
                    
                    <!-- Форма регистрации (скрыта по умолчанию) -->
                    <form id="registerForm" class="auth-form" style="display: none;">
                        <h2>Регистрация</h2>
                        <label for="registerEmail">Email</label>
                        <input type="email" id="registerEmail" required>
                        
                        <label for="registerPassword">Пароль</label>
                        <input type="password" id="registerPassword" required>
                        
                        <label for="confirmPassword">Подтвердите пароль</label>
                        <input type="password" id="confirmPassword" required>
                        
                        <button type="submit">Зарегистрироваться</button>
                        <div class="auth-switch">
                            Уже есть аккаунт? <a href="#" id="switchToLogin">Войти</a>
                        </div>
                    </form>
                </div>
                
                <div id="authMessage"></div>
            </div>
        </div>
    `;
}



// Функция для вставки попапа в DOM
export function initializeAuthPopup() {
    const popupHTML = getHTMLForPopup();
    const body = document.body;

    if (!document.getElementById('authorizationOverlay')) {
        body.insertAdjacentHTML('beforeend', popupHTML);
        setupAuthHandlers(); // Добавляем обработчики для Firebase
        console.log('Попап добавлен в DOM с Firebase');
    } else {
        console.log('Попап уже существует в DOM');
    }
}

function showLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm && registerForm) {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }
}

// Функция для показа формы регистрации
function showRegisterForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm && registerForm) {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

// Новая функция для настройки обработчиков авторизации
function setupAuthHandlers() {
    // Привязка элементов
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    
    // Обработчики переключения
    switchToRegister?.addEventListener('click', (e) => {
        e.preventDefault();
        showRegisterForm();
    });
    
    switchToLogin?.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginForm();
    });

    // Обработчик входа
    loginForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            showAuthMessage('success', 'Вход выполнен!');
            setTimeout(() => {
                document.getElementById('authorizationOverlay').classList.add('hidden');
            }, 1500);
        } catch (error) {
            showAuthMessage('error', getFirebaseError(error.code));
        }
    });

    // Обработчик регистрации
    registerForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            showAuthMessage('error', 'Пароли не совпадают');
            return;
        }

        try {
            await auth.createUserWithEmailAndPassword(email, password);
            showAuthMessage('success', 'Регистрация успешна!');
            // Автоматически переключаем на форму входа после регистрации
            setTimeout(() => {
                registerForm.classList.remove('active');
                loginForm.classList.add('active');
            }, 1500);
        } catch (error) {
            showAuthMessage('error', getFirebaseError(error.code));
        }
    });
}

// Функция для показа сообщений
function showAuthMessage(type, text) {
    const authMessage = document.getElementById('authMessage');
    if (authMessage) {
        authMessage.textContent = text;
        authMessage.className = 'auth-message ' + type;
        setTimeout(() => {
            authMessage.textContent = '';
            authMessage.className = 'auth-message';
        }, 3000);
    }
}

// Функция для перевода ошибок Firebase
function getFirebaseError(code) {
    const errors = {
        'auth/email-already-in-use': 'Этот email уже используется',
        'auth/invalid-email': 'Неверный формат email',
        'auth/weak-password': 'Пароль должен содержать минимум 6 символов',
        'auth/user-not-found': 'Пользователь не найден',
        'auth/wrong-password': 'Неверный пароль',
        'auth/too-many-requests': 'Слишком много попыток. Попробуйте позже'
    };
    return errors[code] || 'Произошла ошибка: ' + code;
}

// Остальные ваши функции остаются без изменений
export function showAuthPopup() {
    const overlay = document.getElementById('authorizationOverlay');
    if (overlay) {
        overlay.classList.remove('hidden');
        showLoginForm(); // Всегда показываем форму входа при открытии
        console.log('Открыта форма авторизации');
    } else {
        console.error('Ошибка: попап не найден');
    }
}

export function setupCloseAuthPopup() {
    const closeButton = document.getElementById('closeAuthPopup');
    const overlay = document.getElementById('authorizationOverlay');
    
    if (closeButton && overlay) {
        closeButton.addEventListener('click', () => {
            overlay.classList.add('hidden');
            console.log('Попап закрыт');
        });
    } else {
        console.error('Ошибка: элементы для закрытия попапа не найдены.');
    }
}