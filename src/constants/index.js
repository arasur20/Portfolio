import { title } from "framer-motion/client";
import {
  appleWeb,
    recipe,
    yut,
    rps,
    apg,
    ems,
    mobile,
    sql,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
    uber,
  } from "../assets";
  
  export const navLinks = [
    {
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
  
  const services = [
    {
      title: "Frontend Developer",
      icon: javascript,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React.js Developer",
      icon: reactjs,
    },
    {
      title: "SQL Developer",
      icon: sql,
    },
    
  ];
  
  const technologies = [
    {
      name:"Java",
      icon: java
    },
    {
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
      name:"Oracle SQL",
      icon: sql
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
  ];
  
  const experiences = [
    {
      title: "Fullstack Developer Intern",
      company_name: "Besant Technologies",
      icon: web,
      iconBg: "#383E56",
      date: "Jul 2024 - Dec 2024",
      points: [
        "Contributed to the development of scalable frontend and backend architectures for web applications.",
        "Designed and implemented dynamic, responsive, and user-focused interfaces using HTML, CSS, JavaScript, and React JS.",
        "Developed robust backend systems and RESTful APIs utilizing Java, Spring Boot, and MySQL, adhering to best practices for security and scalability.",
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "Amazon Product Grid",
      description:
        "An e-commerce web application where users can browse products, add items to their cart, and manage orders. It features functionalities like viewing product details, updating cart quantities, selecting delivery options, and processing payments.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: apg,
      source_code_link: "https://github.com/arasur20/Amazon_Project",
    },
    {
      name: "Employment Management System",
      description:
        "The Employee Management System is a web app that lets users manage employee data by adding, updating, viewing, and deleting records. ",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "RESTapi",
          color: "green-text-gradient",
        },
        {
          name: "JAVA",
          color: "pink-text-gradient",
        },
      ],
      image: ems,
      source_code_link: "https://github.com/arasur20/Employee-Management-System-Frontend",
    },
    {
      name: "Recipes Book",
      description:
        "A recipe book which fetches data from API and showcases each recipe with Ingredients and Instructions to the users.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
      ],
      image: recipe,
      source_code_link: "https://github.com/arasur20/RecipeAppBook",
    },
    {
      name: "Apple iPhone Web",
      description:
        "A Website which mirrors the Apple's signature aesthetics using ReactJS, ThreeJS and GSAP to learn and upskill my knowledge towards those technologies",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },{
          name: "ThreeJS",
          color: "pink-text-gradient",
        },
        {
          name:"GSAP",
          color:"green-text-gradient"
        }
      ],
      image: appleWeb,
      source_code_link: "https://github.com/arasur20/apple_web",
    },
    {
      name: "RockPaperScissor",
      description:
        "A simple Rock Paper Scissor game, where user can choose a move for that computer makes move in random of three. Where user can see scores",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: rps,
      source_code_link: "https://github.com/arasur20/RockPaperScissor",
    },
    {
      name: "Youtube UI",
      description:
        "A youtube model that shows the exact model of youtube which all created by using only HTML and CSS",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },{
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: yut,
      source_code_link: "https://github.com/arasur20/youtube",
    },
    {
      name: "Uber clone",
      description:
        "The Uber Clone is a full-fledged ride-hailing application built using React Native and Expo, designed to replicate the core functionalities of Uber. The app offers a seamless user experience, allowing customers to book rides, view real-time driver locations, and make secure payments. It also includes an admin interface for managing drivers, users, and ride details.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },{
          name: "TypeScript",
          color: "pink-text-gradient",
        },
        {
          name: "PostgresSQL",
          color: "green-text-gradient",
        },
        {
          name: "Stripe",
          color: "pink-text-gradient",
        }
      ],
      image: uber,
      source_code_link: "https://github.com/arasur20/Uber",
    },
  ];
  
  export { services, technologies, experiences, projects };