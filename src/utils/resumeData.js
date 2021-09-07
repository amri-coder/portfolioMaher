import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { AssignmentOutlined, WebOutlined } from '@material-ui/icons';
import HttpIcon from '@material-ui/icons/Http';
import LanguageIcon from '@material-ui/icons/Language';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';


export default {
    name:'Amri Maher',
    title :'Développeur Web',
   
    email: 'amri.maher@yahoo.com',
    job:'Freelance',
    adress:'Rueil Malmaison, 92, IDF, Fr',
    phone:'06.52.96.02.44',
socials: {
    Facebook : {
        link: "https://www.facebook.com",
        text:"MonFacebook",
        icon:<FacebookIcon />,
    },
    Twitter : {
        link: "https://www.twitter.com",
        text:"MonTwitter",
        icon:<TwitterIcon />,
    },
    LinkedIn : {
        link:"https://www.linkedin.com/in/maher-amri-302228187/",
        text: "MonLinkedIn",
        icon: <LinkedInIcon />,
    },
    Github : {
        link:"https://github.com/amri-coder",
        text: "MonGitHub",
        icon: <GitHubIcon />,
    },
},
about:"Développeur Web, je me forme depuis plusieurs années dans le développement Web ainsi que dans l'UX Design, Mes champs de connaissances englobent le Front-End avec HTML, CSS, et le Javascript dont les librairies JQuery et ReactJS, mais également le Back-End avec Java,  MySQL et le PHP dont le framework Symfony. Je possède les compétences pour mettre en place un site internet Responsive.\n\nJ'ai réalisé plusieurs projets en Front-End et en Back-End, notamment de l'intégration web, du responsive ainsi que de l'animation web,  je suis à votre disposition pour répondre à tout type de projets de création de sites internet vitrine, e-commerce, de développement spécifique ou d’applications web.  ",

experiences:[
    {
        title:'Projet 1',
        description:'Site portfolio',
        lien: 'https://amri-coder.github.io/siteWeb/',
    
    },
{
    title:'Projet 2',
    description:'Site web - Portfolio',
    lien: 'http://amri-dev.site/',

},
{
    title:'Projet 3',
    description:'Site Agence',
    lien: 'http://amri.store/',

},
{
    title:'Projet 4',
    description:'Site E-commerce',
    lien: 'https://amri-coder.github.io/la-maison-jungle/',

},
{
    title:'Projet 5',
    description:'Site web - E-commerce',
    lien: 'https://github.com/amri-coder/e-commerce',

},
{
    title:'Projet 6',
    description:'Site location de voiture',
    lien: 'https://github.com/amri-coder/rentCar',

},

],
educations: [
    {
        title:'Éducation 1',
        date:'2021',
        description: 'Formation en php | Symfony',
        desc:'Lamanu - Versailles',
    },
    {
        title:'Éducation 2',
        date:'2020',
        description:'Formation en JavaScript | React',
        desc:'Simplon - Montreuil',
    },
    {
        title:'Éducation 3',
        description:'Master informatique',
        desc:'Ufr Sciences de Gafsa',
    },

],
services : [
    {
        title:'Développement Web',
        description:'Je travaille sur la conception de sites Web depuis plusieurs années.',
        icon:<WebOutlined />
    },
    {
        title:'Identité De Marque',
        description:'Je vais vous faire une marque qui accroche et laisse une trace.',
        icon:<AssignmentOutlined />
    },
    {
        title:'Illustrateur',
        description:'Je travaille sur la conception d\'illustrations depuis plusieurs années.',
        icon:<BuildOutlinedIcon />
    },
], 

skills : [
    {
        title:"FRONT-END", 
        description : [
            "ReactJS",
            "JavaScript",
            "Bootstrap",
            "Material-UI",
        ],
    },
    {
        title:"BACK-END",
        description:["Php", "Java", "Symfony"],
    },
    {
        title:"DATABASES",
        description:["MySQL", "MongoDB", "Firebase"],
    },
    {
        title:"SOURCE CONTROL",
        description:["Git", "GitHub", "SCRUM/Agile"],
    },
],
projects: [
    {
        tag:'Autres',
        image:'1',
        image2:'../../assets/images/projet1_1.png',
        title:'Projet 1',
        caption:'Site web portfolio',
        description:'SITE WEB PERSONNEL RESPONSIVE',
        desc: 'Bootstrap, HTML5, CSS3, JavaScript, ...Ect',
        links: [
            {
                link:'https://amri-coder.github.io/siteWeb/',
                icon: <LanguageIcon />,
            },
            {
                link:'https://github.com/amri-coder/siteWeb',
                icon: <GitHubIcon />,
            },
        ]
    },


    {
        tag:'React',
        image:'2',
        title:'React Projet 2',
        caption:'Site web d\'une agence web',
        description:'Projet de site d\'agence',
        links: [
            {
                link:'http://amri.store/',
                icon: <LanguageIcon />,
            },
            {
                link:'https://github.com/amri-coder',
                icon: <GitHubIcon />,
            },
        ]
    },

    {
        tag:'React',
        image:'3',
        image2:'../../assets/images/projet3_1.png',
        title:'React Projet 3',
        caption:'Site web d\'une agence web',
        description:'Projet de portfolio',
        links: [
            {
                link:'http://amri-dev.site/',
                icon: <LanguageIcon />,
            },
            {
                link:'https://github.com/amri-coder/siteWeb',
                icon: <GitHubIcon />,
            },
        ]
    },

    {
        tag:'React',
        image:'4',
        image2:'../../assets/images/projet1_1.png',
        title:'Projet 1',
        caption:'Site web d\'une agence web',
        description:'Projet de portfolio',
        links: [
            {
                link:'https://amri-coder.github.io/siteWeb/',
                icon: <LanguageIcon />,
            },
            {
                link:'https://github.com/amri-coder/siteWeb',
                icon: <GitHubIcon />,
            },
        ]
    },

    {
        tag:'Symfony',
        image:'5',
        image2:'../../assets/images/projet1_1.png',
        title:'Symfony Projet 1',
        caption:'Site web d\'une agence web',
        description:'Projet de portfolio',
        links: [
            {
                link:'https://amri-coder.github.io/siteWeb/',
                icon: <LanguageIcon />,
            },
            {
                link:'https://github.com/amri-coder/siteWeb',
                icon: <GitHubIcon />,
            },
        ]
    },

    {
        tag:'Bootstrap',
        image:'6',
        image2:'../../assets/images/projet1_1.png',
        title:'Projet 1',
        caption:'Site web d\'une agence web',
        description:'Projet de portfolio',
        links: [
            {
                link:'https://amri-coder.github.io/siteWeb/',
                icon: <LanguageIcon />,
            },
            {
                link:'https://github.com/amri-coder/siteWeb',
                icon: <GitHubIcon />,
            },
        ]
    },

    {
        tag:'React',
        image:'7',
        image2:'../../assets/images/projet1_1.png',
        title:'Projet 1',
        caption:'Site web d\'une agence web',
        description:'Projet de portfolio',
        links: [
            {
                link:'https://amri-coder.github.io/siteWeb/',
                icon: <LanguageIcon />,
            },
            {
                link:'https://github.com/amri-coder/siteWeb',
                icon: <GitHubIcon />,
            },
        ]
    },
]

};
