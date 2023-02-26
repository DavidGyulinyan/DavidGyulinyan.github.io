import React from "react";
import Image1 from "../assets/testimonial1.jpg";
import Image2 from "../assets/testimonial2.png";
import Image3 from "../assets/testimonial3.jpg";
import Image4 from "../assets/testimonial4.jpg";

import Work1 from "../assets/work1.jpg";
import Work2 from "../assets/work2.jpg";
import Work3 from "../assets/work3.jpg";
import Work4 from "../assets/work4.jpg";
import Work5 from "../assets/work5.jpg";


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
            alt: "image 1",
            title: "Dmitri Dyachkov",
            description:
                "David is a highly skilled and dedicated React developer who brings a wealth of knowledge and expertise to every project he works on. He is a great team player and always goes above and beyond to ensure that his work meets the project's goals and requirements. David's attention to detail and commitment to excellence make him a valuable asset to any development team.",
        },
        {
            id: 2,
            image: Image2,
            alt: "image 2",
            title: "Marry Clinton",
            description:
                "Working with David has been an absolute pleasure. He have a deep understanding of React and was able to bring our complex UI designs to life with ease. He always took the time to explain his approach and made sure we were comfortable with the direction he was taking. His attention to detail and ability to write clean, efficient code were evident in the final product. I would highly recommend David to anyone looking for a skilled and reliable React developer."
        },
        {
            id: 3,
            image: Image3,
            alt: "image 3",
            title: "Sara Cill",
            description:
                "I was impressed with David's ability to work collaboratively with our team. He was always open to feedback and suggestions, and his willingness to iterate and improve was evident in the quality of his work. His communication skills was also top-notch, which made it easy to work with him despite being in different time zones. I would not hesitate to work with David again in the future.",
        },
        {
            id: 4,
            image: Image4,
            alt: "image 4",
            title: "Adam Vite",
            description:
                "David is an outstanding React developer who consistently delivers high-quality results. His ability to think outside the box and come up with creative solutions to challenging problems is truly impressive. He is an excellent communicator and always keeps the project stakeholders informed of his progress. I highly recommend David for any React development project.",
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
    ],
    modalService: [
        {
            id: 1,
            title: `Product Designer`,
            title2: "Product Designer",
            description: "Service with more than 1 years of experience. Providing quality work to clients and companies.",
            classType: "uil-web-grid",
            modalServiceItems: [
                {
                    id: 1,
                    text: "I develop the user interface.",
                },
                {
                    id: 2,
                    text: "Web page development.",
                },
                {
                    id: 3,
                    text: "I create ux element interactions.",
                },
                {
                    id: 4,
                    text: "I position your company brand.",
                },
                {
                    id: 5,
                    text: "I position your company brand.",
                },
            ]
        },
        {
            id: 2,
            title: `Ui/Ux \n Designer`,
            title2: "Ui/Ux Designer",
            description: "Service with more than 2 years of experience. Providing quality work to clients and companies.",
            classType: "uil-arrow",
            modalServiceItems: [
                {
                    id: 1,
                    text: "I develop the user interface.",
                },
                {
                    id: 2,
                    text: "Web page development.",
                },
                {
                    id: 3,
                    text: "I create ux element interactions.",
                },
                {
                    id: 4,
                    text: "I position your company brand.",
                },
                {
                    id: 5,
                    text: "I position your company brand.",
                },
            ]
        },
        {
            id: 3,
            title: `Visual \n Designer`,
            title2: "Visual Designer",
            description: "Service with more than 3 years of experience. Providing quality work to clients and companies.",
            classType: "uil-edit",
            modalServiceItems: [
                {
                    id: 1,
                    text: "I develop the user interface.",
                },
                {
                    id: 2,
                    text: "Web page development.",
                },
                {
                    id: 3,
                    text: "I create ux element interactions.",
                },
                {
                    id: 4,
                    text: "I position your company brand.",
                },
                {
                    id: 5,
                    text: "I position your company brand.",
                },
            ]
        },
    ],
    skills: [
        {
            id: 1,
            skillGroup: [
                {
                    id: 1,
                    data: [
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
                },
                {
                    id: 2,
                    data: [
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
                },
            ]
        },
        {
            id: 2,
            skillGroup: [
                {
                    id: 3,
                    data: [
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
                },
                {
                    id: 4,
                    data: [
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
                },
            ]
        }
    ],
    projectsData: [
        {
            id: 1,
            image: Work1,
            title: "Web design",
            category: "web",
        },
        {
            id: 2,
            image: Work2,
            title: "App movil",
            category: "app",
        },
        {
            id: 3,
            image: Work3,
            title: "Brand design",
            category: "design",
        },
        {
            id: 4,
            image: Work4,
            title: "App movil",
            category: "app",
        },
        {
            id: 5,
            image: Work5,
            title: "Web design",
            category: "web",
        },
    ],
    projectsNav: [
        {
            id: 1,
            name: "all"
        },
        {
            id: 2,
            name: "web"
        },
        {
            id: 3,
            name: "app"
        },
        {
            id: 4,
            name: "design"
        },
    ],
    qualification: [
        {
            id: 1,
            title: "Education",
            icon_class: "uil-graduation-cap",
            sections: [
                {
                    id: 1,
                    title: "Yerevan Haybusak University",
                    subtitle: "Bachelor's degree",
                    text: "2012 - 2017",
                },
                {
                    id: 2,
                    title: "Marketing Manager",
                    subtitle: "Eargir IT Center",
                    text: "2021/06 - 2021/12",
                },

            ]
        },
        {
            id: 2,
            title: "Experience",
            icon_class: "uil-briefcase-alt",
            sections: [
                {
                    id: 1,
                    title: "Habusak College",
                    subtitle: "Tech Engineering",
                    text: "2009 - 2012",
                },
                {
                    id: 2,
                    title: "Web Developer",
                    subtitle: "Phenix Corporation",
                    text: "2022/01 - Present",
                },

            ]
        },
    ]
};

