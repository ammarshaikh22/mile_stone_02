import { ResumeData, Services, Skills, Contact, Menu } from "@/types/Interface"

export const data: ResumeData[] = [
    {
        id: 1,
        name: "HTML5",
        date: "2022 - 2023",
        description:
            "Proficient in crafting semantic, accessible HTML5 structures to ensure robust and maintainable codebases.Experienced in leveraging modern HTML techniques for building interactive and engaging web interfaces.",
    },
    {
        id: 2,
        name: "CSS3",
        date: "2023 - 2023",
        description:
            "Expert in creating visually appealing, responsive layouts using CSS3 and pre-processors like SASS and LESS.Skilled in implementing advanced CSS techniques, including Flexbox, Grid, and animations, to enhance user experience and interface design.",
    },
    {
        id: 3,
        name: "TAILWIND CSS",
        date: "2024",
        description:
            "Skilled in using Tailwind CSS to rapidly build custom, responsive designs with utility-first CSS classes. Experienced in integrating Tailwind CSS with modern frameworks like React and Next.js to streamline styling and improve development efficiency.",
    },
    {
        id: 4,
        name: "JAVASCRIPT",
        date: "2023 - 2024",
        description:
            "Proficient in writing clean, efficient JavaScript code for building interactive and dynamic web applications.Experienced with modern JavaScript frameworks and libraries, including React, Next.js to develop scalable front-end solutions.",
    },
    {
        id: 5,
        name: "TYPESCRIPT",
        date: "2023 - 2024",
        description:
            "Experienced in using TypeScript to enhance JavaScript code quality, providing type safety and improved maintainability.Skilled in developing robust and scalable applications with TypeScript, integrating seamlessly with modern frameworks like React and Next.js.",
    },
    {
        id: 6,
        name: "REACT JS",
        date: "2024",
        description:
            "Expert in building responsive and interactive user interfaces with React.js, leveraging component-based architecture for maintainability and scalability.Proficient in using React hooks, and context API to create dynamic and performant web applications.",
    },
    {
        id: 7,
        name: "NEXT JS",
        date: "Learning",
        description:
            "Experienced in developing server-side rendered and static web applications using Next.js, ensuring optimal performance and SEO. Proficient in leveraging Next.js features like API routes, dynamic routing, and incremental static regeneration to build scalable and efficient web solutions.",
    },
]


export const services: Services[] = [
    {
        id: 1,
        name: "WEB DEVELOPMENT",
        icon: '/webdev.png'
    },
    {
        id: 2,
        name: "WEB DESIGN",
        icon: "/design.png"
    },
    {
        id: 3,
        name: "WEB CONTENT",
        icon: "/content.png"
    },
    {
        id: 4,
        name: "CODE PROBLEMS",
        icon: "/problem.png"
    },
]


export const skills: Skills[] = [
    {
        id: 1,
        name: "HTML",
        value: 90
    },
    {
        id: 2,
        name: "CSS",
        value: 80
    },
    {
        id: 3,
        name: "TAILWIND CSS",
        value: 70
    },
    {
        id: 4,
        name: "JAVASCRIPT",
        value: 70
    },
    {
        id: 5,
        name: "TYPESCRIPT",
        value: 70
    },
    {
        id: 6,
        name: "NEXT JS",
        value: 50
    },
]


export const Clients: Skills[] = [
    {
        id: 1,
        name: "Awards",
        value: 1000
    },
    {
        id: 2,
        name: "Complete Project",
        value: 10
    },
    {
        id: 3,
        name: "Happy Customers",
        value: 10
    },
    {
        id: 4,
        name: "Cups Of Coffee",
        value: 1000
    },
]


export const contact: Contact[] = [
    {
        id: 1,
        img: "/address.png",
        name: "ADDRESS",
        detail: "Karachi, Sindh, Pakistan",
        link: "/"
    },
    {
        id: 2,
        img: "/call.png",
        name: "CONTACT NUMBER",
        detail: "+923162324240",
        link: "/"
    },
    {
        id: 3,
        img: "/email.png",
        name: "EMAIL ADDRESS",
        detail: "ammarshaikh50099@gmail.com",
        link: "/"
    },
    {
        id: 4,
        img: "/web.png",
        name: "WEBSITE",
        detail: "Portfolio Website",
        link: "https://aswebsolution.netlify.app"
    },
]


export const menu: Menu[] = [
    {
        id:1,
        name: "Home",
        url: "home"
    },
    {
        id:2,
        name: "About",
        url: "about"
    },
    {
        id:3,
        name: "Resume",
        url: "resume"
    },
    {
        id:4,
        name: "Services",
        url: "services"
    },
    {
        id:5,
        name: "Skills",
        url: "skills"
    },
    {
        id:6,
        name: "Project",
        url: "project"
    },
    {
        id:7,
        name: "Contact",
        url: "contact"
    },
];