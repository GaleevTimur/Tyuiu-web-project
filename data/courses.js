export const courses = [
    {
        id: 1, // ID должен быть числом
        title: "JavaScript Basics",
        description: "Learn the fundamentals of JavaScript programming",
        image: "https://placehold.co/600x400?text=JavaScript+Basics",
        lessons: [
            {
                id: "1", // ID урока может оставаться строкой
                type: "theory", // Тип урока должен быть на английском
                title: "Introduction to JavaScript",
                content: `
                    <h2>Hello!</h2>
                    <p>This is an example lesson.</p>
                    <h3>What you will learn:</h3>
                    <ul>
                        <li>How to write basic code</li>
                        <li>Understanding variables</li>
                        <li>Working with functions</li>
                    </ul>
                `
            },
            {
                id: "2",
                type: "quiz", // Тип урока должен быть на английском
                title: "Quiz Example",
                question: "What is JavaScript?",
                options: [
                    "A programming language",
                    "A markup language",
                    "A database system",
                    "All of the above"
                ],
                correctAnswer: 1
            },
            {
                id: "3",
                type: "coding", // Тип урока должен быть на английском
                title: "Your First Code",
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