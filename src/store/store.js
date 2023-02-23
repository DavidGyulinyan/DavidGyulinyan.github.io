import React from "react";
import Image1 from "../assets/testimonial1.png"
import Image2 from "../assets/testimonial2.png"
import Image3 from "../assets/testimonial3.png"

export const store = {
    socials: [
        {
            id: 1,
            href: "https://www.facebook.com/profile.php?id=100078521269142",
            Icon: <i className="uil uil-facebook-f"/>,
        },
        {
            id: 2,
            href: "https://www.linkedin.com/in/david-gyulinyan-9834ab215/",
            Icon: <i className="uil uil-linkedin-alt"/>,
        },
        {
            id: 3,
            href: "https://github.com/DavidGyulinyan?tab=repositories",
            Icon: <i className="uil uil-github-alt"/>,
        },
    ],
    infos: [
        {
            id: 1,
            Icon: <i className="uil uil-award-alt about__icon"/>,
            title: "Experience",
            sub_title: "2 Years Working",
        },
        {
            id: 2,
            Icon: <i className="uil uil-briefcase-alt about__icon"/>,
            title: "Completed",
            sub_title: "13 + Projects",
        },
        {
            id: 3,
            Icon: <i className="uil uil-envelope-question about__icon"/>,
            title: "Support",
            sub_title: "Online 24/7",
        },
    ],

    skillsData: [

        {
            id: 1,
            title: "JavaScript"
        },

        {
            id: 2,
            title: "React JS"
        },

        {
            id: 3,
            title: "Redux"
        },

    ],


    skillSystem: [

        {
            id: 1,
            title: "Responsive Design"
        },

        {
            id: 2,
            title: "UI/UX"
        },

        {
            id: 3,
            title: "Figma"
        },


    ],

    skillSystem2: [

        {
            id: 1,
            title: "SCSS"
        },

        {
            id: 2,
            title: "Time management"
        },

        {
            id: 3,
            title: "Digital marketing"
        },

    ],

    skillsData2: [

        {
            id: 1,
            title: "HTML5"
        },

        {
            id: 2,
            title: "CSS3"
        },

        {
            id: 3,
            title: "SASS"
        },

    ],


    menus: [
        {
            id: 1,
            page: "#home",
            Icon: <i className="uil uil-estate nav__icon"/>,
            title: "Home",
            activeNav: "#home"
        },
        {
            id: 2,
            page: "#about",
            Icon: <i className="uil uil-user nav__icon"/>,
            title: "About",
            activeNav: "#about"
        },
        {
            id: 3,
            page: "#skills",
            Icon: <i className="uil uil-file-alt nav__icon"/>,
            title: "Skills",
            activeNav: "#skills"
        },
        {
            id: 4,
            page: "#services",
            Icon: <i className="uil uil-briefcase-alt nav__icon"/>,
            title: "Services",
            activeNav: "#services"
        },
        {
            id: 5,
            page: "#portfolio",
            Icon: <i className="uil uil-scenery nav__icon"/>,
            title: "Portfolio",
            activeNav: "#portfolio"
        },
        {
            id: 6,
            page: "#contact",
            Icon: <i className="uil uil-message nav__icon"/>,
            title: "Contact",
            activeNav: "#contact"
        },
    ],

    testimonials: [
        {
            id: 1,
            image: Image1,
            title: "Jhon Doe",
            description:
                "A really good job, all aspects of the project were followed step by step and with good results.",
        },
        {
            id: 2,
            image: Image2,
            title: "Harry Clinton",
            description:
                "A really good job, all aspects of the project were followed step by step and with good results.",
        },
        {
            id: 3,
            image: Image3,
            title: "Sara Cill",
            description:
                "A really good job, all aspects of the project were followed step by step and with good results.",
        },
    ],

    contact: [
        {
            id: 1,
            className: "bx-mail-send",
            buttonTxt: "Email",
            data: "gyulinyand@gmail.com",
            link: "mailto:examplemail@gmail.com.com",
        },

        {
            id: 2,
            className: "bxl-telegram",
            buttonTxt: "Telegram",
            data: "+374 41855800",
            link: "https://web.telegram.org/k/#@DavidGyulinyan",
        },
    ],

    input: [

        {
            id: 1,
            type: "text",
            name: "name",
            placeholder: "Insert your name",
            label: "Name",
        },

        {
            id: 2,
            type: "email",
            name: "email",
            placeholder: "Insert your email",
            label: "Email"
        },

    ],

    footerMenuItems: [

        {
            id: 1,
            title: "About"
        },

        {
            id: 2,
            title: "Projects"
        },

        {
            id: 3,
            title: "Testimonials"
        },
    ]

};
