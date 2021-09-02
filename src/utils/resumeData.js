import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

export default {
    name:'Amri Maher',
    title :'Développeur Web',
    birthday : '26 Août',
    email: 'amri.maher@yahoo.com',
    job:'Freelance',

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
about:"Développeur Web, je me forme depuis plusieurs années dans le développement Web ainsi que dans l'UX Design, Mes champs de connaissances englobent le Front-End avec HTML, CSS, et le Javascript dont les librairies JQuery et ReactJS, mais également le Back-End avec MySQL et le PHP dont le framework Symfony. Je possède les compétences pour mettre en place un site internet Responsive.\n\nJ'ai réalisé plusieurs projets en Front-End et Back-End, notamment de l'intégration web, du responsive ainsi que de l'animation web. ",


};
