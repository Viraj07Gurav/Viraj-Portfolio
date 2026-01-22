import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool,FaJava, FaCss3, FaHtml5, FaJs, FaBootstrap } from 'react-icons/fa6'
import profileImg from '../assets/profile.avif'
import { FaProjectDiagram } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { BsFiletypePhp } from 'react-icons/bs'
import appImage from '../assets/app.webp'
import taskManagement from '../assets/taskmanagement.png'
import bookshop from '../assets/bookshop.png'
import bikerental from '../assets/bikerental.png'
import myImage from '../assets/Myimage.jpeg'
import myImage2 from '../assets/myimage2.png'
export const assets = {
    profileImg,myImage,myImage2
}


export const navMenu = [
    {lable:'Home',id:''},
    {lable: 'Work',id:'work'}, 
    {lable: 'Skills',id:'skills'}, 
    { lable:'About', id:'about'},
     {lable:'Contact',id:'contact'}
    ]


export const skillsDataBackend = [
    {
        icon: FaJava,
        title: 'Java',
        technologies: ['Python', 'Postgres', 'Redis', 'Next.js']
    },
    {
        icon: BsFiletypePhp,
        title:'PHP',
    },
    {
        icon:SiMysql,
        title:'Mysql'
    }
    // {
    //     icon: FaReact,
    //     title: 'Frontend',
    //     technologies: ['React', 'Html', 'Css', 'Tailwindcss']
    // },
    // {
    //     icon: FaDesktop,
    //     title: 'Web',
    //     technologies: ['Nginx', 'Linux', 'Wsgi', 'Server']
    // },
    // {
    //     icon: FaCode ,
    //     title: 'DevOps',
    //     technologies: ['Linux', 'Git', 'Github', 'Docker', 'Jenkins', 'CI/CD']
    // },
    // {
    //     icon: FaMobile,
    //     title: 'Mobile',
    //     technologies: ['React Native', 'Android', 'Flutter', 'Java']
    // },
]
export const skillsDataFontEnd=[
    
    {
        icon:FaHtml5,
        title:'HTML5'
    },
    {
        icon:FaCss3,
        title:'CSS3'
    },
    {
        icon:FaJs,
        title:'JavaScrip'
    },
    {
        icon:FaBootstrap,
        title:'Bootstrap'
    },
    {
        icon:FaReact,
        title:'React'
    }
]



export const projectData = [
    {
        title: 'Task Management',
        link:'https://github.com/Viraj07Gurav/InternalTaskManagement',
        description: 'Role-based web application designed to task management.',
        image:taskManagement,
        tech: ['React', 'Tailwindcss', 'Nodejs']
    },
    {
        title: 'Timetable Generator',
        link:'https://github.com/Viraj07Gurav/Timetable_Generator-Android_app-',
        description: 'The app is automatically generate conflict free timetable based on the inputs provided by admin .',
        image:appImage,
        tech: ['Java', 'XML', 'sqLite','Android Studio']
    },
    {
        title: 'Online-Book-Store',
         link:'https://github.com/Viraj07Gurav/online-book-shop',
        description: 'Online book store web app for browsing books and managing simple purchases.',
        image:bookshop ,
        tech: ['HTML', 'Bootstrap','PHP', 'Mysql']
    },
    {
        title: 'Bike Rental System',
         link:'https://github.com/Viraj07Gurav/Bike-Rental-System?tab=readme-ov-file',
        description: 'Console-based system for managing bike rentals, availability, and bookings through terminal interaction.',
        image:bikerental,
        tech: ['Core Java',]
    }
]

export const profileData = [
    {
        icon: FaCode ,
        title: 'Language',
        technologies : ['Java', 'PHP', 'Javascript', 'React']
    },
    {
        icon: FaSchool ,
        title: 'Education',
        technologies : ['Bsc in Information Technology']
    },
    {
        icon: FaProjectDiagram ,
        title: 'Tools',
        technologies : ['Vscode, Android studio, Eclipse']
    },
]