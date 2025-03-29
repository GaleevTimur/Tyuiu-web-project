export const courses = [
    {
        id: "js-basics",
        title: "JavaScript Basics",
        description: "Learn the fundamentals of JavaScript programming",
        image: "https://placehold.co/600x400?text=JavaScript+Basics",
        lessons: [
            {
                id: "1",
                type: "Теория",
                title: "Вступление к изучению.",
                content: `
                    <h2>Всем привет!</h2>
                    <p>Это пример, придумайте сами текст.</p>
                    <h3>Что вы изучите:</h3>
                    <ul>
                        <li>Н</li>
                        <li>И</li>
                        <li>Х</li>
                        <li>У</li>
                        <li>Я</li>
                        <p>Конец.</p>
                    </ul>
                `
            },
            {
                id: "2",
                type: "quiz",
                title: "Пример теста",
                question: "Кто ты?",
                options: [
                    "Гей;",
                    "Лох;",
                    "Черт;",
                    "Все выше перечисленное"
                ],
                correctAnswer: 4
            },
            {
                id: "3",
                type: "coding",
                title: "Твой первый код",
                starterCode: `// Write a function that returns "Hello, World!"
function greet() {
    // Your code here
}

greet();`,
                solution: `function greet() {
    return "Hello, World!";
}`,
                tests: [
                    {
                        input: [],
                        expected: "Hello, World!"
                    }
                ]
            }
        ]
    }
];