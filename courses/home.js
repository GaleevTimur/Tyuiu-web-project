export function renderHome(container, courses) {
    container.innerHTML = `
        <h1>Available Courses</h1>
        <div class="course-grid">
            ${courses.map(course => `
                <div class="course-card">
                    <img src="${course.image}" alt="${course.title}" class="course-image">
                    <div class="course-content">
                        <h2 class="course-title">${course.title}</h2>
                        <p class="course-description">${course.description}</p>
                        <a href="/course/${course.id}" class="course-button" data-link>Start Learning</a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}