import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SiLeetcode } from "react-icons/si";


interface DATA {
    name: string;
    location: string;
    socialMedia: {
        title: string;
        link: string;
        icon?: React.ReactNode;
    }[];
    ProfilePic: string;
    proffesionalSummary: string;
    educationAndQualification: {
        degree: string;
        branch: string;
        institute: string;
        time: string;
        result: string;
    }[];
    technicalSkills: {
        title: string;
        skills: string;
    }[];
    projects: {
        title: string;
        link: string;
        time: string;
        points: React.ReactNode[];
    }[];
    certifications: {
        title: string;
        link: string;
    }[];
    extracurricular: {
        event: string;
        position: string;
        time: string;
        point: React.ReactNode;
    }[];

}

// // LAV KUMAR YADAV
// export const data: DATA = {
//     name: "Abhishek Yadav",
//     location: "Ghaziabad, Uttar Pradesh",
//     socialMedia: [
//         {
//             title: "LinkedIn",
//             link: "https://www.linkedin.com/in/abhishek-yadav-b48377256/",
//             icon: <Linkedin size={16} />
//         },
//         {
//             title: "+91 7234908495",
//             link: "tel:+917234908495",
//             icon: <Phone size={16} />
//         },
//         {
//             title: "abhi.yadavh2o@gmail.com",
//             link: "mailto:abhi.yadavh2o@gmail.com",
//             icon: <Mail size={16} />
//         },
//         {
//             title: "GitHub",
//             link: "https://github.com/yadavAbhi47",
//             icon: <Github size={16} />
//         },
//         {
//             title: "Leetcode",
//             link: "https://leetcode.com/u/Abhishek_Yadav_leetcode/",
//             icon: <SiLeetcode size={16} />
//         },
//         // {
//         //     title: "Portfolio",
//         //     link: "https://lav-kumar-yadav.onrender.com/"
//         // }
//     ],
//     ProfilePic: "ABHISHEK PROFILE.jpg",
//     proffesionalSummary:
//         "Frontend developer with a strong foundation in computer science, data structures, and algorithms, specializing in building reusable, scalable, and high-performance web applications. Proficient in JavaScript, React.js, Next.js, and modern frontend technologies with hands-on experience in developing full-stack applications using the MERN stack. Skilled in writing clean, maintainable code, optimizing UI performance, and collaborating in agile teams. Passionate about solving problems, learning emerging technologies, and contributing to innovative, user-focused solutions.",
//     educationAndQualification: [
//         {
//             degree: "B.Tech",
//             branch: "Computer Engineering",
//             institute: "ABES Engineering College – Ghaziabad",
//             time: "11/2022 - 07/2026",
//             result: "Percentage : 72.16%"
//         },
//         {
//             degree: "Class 12th (CBSE Board)",
//             branch: "",
//             institute: "Oxford Public School",
//             time: "2021",
//             result: "76.6%"
//         },
//         {
//             degree: "Class 10th (CBSE Board)",
//             branch: "",
//             institute: "Laxmi Prasad Memorial Public School",
//             time: "2019",
//             result: "86.4%"
//         }
//     ],
//     technicalSkills: [
//         {
//             title: "Frontend Development",
//             skills: "HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Web Design,"
//         },
//         {
//             title: "Backend Development",
//             skills: "Node.js, Express.js, RESTful APIs, Authentication & Authorization"
//         },
//         {
//             title: "Database",
//             skills: "PostgreSQL(Basics), SQL (Basics)"
//         },
//         {
//             title: "Programming",
//             skills: "Java, Data Structures & Algorithms, Object-Oriented Programming (OOP)"
//         },
//         {
//             title: "Tools & Platforms",
//             skills: "Git, GitHub, VS Code, IntelliJ IDEA, Postman"
//         },
//         {
//             title: "Analytical Skills",
//             skills: "Problem Solving, Highest Ratings: LeetCode 1688, CodeChef 1608"
//         },
//         {
//             title: "Other Skills",
//             skills: "Debugging, Communication"
//         },
//     ],
//     projects: [
//         {
//             title: "WriteFlow – A Modern Blogging Platform",
//             link: "https://writeflow-m57w.onrender.com/",
//             time: "12/2024 - Present",
//             points: [
//                 <>Designed and implemented a full-stack blogging platform enabling users to create, edit, and publish blog posts with secure authentication and authorization workflows.</>,
//                 <>Built robust backend APIs in Node.js and integrated MongoDB for efficient storage of posts, users, and comments with optimized query handling.</>,
//                 <>Implemented image upload and management using ImageKit, ensuring scalability and performance for media-heavy content.</>,
//                 <>Developed a responsive and interactive frontend using Next.js and Tailwind CSS, focusing on seamless navigation and user experience.</>,
//                 <>Incorporated email notifications via Resend to enhance user engagement and improve communication workflows.</>,
//                 <>Followed modular and OOP-based design patterns to maintain clean code and ensure reusability across the application.</>,
//                 <><b>Tech Stack:</b> Next.js, Node.js, MongoDB, Auth.js, ImageKit, Resend</>
//             ]
//         },
//         {
//             title: "Cypher Speak – A Real-Time Chat Platform",
//             link: "https://github.com/lav5588/cypherspeak",
//             time: "04/2024 - 06/2024",
//             points: [
//                 <>Developed a real-time chat platform supporting one-to-one messaging with persistent chat history, ensuring reliability and scalability.</>,
//                 <>Engineered backend services using Node.js and Express.js, implementing secure authentication and session handling for user accounts.</>,
//                 <>Leveraged Socket.IO to enable instant bidirectional communication between clients and servers with minimal latency.</>,
//                 <>Integrated MongoDB for structured storage of chat messages and user details, with efficient schema design for faster queries.</>,
//                 <>Created a React.js frontend with reusable components and a clean UI for smooth real-time chat interactions.</>,
//                 <>Collaborated in a simulated agile team setup, using Git and GitHub for version control, peer reviews, and task management.</>,
//                 <><b>Tech Stack:</b> Node.js, Express.js, Socket.IO, React.js, MongoDB</>
//             ]
//         }
//     ],

//     certifications: [
//         {
//             title: "AWS Academy Introduction to Cloud Semester I",
//             link: "https://drive.google.com/file/d/16yKEmvxEBuCkub9oYmypkFqpNrh1dXNm/view"
//         },
//         {
//             title: "AWS Academy Introduction to Cloud Semester II",
//             link: "https://drive.google.com/file/d/1megAoF0jsr2IX2U6z-Xr_lE23FlEZBGQ/view"
//         },
//         {
//             title: "Programming in C (Infosys Springboard)",
//             link: "https://drive.google.com/file/d/12-l-rqRYNrFyXdEgN2xoQahTUw6IKgFs/view"
//         },
//         {
//             title: "PCAP - Programming Essentials in Python (Cisco Networking Academy)",
//             link: "https://drive.google.com/file/d/1Ct0PbLCTbmeNhPmNPqeC6bnclAFSJBqH/view"
//         }
//     ]
// };

// ABHISHEK YADAV
export const data: DATA = {
    name: "Abhishek Yadav",
    location: "Ghaziabad, Uttar Pradesh",
    socialMedia: [
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/abhishek-yadav-b48377256/",
            icon: <Linkedin size={16} />
        },
        {
            title: "+91 7234908495",
            link: "tel:+917234908495",
            icon: <Phone size={16} />
        },
        {
            title: "abhi.yadavh2o@gmail.com",
            link: "mailto:abhi.yadavh2o@gmail.com",
            icon: <Mail size={16} />
        },
        {
            title: "GitHub",
            link: "https://github.com/yadavAbhi47",
            icon: <Github size={16} />
        },
        {
            title: "Leetcode",
            link: "https://leetcode.com/u/Abhishek_Yadav_leetcode/",
            icon: <SiLeetcode size={16} />
        },
        // {
        //     title: "Portfolio",
        //     link: "https://lav-kumar-yadav.onrender.com/"
        // }
    ],
    ProfilePic: "",
    proffesionalSummary:
        "Backend developer with a strong foundation in computer science, data structures, and algorithms, specializing in Java and Spring Boot–based application development. Experienced in building REST APIs, implementing layered architecture, handling data persistence, and ensuring backend performance and reliability. Adept at writing clean, maintainable code and working in agile environments. Motivated to grow as a Java backend engineer and contribute to scalable backend systems.",
    educationAndQualification: [
        {
            degree: "B.Tech",
            branch: "Computer Engineering",
            institute: "ABES Engineering College – Ghaziabad",
            time: "11/2022 - 07/2026",
            result: "Percentage : 72.16%"
        },
        {
            degree: "Class 12th (CBSE Board)",
            branch: "",
            institute: "Oxford Public School",
            time: "2021",
            result: "76.6%"
        },
        {
            degree: "Class 10th (CBSE Board)",
            branch: "",
            institute: "Laxmi Prasad Memorial Public School",
            time: "2019",
            result: "86.4%"
        }
    ],
    technicalSkills: [
        {
            title: "Frontend Development",
            skills: "HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Web Design,"
        },
        {
            title: "Backend Development",
            skills: "Java, Spring Boot, Spring MVC, RESTful API Development, Layered Architecture"
        },
        {
            title: "Database",
            skills: "MySQL / PostgreSQL (Basics), SQL (Basics), Spring Data JPA, Hibernate"
        },
        {
            title: "Security",
            skills: "Spring Security (Basic Authentication, JWT – Basics), Authorization"
        },
        {
            title: "Programming & Concepts",
            skills: "Core Java, Data Structures & Algorithms, Object-Oriented Programming (OOP)"
        },
        {
            title: "Tools & Platforms",
            skills: "Git, GitHub, VS Code, IntelliJ IDEA, Postman, Maven"
        },
        {
            title: "Analytical Skills",
            skills: "Problem Solving, Highest Ratings: LeetCode 1688, CodeChef 1608"
        },
        {
            title: "Other Skills",
            skills: "Debugging, API Testing, Communication"
        },
    ],
    projects: [
        // {
        //     title: "IChat – A Real-Time Chat Platform",
        //     link: "https://chat-app-1-pwkc.onrender.com/",
        //     time: "11/2024 - 12/2024",
        //     points: [
        //         <>Developed a real-time chat platform supporting one-to-one messaging with persistent chat history, ensuring reliability and scalability.</>,
        //         <>Engineered backend services using Node.js and Express.js, implementing secure authentication and session handling for user accounts.</>,
        //         <>Leveraged Socket.IO to enable instant bidirectional communication between clients and servers with minimal latency.</>,
        //         <>Integrated MongoDB for structured storage of chat messages and user details, with efficient schema design for faster queries.</>,
        //         <>Created a React.js frontend with reusable components and a clean UI for smooth real-time chat interactions.</>,
        //         <>Collaborated in a simulated agile team setup, using Git and GitHub for version control, peer reviews, and task management.</>,
        //         <><b>Tech Stack:</b> Node.js, Express.js, Socket.IO, React.js, MongoDB</>
        //     ]
        // },
        {
            title: "Student Management System – To perform CRUD operations",
            link: "https://github.com/yadavAbhi47/Student-Management-Application",
            time: "06/2025",
            points: [
                <>Built RESTful APIs using Spring Boot for managing student records (Create, Read, Update, Delete).</>,
                <>Implemented data validation using annotations from Jakarta Validation (Hibernate Validator).</>,
                <>Integrated PostgreSQL database using Spring Data JPA for seamless ORM-based data access.</>,
                <>Used Lombok to reduce boilerplate code and enhance readability.</>,
                <>Tested endpoints using Postman for ensuring API reliability and correctness</>,
                <>Followed modular and OOP-based design patterns to maintain clean code and ensure reusability across the application.</>,
                <><b>Tech Stack:</b> Spring Boot, REST API, PostgreSQL, Lombok, Validation (Jakarta/Bean Validation)</>
            ]
        },
        {
            title: "E-Shop –  Production-Grade eCommerce Application",
            link: "https://github.com/yadavAbhi47/E-commerce",
            time: "08/2025 - Present",
            points: [
                <>Currently developing a full-stack eCommerce application using Spring Boot (backend) and React.js (frontend).</>,
                <>Learning and implementing JWT-based authentication and authorization with Spring Security to secure user access</>,
                <>Working on integrating PostgreSQL/MySQL using Spring Data JPA and Hibernate for data persistence and entity relationships.</>,
                <>Using Lombok to minimize boilerplate code and improve development efficiency.</>,
                <>Gaining hands-on experience in deploying applications to AWS with cloud best practices.</>,
                <>Implementing features like pagination, sorting, and user role/profile management to enhance application functionality.</>,
                <><b>Tech Stack:</b>  Spring Boot, Spring Security, React.js, PostgreSQL/MySQL, AWS</>
            ]
        }
    ],

    certifications: [
        {
            title: "Foundation of UX Design (Coursera)",
            link: "https://drive.google.com/file/d/1nnDv2shu00azA2Fp-4UjscFOzVN3oOIW/view"
        },
        {
            title: "Cloud Security Fundamentals (Infosys Springboard)",
            link: "https://drive.google.com/file/d/1DN_GNTmxZXC31RGFcs7L32vG4-QWeoYL/view"
        },
        {
            title: "Programming in C (Infosys Springboard)",
            link: "https://drive.google.com/file/d/1afHk5jF2obU_MklsdXfCjUgQ7f7iVsFt/view"
        },
        {
            title: "Data Analytics Essentials (Cisco Networking Academy)",
            link: "https://drive.google.com/file/d/1U2YG-XH3KCCmyOr0znM0xkeVsnxSKFbk/view"
        }
    ],

    extracurricular: [
    {
        event: "TEDXABES(Event)",
        position: "Coordinator",
        time: "2024",
        point: <>Led the design and setup of event decorations, ensuring alignment with TEDx themes and audience experience. Collaborated with team members to deliver creative and timely event setups.</>
    },
    {
        event: "GENERO(College Fest)",
        position: "Coordinator",
        time: "2025",
        point: <>Guided volunteers in planning and executing event decorations, ensuring visually appealing setups aligned with fest themes.</>
    }
    ]

};

