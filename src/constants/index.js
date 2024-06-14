import {
    mobile,
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
    docker,
    credence,
    // starbucks,
    // tesla,
    // shopify,
    // crm,
    vrooms,
    // carrent,
    // jobit,
    projet2,
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
        title: "MERN Developer",
        icon: mobile,
    },
    {
        title: "React Developer",
        icon: backend,
    },
    {
        title: "Backend Developer",
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
    {
        name: "docker",
        icon: docker,
    },
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
        description: "Web-based platform that allows users to communicate through video conferences, providing an convenient and efficient solution for quick and important meeting anywhere anytime.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "next-js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: vrooms,
        source_code_link: "https://github.com/GauravR02/geekyy-zoom-dev",
        live_demo: "https://geekyy-v-rooms-9frrncstf-gauravr02s-projects.vercel.app/",
    },
    {
        name: "Todos-list-",
        description: "Web application that enables users to create todos in day-to-day life, this webapp could be use in adding the task editing them and deleting them after the task is done",
        tags: [{
                name: "Next",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
            {
                name: "DaisyUI",
                color: "pink-text-gradient",
            },
        ],
        image: projet2,
        source_code_link: "https://github.com/GauravR02/todo-list-crud",
        live_demo: "https://x.com/GauravR_0203/status/1801700656182661158",
    },

    {
        name: "Trip Guide",
        description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [{
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },

];

export { services, technologies, experiences, testimonials, projects };