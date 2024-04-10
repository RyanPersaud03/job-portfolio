import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNode, FaGitSquare, FaBootstrap, FaPython } from 'react-icons/fa';
import techBlogImage from './assets/project-image/tech-blog.png'; 
import socialmedia from './assets/project-image/social-api.png'; 
import workday from './assets/project-image/workday-screenshot.png'; 
import backroads from './assets/project-image/back-roads.png'; 
import salute from './assets/project-image/salut.png'; 

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in HTML & CSS, expertly designing visually captivating and responsive websites to ensure exceptional user experiences.',
  },
  {
    id: nanoid(),
    title: 'CSS Frameworks',
    icon: <FaBootstrap className='h-16 w-16 text-emerald-500' />,
    text: 'Experienced in CSS frameworks including Bootstrap, Materialize, and Tailwind CSS, I adeptly utilize these tools to streamline front-end development, ensuring consistency, responsiveness, and modern design across web applications.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Specializing in JavaScript, I excel in developing interactive and dynamic web applications, prioritizing seamless user interactions and robust functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in React, I create efficient and interactive front-end applications, prioritizing component-based architecture for optimal performance and user engagement.',
  },
  {
    id: nanoid(),
    title: 'NodeJS',
    icon: <FaNode className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in Node.js, I craft efficient server-side applications with a focus on modular design and performance optimization, ensuring exceptional user experiences.',
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <FaGitSquare className='h-16 w-16 text-emerald-500' />,
    text: 'Experienced in Git, I manage version control for projects, facilitating smooth collaboration and efficient code management.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-emerald-500' />,
    text: "Currently learning Python, I'm eager to explore its versatility and leverage its capabilities for diverse projects.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: techBlogImage,
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/RyanPersaud03/tech-blog',
    title: 'Tech Blog | FullStack',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: socialmedia,
    url: 'https://github.com/RyanPersaud03/social-network-api',
    github: 'https://github.com/RyanPersaud03/social-network-api',
    title: 'Social-Network-API | Back-end',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: workday,
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/RyanPersaud03/work-day-scheduler',
    title: 'Workday Scheduler | Front-end',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: backroads,
    url: 'https://main--lighthearted-fudge-09ab9f.netlify.app/#tours',
    github: 'https://github.com/RyanPersaud03/react-tour',
    title: 'Back-Roads | Front-end',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: salute,
    url: 'https://salut-2-d1e41c6b2557.herokuapp.com/',
    github: 'https://github.com/Mahdi-matty/Salut',
    title: 'Salut | Full-Stack',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
