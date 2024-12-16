import {  basicHTMLConcepts } from './course_page_dynamic_2.js';

document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.sidebar-main-section-div');
    const mainFilling = document.querySelector('.coursePage-main-filling');

    const functionMap = {
        basicHTMLConcepts
    };

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            const functionName = item.dataset.function;
            console.log("1");

            if (functionMap[functionName]) {
                mainFilling.innerHTML = functionMap[functionName](); // Загрузка контента
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const headerNameDiv = document.querySelector('.coursePage-header-name');

    headerNameDiv.addEventListener('click', (event) => {
        if (event.target.tagName === 'P') {
            window.location.href = '/index.html'; // Абсолютный путь от корня сайта
        }
    });
});