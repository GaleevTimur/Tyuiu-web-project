import '/styles/main-menu.css';
import { initializeAuthPopup, showAuthPopup, setupCloseAuthPopup } from './authorization_menu.js';
import { renderLesson } from './lesson.js';
import { courses } from '/data/courses.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeAuthPopup(); // Инициализация попапа
    setupCloseAuthPopup(); // Настройка закрытия попапа
});



// Данные о курсах
const coursesData = [
  {
    id: 1,
    title: 'HTML и CSS для начинающих',
    description: 'Изучите основы веб-разработки с нуля. Создавайте красивые и отзывчивые веб-страницы, которые будут привлекать внимание пользователей.',
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tag: 'Начальный',
    price: 'Бесплатно',
    duration: '6 недель',
    fullDescription: `
      <h2>О курсе</h2>
      <p>Этот курс предназначен для тех, кто хочет начать свой путь в веб-разработке. Вы изучите основы HTML и CSS, научитесь создавать современные и адаптивные веб-страницы.</p>
      
      <h2>Чему вы научитесь</h2>
      <ul>
        <li>Основам HTML5 и семантической верстки</li>
        <li>Современным возможностям CSS3</li>
        <li>Созданию адаптивных макетов с помощью Flexbox и Grid</li>
        <li>Работе с анимациями и переходами</li>
        <li>Основам доступности и SEO-оптимизации</li>
      </ul>
      
      <h2>Программа курса</h2>
      <div class="course-modules">
        <div class="module">
          <h3>Модуль 1: Введение в HTML</h3>
          <ul>
            <li>Структура HTML-документа</li>
            <li>Основные теги и атрибуты</li>
            <li>Семантическая верстка</li>
            <li>Работа с текстом и ссылками</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 2: Основы CSS</h3>
          <ul>
            <li>Синтаксис CSS</li>
            <li>Селекторы и специфичность</li>
            <li>Работа с цветом и фоном</li>
            <li>Блочная модель (Box Model)</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 3: Верстка макетов</h3>
          <ul>
            <li>Позиционирование элементов</li>
            <li>Flexbox</li>
            <li>CSS Grid</li>
            <li>Создание адаптивных макетов</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 4: Продвинутый CSS</h3>
          <ul>
            <li>Псевдоклассы и псевдоэлементы</li>
            <li>Трансформации и переходы</li>
            <li>Анимации</li>
            <li>Медиа-запросы</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 5: Практический проект</h3>
          <ul>
            <li>Верстка многостраничного сайта</li>
            <li>Оптимизация и тестирование</li>
            <li>Публикация проекта</li>
            <li>Обзор дальнейших шагов в веб-разработке</li>
          </ul>
        </div>
      </div>
      button: '<button class="course-button" data-course-id="1">Перейти к курсу</button>'
    `
    
  },
  {
    id: 2,
    title: 'JavaScript: Основы и продвинутые концепции',
    description: 'Полное руководство по JavaScript от основ до продвинутых тем, включая ES6+ и асинхронное программирование.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tag: 'Средний',
    price: 'Бесплатно',
    duration: '8 недель',
    fullDescription: `
      <h2>О курсе</h2>
      <p>В этом курсе вы изучите JavaScript — один из самых популярных языков программирования, который используется для создания интерактивных веб-страниц и веб-приложений. Вы освоите основы языка, современные концепции и инструменты разработки.</p>
      
      <h2>Чему вы научитесь</h2>
      <ul>
        <li>Основам JavaScript: синтаксис, переменные, типы данных и функции</li>
        <li>Работе с DOM для создания интерактивных веб-страниц</li>
        <li>Использованию современных возможностей ES6+</li>
        <li>Асинхронному программированию: Promises, async/await</li>
        <li>Основам работы с API и Fetch</li>
        <li>Тестированию и отладке кода</li>
      </ul>
      
      <h2>Программа курса</h2>
      <div class="course-modules">
        <div class="module">
          <h3>Модуль 1: Введение в JavaScript</h3>
          <ul>
            <li>Основы синтаксиса JavaScript</li>
            <li>Переменные, типы данных и операторы</li>
            <li>Условные конструкции и циклы</li>
            <li>Функции и их использование</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 2: Работа с DOM</h3>
          <ul>
            <li>Что такое DOM и как с ним работать</li>
            <li>Выбор и изменение элементов на странице</li>
            <li>Создание и удаление элементов</li>
            <li>Обработка событий</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 3: Современный JavaScript (ES6+)</h3>
          <ul>
            <li>Стрелочные функции</li>
            <li>Деструктуризация</li>
            <li>Шаблонные строки</li>
            <li>Классы и модули</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 4: Асинхронное программирование</h3>
          <ul>
            <li>Callback-функции</li>
            <li>Promises и их использование</li>
            <li>Async/await</li>
            <li>Работа с Fetch API</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 5: Практический проект</h3>
          <ul>
            <li>Создание интерактивного веб-приложения</li>
            <li>Интеграция с внешними API</li>
            <li>Тестирование и отладка</li>
            <li>Публикация проекта</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: 'React.js - Разработка современных приложений',
    description: 'Научитесь создавать динамические пользовательские интерфейсы с помощью React и Redux.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tag: 'Продвинутый',
    price: 'Бесплатно',
    duration: '10 недель',
    fullDescription:`
        <h2>О курсе</h2>
        <p>Этот курс предназначен для разработчиков, желающих освоить React.js. Вы научитесь создавать современные веб-приложения, используя компоненты, состояние и маршрутизацию.</p>
        
        <h2>Чему вы научитесь</h2>
        <ul>
          <li>Основам React и его экосистеме</li>
          <li>Созданию компонентов и управлению состоянием</li>
          <li>Работе с React Router для маршрутизации</li>
          <li>Использованию хуков для управления состоянием и эффектами</li>
          <li>Интеграции с API и обработке данных</li>
        </ul>
        
        <h2>Программа курса</h2>
        <div class="course-modules">
          <div class="module">
            <h3>Модуль 1: Введение в React</h3>
            <ul>
              <li>Что такое React?</li>
              <li>Установка и настройка окружения</li>
              <li>Создание первого компонента</li>
              <li>JSX и его особенности</li>
            </ul>
          </div>
          
          <div class="module">
            <h3>Модуль 2: Компоненты и пропсы</h3>
            <ul>
              <li>Создание функциональных и классовых компонентов</li>
              <li>Передача данных через пропсы</li>
              <li>Композиция компонентов</li>
              <li>Управление состоянием компонентов</li>
            </ul>
          </div>
          
          <div class="module">
            <h3>Модуль 3: Управление состоянием</h3>
            <ul>
              <li>Введение в состояние (state)</li>
              <li>Хуки useState и useEffect</li>
              <li>Управление состоянием с помощью контекста</li>
              <li>Оптимизация производительности</li>
            </ul>
          </div>
          
          <div class="module">
            <h3>Модуль 4: Маршрутизация с React Router</h3>
            <ul>
              <li>Установка и настройка React Router</li>
              <li>Создание маршрутов и навигации</li>
              <li>Передача параметров в маршрутах</li>
              <li>Защита маршрутов и аутентификация</li>
            </ul>
          </div>
          
          <div class="module">
            <h3>Модуль 5: Работа с API</h3>
            <ul>
              <li>Запросы к API с помощью fetch и axios</li>
              <li>Обработка ответов и ошибок</li>
              <li>Создание форм и обработка данных</li>
              <li>Интеграция с внешними API</li>
            </ul>
          </div>
          
          <div class="module">
            <h3>Модуль 6: Практический проект</h3>
            <ul>
              <li>Создание полноценного веб-приложения</li>
              <li>Интеграция с фронтендом и бэкендом</li>
              <li>Оптимизация и тестирование приложения</li>
              <li>Развертывание приложения на сервере</li>
            </ul>
          </div>
        </div>
      `
  },
  {
      "id": 4,
      "title": "Node.js и Express: Серверная разработка",
      "description": "Освойте серверную разработку с помощью Node.js и Express. Создавайте мощные и масштабируемые веб-приложения.",
      "image": "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "tag": "Средний",
      "price": "Бесплатно",
      "duration": "8 недель",
      "fullDescription": `
        <h2>О курсе</h2>
        <p>Этот курс предназначен для разработчиков, желающих углубить свои знания в серверной разработке. Вы изучите основы Node.js и Express, а также научитесь создавать RESTful API и работать с базами данных.</p>
        
        <h2>Чему вы научитесь</h2>
        <ul>
          <li>Основам Node.js и его экосистеме</li>
          <li>Созданию серверов с помощью Express</li>
          <li>Работе с RESTful API</li>
          <li>Интеграции с базами данных (MongoDB, PostgreSQL)</li>
          <li>Основам аутентификации и авторизации</li>
        </ul>
        
        <h2>Программа курса</h2>
        <div class="course-modules">
          <div class="module">
            <h3>Модуль 1: Введение в Node.js</h3>
            <ul>
              <li>Что такое Node.js?</li>
              <li>Установка и настройка окружения</li>
              <li>Основы работы с модулями</li>
              <li>Асинхронное программирование и колбэки</li>
            </ul>
          </div>
          
          <div class="module">
            <h3>Модуль 2: Основы Express</h3>
            <ul>
              <li>Создание простого сервера</li>
              <li>Маршрутизация и обработка запросов</li>
              <li>Middleware в Express</li>
              <li>Обработка ошибок</li>
            </ul>
          </div>
          
          <div class="module">
            <h3>Модуль 3: Работа с RESTful API</h3>
            <ul>
              <li>Создание RESTful API</li>
              <li>Методы HTTP и их использование</li>
              <li>Форматирование ответов в JSON</li>
              <li>Тестирование API с Postman</li>
            </ul>
          </div>
          
          <div class="module">
            <h3>Модуль 4: Базы данных</h3>
            <ul>
              <li>Введение в MongoDB и Mongoose</li>
              <li>Работа с PostgreSQL и Sequelize</li>
              <li>Создание и управление схемами данных</li>
              <li>Запросы к базе данных</li>
            </ul>
          </div>
          
          <div class="module">
            <h3>Модуль 5: Аутентификация и авторизация</h3>
            <ul>
              <li>Основы аутентификации</li>
              <li>Использование JWT для авторизации</li>
              <li>Защита маршрутов</li>
              <li>Создание системы регистрации и входа</li>
            </ul>
          </div>
          
          <div class="module">
            <h3>Модуль 6: Практический проект</h3>
            <ul>
              <li>Создание полноценного веб-приложения</li>
              <li>Интеграция с фронтендом</li>
              <li>Оптимизация и тестирование</li>
              <li>Развертывание приложения на сервере</li>
            </ul>
          </div>
        </div>
      `
  },
  {
    "id": 5,
    "title": "Полный курс веб-разработки",
    "description": "Освойте все аспекты веб-разработки: от HTML и CSS до JavaScript и серверной части, чтобы создавать полноценные и интерактивные веб-приложения для пользователей.",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "tag": "Начальный до Продвинутый",
    "price": "Бесплатно",
    "duration": "12 недель",
    "fullDescription": `
      <h2>О курсе</h2>
      <p>Этот курс предназначен для тех, кто хочет стать полноценным веб-разработчиком. Вы изучите все ключевые технологии, необходимые для создания современных веб-приложений.</p>
      
      <h2>Чему вы научитесь</h2>
      <ul>
        <li>Основам HTML5 и CSS3</li>
        <li>JavaScript и его современным возможностям</li>
        <li>Работе с фреймворками, такими как React и Vue.js</li>
        <li>Созданию серверной части с использованием Node.js</li>
        <li>Основам работы с базами данных</li>
      </ul>
      
      <h2>Программа курса</h2>
      <div class="course-modules">
        <div class="module">
          <h3>Модуль 1: Введение в веб-разработку</h3>
          <ul>
            <li>Что такое веб-разработка?</li>
            <li>Обзор технологий: HTML, CSS, JavaScript</li>
            <li>Структура веб-приложения</li>
            <li>Инструменты разработчика</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 2: Основы HTML и CSS</h3>
          <ul>
            <li>Структура HTML-документа</li>
            <li>Семантическая верстка</li>
            <li>Основы CSS: селекторы, свойства, значения</li>
            <li>Создание адаптивных макетов</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 3: JavaScript для начинающих</h3>
          <ul>
            <li>Основы синтаксиса JavaScript</li>
            <li>Работа с переменными и типами данных</li>
            <li>Условия и циклы</li>
            <li>Функции и объекты</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 4: Продвинутый JavaScript</h3>
          <ul>
            <li>Асинхронное программирование: Promises и async/await</li>
            <li>Работа с DOM</li>
            <li>Модули и сборка проекта</li>
            <li>Основы тестирования кода</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 5: Введение в фреймворки</h3>
          <ul>
            <li>Что такое фреймворки и библиотеки?</li>
            <li>Основы React: компоненты и состояние</li>
            <li>Основы Vue.js: реактивность и компоненты</li>
            <li>Сравнение фреймворков</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 6: Серверная разработка с Node.js</h3>
          <ul>
            <li>Введение в Node.js и его экосистему</li>
            <li>Создание простого сервера</li>
            <li>Работа с Express.js</li>
            <li>Создание RESTful API</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 7: Работа с базами данных</h3>
          <ul>
            <li>Основы реляционных и нереляционных баз данных</li>
            <li>Работа с MongoDB</li>
            <li>Создание и управление базами данных</li>
            <li>Интеграция базы данных с сервером</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 8: Практический проект</h3>
          <ul>
            <li>Создание полноценного веб-приложения</li>
            <li>Интеграция фронтенда и бэкенда</li>
            <li>Оптимизация и тестирование приложения</li>
            <li>Развертывание приложения на сервере</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    "id": 6,
    "title": "TypeScript для React разработчиков",
    "description": "Углубите свои знания в React, изучив TypeScript. Создавайте более надежные и масштабируемые приложения.",
    "image":'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    "tag": "Средний",
    "price": "Бесплатно",
    "duration": "8 недель",
    "fullDescription": `
      <h2>О курсе</h2>
      <p>Этот курс предназначен для разработчиков, уже знакомых с React, которые хотят улучшить свои навыки, изучив TypeScript. Вы научитесь использовать TypeScript для создания более безопасных и поддерживаемых приложений.</p>
      
      <h2>Чему вы научитесь</h2>
      <ul>
        <li>Основам TypeScript и его преимуществам</li>
        <li>Типизации в React-компонентах</li>
        <li>Работе с интерфейсами и типами</li>
        <li>Созданию и использованию дженериков</li>
        <li>Интеграции TypeScript с существующими проектами на React</li>
      </ul>
      
      <h2>Программа курса</h2>
      <div class="course-modules">
        <div class="module">
          <h3>Модуль 1: Введение в TypeScript</h3>
          <ul>
            <li>Что такое TypeScript?</li>
            <li>Установка и настройка окружения</li>
            <li>Основные типы данных</li>
            <li>Типизация переменных и функций</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 2: Типы и интерфейсы</h3>
          <ul>
            <li>Создание и использование интерфейсов</li>
            <li>Типы объектов и массивов</li>
            <li>Объединение и пересечение типов</li>
            <li>Типизация функций и методов</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 3: Работа с React и TypeScript</h3>
          <ul>
            <li>Типизация React-компонентов</li>
            <li>Использование пропсов и состояния</li>
            <li>Типизация событий и обработчиков</li>
            <li>Создание функциональных и классовых компонентов</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 4: Дженерики в TypeScript</h3>
          <ul>
            <li>Что такое дженерики?</li>
            <li>Создание дженериковых функций и классов</li>
            <li>Типизация массивов и коллекций</li>
            <li>Примеры использования дженериков в React</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 5: Интеграция TypeScript в существующие проекты</h3>
          <ul>
            <li>Пошаговая миграция проекта на TypeScript</li>
            <li>Работа с библиотеками и типами</li>
            <li>Настройка конфигурации TypeScript</li>
            <li>Советы по отладке и тестированию</li>
          </ul>
        </div>
        
        <div class="module">
          <h3>Модуль 6: Практический проект</h3>
          <ul>
            <li>Создание приложения на React с использованием TypeScript</li>
            <li>Типизация API-запросов</li>
            <li>Оптимизация и тестирование приложения</li>
            <li>Развертывание приложения на сервере</li>
          </ul>
        </div>
      </div>
    `
}

];

// Отзывы

// Текущая страница
export const currentPage = 'home';
export const currentCourseId = null;

// Функция для создания HTML-структуры сайта
export function renderApp() {
  const app = document.querySelector('#app');
  if (currentPage === 'home') {
    renderHomePage(app); // Рендерим главную страницу
  } else if (currentPage === 'course' && currentCourseId) {
    renderCoursePage(app, currentCourseId); // Рендерим страницу курса
  }
  // Добавляем обработчики событий
  setupEventListeners();
}

// Функция для рендеринга главной страницы
function renderHomePage(app) {
  app.innerHTML = `
    <!-- Header -->
    <header class="header">
      <div class="container header-container">
        <a href="#" class="logo" data-page="home">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="WebDev Logo">
          WebDev Курсы
        </a>
        <nav>
          <ul class="nav-menu">
            <li><a href="#" class="nav-link" data-page="home">Главная</a></li>
            <li><a href="#courses" class="nav-link">Курсы</a></li>
            <li><a href="#features" class="nav-link">Преимущества</a></li>
            <li><a href="#testimonials" class="nav-link">Отзывы</a></li>
            <li><a href="#" class="btn">Войти</a></li>
          </ul>
        </nav>
      </div>
    </header>

    

    <!-- Courses Section -->
    <section id="courses" class="courses">
      <div class="container">
        <div class="section-header">
          <h2>Наши курсы</h2>
          <p>Бесплатные курсы для студентов университета</p>
        </div>
        <div class="courses-grid">
          ${renderCourses()}
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <div class="section-header">
          <h2>Почему выбирают нас</h2>
          <p>Преимущества обучения на нашей платформе</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">👨‍💻</div>
            <h3>Опытные преподаватели</h3>
            <p>Наши инструкторы - практикующие разработчики с опытом работы в ведущих IT-компаниях</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>Актуальные технологии</h3>
            <p>Мы постоянно обновляем программы курсов, чтобы они соответствовали современным требованиям рынка</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📝</div>
            <h3>Практические задания</h3>
            <p>Более 70% времени обучения посвящено практике и работе над реальными проектами</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <h3>Поддержка сообщества</h3>
            <p>Доступ к закрытому сообществу студентов и выпускников для нетворкинга и обмена опытом</p>
          </div>
        </div>
      </div>
    </section>


    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <h3 class="footer-heading">WebDev Курсы</h3>
            <p>Образовательная платформа для студентов университета по изучению современных веб-технологий и программирования.</p>
          </div>
          <div>
            <h3 class="footer-heading">Курсы</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="#" data-course-id="1">HTML и CSS</a></li>
              <li class="footer-link"><a href="#" data-course-id="2">JavaScript</a></li>
              <li class="footer-link"><a href="#" data-course-id="3">React.js</a></li>
              <li class="footer-link"><a href="#" data-course-id="4">Node.js</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-heading">Университет</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="#">О факультете</a></li>
              <li class="footer-link"><a href="#">Преподаватели</a></li>
              <li class="footer-link"><a href="#">Расписание</a></li>
              <li class="footer-link"><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-heading">Связаться с нами</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="mailto:info@university.ru">info@university.ru</a></li>
              <li class="footer-link"><a href="tel:+78001234567">+7 (800) 123-45-67</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Университетские WebDev Курсы. Все права защищены.</p>
        </div>
      </div>
    </footer>
  `;
}

// Функция для рендеринга страницы курса
function renderCoursePage(app, courseId) {
  const course = coursesData.find(c => c.id === parseInt(courseId));
  
  if (!course) {
    // Если курс не найден, возвращаемся на главную
    currentPage = 'home';
    renderApp();
    return;
  }
  
  app.innerHTML = `
    <!-- Header -->
    <header class="header">
      <div class="container header-container">
        <a href="#" class="logo" data-page="home">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="WebDev Logo">
          WebDev Курсы
        </a>
        <nav>
          <ul class="nav-menu">
            <li><a href="#" class="nav-link" data-page="home">Главная</a></li>
            <li><a href="#" class="nav-link" data-page="home" data-scroll-to="courses">Курсы</a></li>
            <li><a href="#" class="nav-link" data-page="home" data-scroll-to="features">Преимущества</a></li>
            <li><a href="#" class="nav-link" data-page="home" data-scroll-to="testimonials">Отзывы</a></li>
            <li><a href="#" class="btn">Войти</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Course Hero -->
    <section class="course-hero">
      <div class="container">
        <div class="course-hero-content">
          <div class="course-hero-info">
            <span class="course-tag">${course.tag}</span>
            <h1>${course.title}</h1>
            <p>${course.description}</p>
            <div class="course-meta">
              <div class="meta-item">
                <span class="meta-label">Продолжительность:</span>
                <span class="meta-value">${course.duration}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Стоимость:</span>
              </div>
            </div>
            <a href="#" class="btn btn-primary">Записаться на курс</a>
          </div>
          <div class="course-hero-image">
            <img src="${course.image}" alt="${course.title}">
          </div>
        </div>
      </div>
    </section>

    <!-- Course Content -->
    <section class="course-content">
      <div class="container">
        <div class="course-details">
          ${course.fullDescription || '<p>Подробное описание курса в разработке.</p>'}
        </div>
      </div>
    </section>

    <!-- Related Courses -->
    <section class="related-courses">
      <div class="container">
        <div class="section-header">
          <h2>Другие курсы</h2>
          <p>Продолжите свое обучение</p>
        </div>
        <div class="courses-grid">
          ${renderRelatedCourses(course.id)}
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <h3 class="footer-heading">WebDev Курсы</h3>
            <p>Образовательная платформа для студентов университета по изучению современных веб-технологий и программирования.</p>
          </div>
          <div>
            <h3 class="footer-heading">Курсы</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="#" data-course-id="1">HTML и CSS</a></li>
              <li class="footer-link"><a href="#" data-course-id="2">JavaScript</a></li>
              <li class="footer-link"><a href="#" data-course-id="3">React.js</a></li>
              <li class="footer-link"><a href="#" data-course-id="4">Node.js</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-heading">Университет</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="#">О факультете</a></li>
              <li class="footer-link"><a href="#">Преподаватели</a></li>
              <li class="footer-link"><a href="#">Расписание</a></li>
              <li class="footer-link"><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-heading">Связаться с нами</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="mailto:info@university.ru">info@university.ru</a></li>
              <li class="footer-link"><a href="tel:+78001234567">+7 (800) 123-45-67</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Университетские WebDev Курсы. Все права защищены.</p>
        </div>
      </div>
    </footer>
  `;
}

// Функция для рендеринга карточек курсов
function renderCourses() {
  return coursesData.map(course => `
    <div class="course-card" data-id="${course.id}">
      <img src="${course.image}" alt="${course.title}" class="course-image">
      <div class="course-content">
        <span class="course-tag">${course.tag}</span>
        <h3 class="course-title">${course.title}</h3>
        <p class="course-description">${course.description}</p>
        <a href="#" class="btn btn-course" data-course-id="${course.id}">Перейти к курсу</a>
      </div>
    </div>
  `).join('');
}


// Функция для рендеринга похожих курсов
function renderRelatedCourses(currentCourseId) {
  return coursesData
    .filter(course => course.id !== parseInt(currentCourseId))
    .slice(0, 3)
    .map(course => `
      <div class="course-card" data-id="${course.id}">
        <img src="${course.image}" alt="${course.title}" class="course-image">
        <div class="course-content">
          <span class="course-tag">${course.tag}</span>
          <h3 class="course-title">${course.title}</h3>
          <p class="course-description">${course.description}</p>
          <div class="course-footer">

            <span>${course.duration}</span>
          </div>
          <a href="#" class="btn btn-course" data-course-id="${course.id}">Перейти к курсу</a>
        </div>
      </div>
    `).join('');
}



// Функция для настройки обработчиков событий
function setupEventListeners() {
  // 1. Плавная прокрутка для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // 2. Обработчик клика по карточке курса (если нужно открывать при клике на всю карточку)
  document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', function(e) {
      // Если клик был по кнопке или ссылке, пропускаем
      if (e.target.tagName === 'A' || e.target.classList.contains('btn-course')) {
        return;
      }
      
      const courseId = this.getAttribute('data-id');
      navigateToCourse(courseId);
    });
  });

  // 3. Обработчик для кнопок "Перейти к курсу" (ИСПРАВЛЕННАЯ ВЕРСИЯ)
  document.querySelectorAll('.btn-course').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const courseId = this.getAttribute('data-course-id'); // Получаем ID курса
        const course = courses.find(c => c.id === parseInt(courseId)); // Находим курс в массиве courses
        if (!course) {
            console.error(`Курс с ID ${courseId} не найден.`);
            return;
        }

        // Выбираем первый урок выбранного курса
        const firstLessonId = course.lessons[0].id; // ID первого урока
        console.log(`Рендерится урок с ID: ${firstLessonId}`); // Логирование для отладки

        // Рендерим урок
        renderLesson(document.querySelector('#app'), firstLessonId);
    });
  });
  // 4. Обработчик для ссылок на курсы в футере
  document.querySelectorAll('.footer-link a[data-course-id]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const courseId = this.getAttribute('data-course-id');
      navigateToCourse(courseId);
    });
  });

  // 5. Обработчики для навигации на главную
  document.querySelectorAll('[data-page="home"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const scrollTo = this.getAttribute('data-scroll-to');
      navigateToHome(scrollTo);
    });
  });

  // 6. Обработчик для кнопок авторизации
  document.querySelectorAll('.btn:not(.btn-course)').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      showAuthPopup();
    });
  });

  // 7. Обработчик для закрытия попапа авторизации (если нужно)
  setupCloseAuthPopup();
}

// Функция для отображения деталей курса (заглушка)

// Функция для навигации на страницу курса
function navigateToCourse(courseId) {
  currentPage = 'course'; // Устанавливаем текущую страницу как "курс"
  currentCourseId = courseId; // Устанавливаем ID текущего курса
  renderApp(); // Перерендериваем приложение
  window.scrollTo(0, 0); // Прокручиваем страницу вверх
}

// Функция для навигации на главную страницу
function navigateToHome(scrollTo) {
  currentPage = 'home';
  currentCourseId = null;
  renderApp();
  
  if (scrollTo) {
    setTimeout(() => {
      const element = document.getElementById(scrollTo);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }, 100);
  } else {
    window.scrollTo(0, 0);
  }
}



// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
  renderApp(); // Рендерим приложение при загрузке страницы
});