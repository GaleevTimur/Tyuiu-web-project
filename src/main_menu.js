import '/styles/main-menu.css';
import { showAuthPopup, getHTMLForPopup, setupCloseAuthPopup } from './authorization_menu.js';

// Данные о курсах
const coursesData = [
  {
    id: 1,
    title: 'HTML и CSS для начинающих',
    description: 'Изучите основы веб-разработки с нуля. Создавайте красивые и отзывчивые веб-страницы.',
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
      
      <h2>Преподаватель</h2>
      <div class="instructor">
        <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="Александр Иванов" class="instructor-avatar">
        <div class="instructor-info">
          <h3>Александр Иванов</h3>
          <p>Старший преподаватель кафедры информационных технологий</p>
          <p>Опыт в веб-разработке: 8+ лет</p>
        </div>
      </div>
    `
  },
  {
    id: 2,
    title: 'JavaScript: Основы и продвинутые концепции',
    description: 'Полное руководство по JavaScript от основ до продвинутых тем, включая ES6+ и асинхронное программирование.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tag: 'Средний',
    price: 'Бесплатно',
    duration: '8 недель'
  },
  {
    id: 3,
    title: 'React.js - Разработка современных приложений',
    description: 'Научитесь создавать динамические пользовательские интерфейсы с помощью React и Redux.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tag: 'Продвинутый',
    price: 'Бесплатно',
    duration: '10 недель'
  },
  {
    id: 4,
    title: 'Node.js и Express: Серверная разработка',
    description: 'Создавайте масштабируемые серверные приложения с использованием Node.js и Express.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tag: 'Продвинутый',
    price: 'Бесплатно',
    duration: '8 недель'
  },
  {
    id: 5,
    title: 'Полный курс веб-разработки',
    description: 'От HTML до развертывания. Изучите фронтенд и бэкенд разработку в одном курсе.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tag: 'Полный курс',
    price: 'Бесплатно',
    duration: '16 недель'
  },
  {
    id: 6,
    title: 'TypeScript для React разработчиков',
    description: 'Улучшите свои React приложения с помощью TypeScript. Статическая типизация для масштабируемых проектов.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tag: 'Продвинутый',
    price: 'Бесплатно',
    duration: '6 недель'
  }
];

// Отзывы
const testimonials = [
  {
    text: 'Курс по HTML и CSS полностью изменил мое представление о веб-разработке. Теперь я могу создавать профессиональные сайты!',
    name: 'Анна Смирнова',
    position: 'Студент университета',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    text: 'Благодаря курсу по JavaScript я смог найти работу в IT-компании. Материал подается очень понятно и структурированно.',
    name: 'Иван Петров',
    position: 'Студент университета',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  }
];

// Текущая страница
let currentPage = 'home';
let currentCourseId = null;

// Функция для создания HTML-структуры сайта
function renderApp() {
  const app = document.querySelector('#app');
  
  if (currentPage === 'home') {
    renderHomePage(app);
  } else if (currentPage === 'course' && currentCourseId) {
    renderCoursePage(app, currentCourseId);
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
                <span class="meta-value">${course.price}</span>
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
        <div class="course-footer">
          <span class="course-price">${course.price}</span>
          <span>${course.duration}</span>
        </div>
        ${course.id === 1 ? '<a href="#" class="btn btn-course" data-course-id="1">Перейти к курсу</a>' : ''}
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
            <span class="course-price">${course.price}</span>
            <span>${course.duration}</span>
          </div>
          <a href="#" class="btn btn-course" data-course-id="${course.id}">Перейти к курсу</a>
        </div>
      </div>
    `).join('');
}

// Функция для рендеринга отзывов
function renderTestimonials() {
  return testimonials.map(testimonial => `
    <div class="testimonial-card">
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-author">
        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
        <div>
          <h4>${testimonial.name}</h4>
          <p>${testimonial.position}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Функция для настройки обработчиков событий
function setupEventListeners() {
  // Плавная прокрутка для навигационных ссылок
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

  // Обработчик клика по карточке курса
  document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', function(e) {
      // Если клик был по кнопке, то обработчик кнопки сработает сам
      if (e.target.classList.contains('btn-course')) {
        return;
      }
      
      const courseId = this.getAttribute('data-id');
      showCourseDetails(courseId);
    });
  });

  // Обработчик клика по кнопке "Перейти к курсу"
  document.querySelectorAll('.btn-course').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // Предотвращаем всплытие события
      
      const courseId = this.getAttribute('data-course-id');
      navigateToCourse(courseId);
    });
  });

  // Обработчик клика по ссылкам в футере
  document.querySelectorAll('.footer-link a[data-course-id]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const courseId = this.getAttribute('data-course-id');
      navigateToCourse(courseId);
    });
  });

  // Обработчик для навигации на главную
  document.querySelectorAll('[data-page="home"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const scrollTo = this.getAttribute('data-scroll-to');
      navigateToHome(scrollTo);
    });
  });
}

// Функция для отображения деталей курса (заглушка)
function showCourseDetails(courseId) {
  const course = coursesData.find(c => c.id === parseInt(courseId));
  if (course) {
    if (parseInt(courseId) === 1) {
      navigateToCourse(courseId);
    } else {
      alert(`Вы выбрали курс: ${course.title}\nСтатус: ${course.price}\nПродолжительность: ${course.duration}\n\nВ полной версии здесь будет страница с подробной информацией о курсе.`);
    }
  }
}

// Функция для навигации на страницу курса
function navigateToCourse(courseId) {
  currentPage = 'course';
  currentCourseId = courseId;
  renderApp();
  window.scrollTo(0, 0);
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
  renderApp();
});