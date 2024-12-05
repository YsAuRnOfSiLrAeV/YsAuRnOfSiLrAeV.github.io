import {
  mobile,
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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Courses",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Spring Boot & Blynk Developer",
    icon: mobile,
  },
  {
    title: "WEB Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "WEB Developer",
    company_name: "IT-Elit",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2018 - 2020",
    points: [
      "Developed sites, which were connected to database using PHP and MySQL.",
      "Collaborating with other students, while doing joint projects.",
      "Successfully passed all course works and received certificates.",
    ],
  },
  {
    title: "Embedded Developer",
    company_name: "RoboCode",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2019 - 2022",
    points: [
      "Used framework Blynk  for making apps for embedded devices.",
      "Made a PCB design of Arduino and ESP32.",
      "Developed my own analog and digital sensors.",
      "Won local RoboCode Hackathon and participated in overall country RoboCode Hackathon.",
      "Successfully passed all course works and received certificates.",
    ],
  },
  {
    title: "Software Engineer | Java Spring Framework 6 with Spring Boot 3",
    company_name: "Udemy",
    icon: shopify,
    iconBg: "#383E56",
    date: "NOW",
    points: [
      "Mastering Java, Spring 6 and Spring Boot 3 with JDBC, JPA, Security, Docker and Microservices with Telusko.",
      "Learning core Java, Spring Boot, Spring Core - IoC, Spring MVC, Spring AOP, Spring Data JPA, Spring REST, Spring Security, Docker, Microservices.",
      "Successfully passing all course works and quizzes.",
    ],
  },
  {
    title: "Full Stack Java Developer | FULL STACK JAVA DEV: JAVA + JSP + SPRING + BOOT + JS + REACT",
    company_name: "Udemy",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "NOW",
    points: [
      "Building a fully functioning web application through a simplistic step from a professional trainer.",
      "Learning Java server pages, servlets, and JSTL from the basics to advance.",
      "Using the web template to make the web application incredible.",
      "Adding records into the database, updating record(s) into database, deleting record(s) into database.",
      "Developing Dynamic Web Applications.",
      "Learning the concept related to Generics.",
      "Spring Framework, Spring Boot, Spring Boot Restful API.",
      "Web Services – RestFul API.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Robotics",
    description:
      "Radio controlled FPV car, which can move by itself, can be controled and can film the ride. Main components: Arduino UNO R3(x2), NRF24L01(x2), FPV set(mini-camera, TS832, RC832), HC-SR04 + servo.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Robotics",
    description:
      "Alarm clock that wakes up with light(prototype). Wakes up with light, wakes up with noice, shows current time. Main components: Arduino Nano, DS3231SN, LCD 1602, Bright white LED, Hand-made body.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Powerlifting",
    description:
      "Bench press - 110kg. Dead lift - 150kg. Squat - 110kg",
    tags: [
      {
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
