import {
  mobile,
  backend,
  creator,
  web,
  AUK,
  ASU,
  itelit,
  robocode,
  udemy,
  bintree,
  flashcard,
  teaching,
  car,
  alarm,
  lifting,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
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
    title: "Embedded Systems Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "AUK",
    icon: AUK,
  },
  {
    name: "ASU",
    icon: ASU,
  },
];

const experiences = [
  {
    title: "WEB Developer",
    company_name: "IT-Elit",
    icon: itelit,
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
    icon: robocode,
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
    icon: udemy,
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
    icon: udemy,
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

const projects = [
  {
    name: "Robotics",
    description:
      "Radio controlled FPV car, which can film the ride. Main components: Arduino Nano(x2), NRF24L01(x2), FPV set(mini-camera, TS832, RC832), servo, engine and hand-made body. Look at my REPO",
    image: car,
  },
  {
    name: "Robotics",
    description:
      "Alarm clock that wakes up with light(prototype). Wakes up with light, wakes up with noice, shows current time. Main components: Arduino Nano, DS3231SN, LCD 1602, bright white LED, hand-made body. Look at my REPO",
    image: alarm,
  },
  {
    name: "Powerlifting",
    description:
      "Bench press - 110kg. Dead lift - 150kg. Squat - 110kg",
    image: lifting,
  },
  {
    name: "Mathimatics",
    description:
      "I participated in mathimatical olympiads when I was studying at school. Posess some knowledge of: Mathematical Analysis, Number Theory, Linear Algebra, Discrete Mathematics",
    image: bintree,
  },
  {
    name: "Languages",
    description:
      "I know Ukrainian on C2 level, Russian on C1, English on B2. I also started learhing German and going to study Spanish",
    image: flashcard,
  },
  {
    name: "Teaching",
    description:
      "I pretty love training or teaching people some interesting topics, when I posess some knowledge. I am one of the 'Olympiade programming club' lecturers in my university. People say that I have educating talent, because I see what can cause questions before it causes questions.",
    image: teaching,
  },
];

export { services, technologies, experiences, projects };
