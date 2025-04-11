import { renderHome } from './home.js';
import { renderLesson } from './lesson.js';
import { courses } from '/data/courses.js';

const app = document.querySelector('#app');

// Simple router
function router() {
    const path = window.location.pathname;
    
    if (path === '/') {
        renderHome(app, courses);
    } else if (path.startsWith('/course/')) {
        const courseId = path.split('/')[2];
        const lessonId = path.split('/')[3] || '1';
        const course = courses.find(c => c.id === courseId);
        if (course) {
            renderLesson(app, course, lessonId);
        }
    }
}

// Handle navigation
window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);

// Handle navigation links
document.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        history.pushState(null, '', href);
        router();
    }
});