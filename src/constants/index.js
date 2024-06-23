import {
    mobile,
    expense,
    backend,
    creator,
    web,
    // blockchain,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    // redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    // docker,
    credence,
    // starbucks,
    // tesla,
    // shopify,
    // crm,
    vroom,
    // carrent,
    // jobit,
    todo,
    tripguide,
    threejs,
    Namrata,
    siddhant,
    prasad,

} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "FrontEnd Developer",
        icon: backend,
    },
    {
        title: "Blockchain Developer",
        icon: creator,
    }
];

const technologies = [{
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [{
        title: "Customer Service Associate",
        company_name: "Credence Resource Management",
        icon: credence,
        iconBg: "#fff",
        date: "Sept 14 2022 - Feb 2023",
        points: [
            "Responsible for managing a portfolio of overdue accounts and negotiating payment arrangements with customers.",
            "Utilized CRM tools to track customer interactions and update account information.",
            "Met monthly targets for debt collection while maintaining compliance with regulations and company policies.",

        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [{
        testimonial: "He always had utilized his time and energy into the work for the better output.",
        name: "Namrata",
        designation: "Associate",
        company: "Credence",
        image: Namrata,
    },
    {
        testimonial: "I've never met a hard working and dedicated person who truly cares about preciseness in work",
        name: "Siddhant",
        designation: "Manager",
        company: "Credence",
        image: siddhant,
    },
    {
        testimonial: "I enjoyed working with him as a colleague",
        name: "Prasad",
        designation: "CS Excutive",
        company: "Credence",
        image: prasad,
    },
];

const projects = [{
        name: "V-Rooms",
        description: "The V-rooms Application is a comprehensive web meeting solution designed to facilitate seamless virtual meetings and video conferencing. Built using Next.js, React, and Tailwind CSS, this application leverages the GetStream API for high-quality video streaming and ClerkAuth for secure authentication. The app is tailored to provide users with a robust and user-friendly platform for hosting and joining virtual meetings.",
        tags: [{
                name: "Next-JS",
                color: "blue-text-gradient",
            },
            {
                name: "React-JS",
                color: "green-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "pink-text-gradient",
            },
        ],
        image: vroom,
        source_code_link: "https://github.com/GauravR02/geekyy-zoom-dev",
        live_demo: "https://geekyy-v-rooms-dev-gauravr02s-projects.vercel.app",
    },
    {
        name: "Todos-list-",
        description: "The Todo List Application is a dynamic and responsive task management tool built using Next.js, React, and Tailwind CSS. It provides a seamless and efficient way to manage your daily tasks, offering full CRUD (Create, Read, Update, Delete) functionality.This application ensures that users can easily keep track of their tasks, update their progress, and maintain an organized workflow.",
        tags: [{
                name: "Next-JS",
                color: "blue-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "green-text-gradient",
            },
            {
                name: "Daisy-UI",
                color: "pink-text-gradient",
            },
        ],
        image: todo,
        source_code_link: "https://github.com/GauravR02/todo-list-crud",
        live_demo: "https://x.com/GauravR_0203/status/1801700656182661158",
    },

    {
        name: "Budget-Tracker",
        description: "A Budget tracker application includes a dashboard page. Creating a transaction is easy with the simple form and category options, history section which is able to show the transactions month and year wise to locate the exact transaction  and add the expenses category wise. Transaction page shows the logs and on manage page users can switch the currencies ",
        tags: [{
                name: "Prisma",
                color: "blue-text-gradient",
            },
            {
                name: "SQLite",
                color: "green-text-gradient",
            },
            {
                name: "Tanstack-Query",
                color: "pink-text-gradient",
            },
        ],
        image: expense,
        source_code_link: "https://github.com/GauravR02/budget-tracker",
        // live_demo: "",
    },

];

export { services, technologies, experiences, testimonials, projects };