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
}

// LAV KUMAR YADAV
export const data: DATA = {
    name: "Lav Kumar Yadav",
    location: "Ghaziabad, Uttar Pradesh",
    socialMedia: [
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/lav-kumar-yadav-b26853223/",
            icon: <Linkedin size={16} />
        },
        {
            title: "+91 6392737953",
            link: "tel:+916392737953",
            icon: <Phone size={16} />
        },
        {
            title: "lavkumar3000@gmail.com",
            link: "mailto:lavkumar3000@gmail.com",
            icon: <Mail size={16} />
        },
        {
            title: "GitHub",
            link: "https://github.com/lav5588",
            icon: <Github size={16} />
        },
        {
            title: "Leetcode",
            link: "https://leetcode.com/u/lav5588/",
            icon: <SiLeetcode size={16} />
        },
        {
            title: "Portfolio",
            link: "https://lav-kumar-yadav.onrender.com/"
        }
    ],
    ProfilePic: "LAV PROFILE.jpg",
    proffesionalSummary:
        "Frontend developer with a strong foundation in computer science, data structures, and algorithms, specializing in building reusable, scalable, and high-performance web applications. Proficient in JavaScript, React.js, Next.js, and modern frontend technologies with hands-on experience in developing full-stack applications using the MERN stack. Skilled in writing clean, maintainable code, optimizing UI performance, and collaborating in agile teams. Passionate about solving problems, learning emerging technologies, and contributing to innovative, user-focused solutions.",
    educationAndQualification: [
        {
            degree: "B.Tech",
            branch: "Computer Science and Engineering (Data Science)",
            institute: "ABES Engineering College – Ghaziabad",
            time: "11/2022 - 07/2026",
            result: "GPA : 7.6"
        },
        {
            degree: "Class 12th (UP Board)",
            branch: "",
            institute: "Maharshi Arvind Vidya Mandir VMV",
            time: "2021",
            result: "89.0%"
        },
        {
            degree: "Class 10th (UP Board)",
            branch: "",
            institute: "Maharshi Arvind Vidya Mandir VMV",
            time: "2018",
            result: "88.1%"
        }
    ],
    technicalSkills: [
        {
            title: "Frontend Development",
            skills: "HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Responsive Web Design, Tailwind CSS"
        },
        {
            title: "Backend Development",
            skills: "Node.js, Express.js, RESTful APIs, Authentication & Authorization"
        },
        {
            title: "Database",
            skills: "MongoDB, Mongoose ODM, SQL (Basics)"
        },
        {
            title: "Programming",
            skills: "JavaScript, TypeScript, Data Structures & Algorithms, Object-Oriented Programming (OOP)"
        },
        {
            title: "Tools & Platforms",
            skills: "Git, GitHub, VS Code, Postman"
        },
        {
            title: "Analytical Skills",
            skills: "Problem Solving, Highest Ratings: LeetCode 1724, CodeChef 1651"
        },
        {
            title: "Other Skills",
            skills: "Debugging, Collaboration, Communication"
        },
    ],
    projects: [
        {
            title: "WriteFlow – A Modern Blogging Platform",
            link: "https://writeflow-m57w.onrender.com/",
            time: "12/2024 - Present",
            points: [
                <>Designed and implemented a full-stack blogging platform enabling users to create, edit, and publish blog posts with secure authentication and authorization workflows.</>,
                <>Built robust backend APIs in Node.js and integrated MongoDB for efficient storage of posts, users, and comments with optimized query handling.</>,
                <>Implemented image upload and management using ImageKit, ensuring scalability and performance for media-heavy content.</>,
                <>Developed a responsive and interactive frontend using Next.js and Tailwind CSS, focusing on seamless navigation and user experience.</>,
                <>Incorporated email notifications via Resend to enhance user engagement and improve communication workflows.</>,
                <>Followed modular and OOP-based design patterns to maintain clean code and ensure reusability across the application.</>,
                <><b>Tech Stack:</b> Next.js, Node.js, MongoDB, Auth.js, ImageKit, Resend</>
            ]
        },
        {
            title: "Cypher Speak – A Real-Time Chat Platform",
            link: "https://github.com/lav5588/cypherspeak",
            time: "04/2024 - 06/2024",
            points: [
                <>Developed a real-time chat platform supporting one-to-one messaging with persistent chat history, ensuring reliability and scalability.</>,
                <>Engineered backend services using Node.js and Express.js, implementing secure authentication and session handling for user accounts.</>,
                <>Leveraged Socket.IO to enable instant bidirectional communication between clients and servers with minimal latency.</>,
                <>Integrated MongoDB for structured storage of chat messages and user details, with efficient schema design for faster queries.</>,
                <>Created a React.js frontend with reusable components and a clean UI for smooth real-time chat interactions.</>,
                <>Collaborated in a simulated agile team setup, using Git and GitHub for version control, peer reviews, and task management.</>,
                <><b>Tech Stack:</b> Node.js, Express.js, Socket.IO, React.js, MongoDB</>
            ]
        }
    ],

    certifications: [
        {
            title: "AWS Academy Introduction to Cloud Semester I",
            link: "https://drive.google.com/file/d/16yKEmvxEBuCkub9oYmypkFqpNrh1dXNm/view"
        },
        {
            title: "AWS Academy Introduction to Cloud Semester II",
            link: "https://drive.google.com/file/d/1megAoF0jsr2IX2U6z-Xr_lE23FlEZBGQ/view"
        },
        {
            title: "Programming in C (Infosys Springboard)",
            link: "https://drive.google.com/file/d/12-l-rqRYNrFyXdEgN2xoQahTUw6IKgFs/view"
        },
        {
            title: "PCAP - Programming Essentials in Python (Cisco Networking Academy)",
            link: "https://drive.google.com/file/d/1Ct0PbLCTbmeNhPmNPqeC6bnclAFSJBqH/view"
        }
    ]
};

