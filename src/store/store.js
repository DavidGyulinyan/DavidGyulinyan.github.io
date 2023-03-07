import React from "react";
import Image1 from "../assets/testimonial1.jpg";
import Image2 from "../assets/testimonial2.png";
import Image3 from "../assets/testimonial3.jpg";
import Image4 from "../assets/testimonial4.jpg";

import Work1 from "../assets/work1.png";
import Work2 from "../assets/work2.png";
import Work3 from "../assets/work3.png";
import Work4 from "../assets/work4.png";
import Work5 from "../assets/work5.png";


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
                "Highly skilled and dedicated React developer who brings a wealth of knowledge and expertise to every project he works on. He is a great team player and always goes above and beyond to ensure that his work meets the project's goals and requirements.",
        },
        {
            id: 2,
            image: Image2,
            alt: "image 2",
            title: "Marry Clinton",
            description:
                "Always took the time to explain his approach and made sure we were comfortable with the direction he was taking. His attention to detail and ability to write clean, efficient code were evident in the final product. I would highly recommend David to anyone looking for a skilled and reliable React developer."
        },
        {
            id: 3,
            image: Image3,
            alt: "image 3",
            title: "Sara Cill",
            description:
                "David is always open to feedback and suggestions, and his willingness to iterate and improve was evident in the quality of his work. His communication skills was also top-notch, which made it easy to work with him despite being in different time zones. I would not hesitate to work with David again in the future.",
        },
        {
            id: 4,
            image: Image4,
            alt: "image 4",
            title: "Adam Vite",
            description:
                "His ability to think outside the box and come up with creative solutions to challenging problems is truly impressive. He is an excellent communicator and always keeps the project stakeholders informed of his progress. I highly recommend David for any React development project.",
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
            title: `Ui/Ux \n Design`,
            title2: "Ui/Ux Design",
            description: "Service with more than 2 years of experience.",
            classType: "uil-web-grid",
            modalServiceItems: [
                {
                    id: 1,
                    text: "User research and analysis: Understanding the user's behavior, needs, and preferences through surveys, interviews, and other methods.",
                },
                {
                    id: 2,
                    text: "Wireframing and prototyping: Creating a visual representation of the user interface and interaction design.",
                },
                {
                    id: 3,
                    text: "Visual design: Developing the look and feel of the product through typography, color, layout, and other design elements.",
                },
                {
                    id: 4,
                    text: "User testing and feedback: Conducting usability testing and collecting feedback from users to improve the design.",
                },
                {
                    id: 5,
                    text: "Front-end development: Translating the design into code using HTML, CSS, and JavaScript.",
                },
                {
                    id: 6,
                    text: "Responsive design: Designing for multiple screen sizes and devices to ensure a consistent experience across platforms.",
                },
                {
                    id: 7,
                    text: "Branding and identity design: Creating a visual identity for the product or brand, including logos, colors, and typography.",
                },
            ]
        },
        {
            id: 2,
            title: `Frontend \n Development`,
            title2: "Frontend Development",
            description: "Service with more than 2 years of experience.",
            classType: "uil-arrow",
            modalServiceItems: [
                {
                    id: 1,
                    text: "Frontend web development: Developing the client-side of web applications using HTML, CSS, and JavaScript.",
                },
                {
                    id: 2,
                    text: "Framework expertise: Proficiency in popular frontend framework such as React JS",
                },
                {
                    id: 3,
                    text: "Cross-browser compatibility: Ensuring that the website or application works seamlessly across different web browsers.",
                },
                {
                    id: 4,
                    text: "Responsive design: Designing and developing websites and applications that adapt to various screen sizes and devices.",
                },
                {
                    id: 5,
                    text: "Web performance optimization: Optimizing web pages for faster load times and improved user experience.",
                },
                {
                    id: 6,
                    text: "Code optimization: Writing clean, efficient, and maintainable code.",
                },
                {
                    id: 7,
                    text: "Debugging and troubleshooting: Finding and fixing bugs and issues in the frontend code.",
                },
                {
                    id: 8,
                    text: "Version control: Proficiency in using version control tools such as Git for collaborative development.",
                },
                {
                    id: 9,
                    text: "Accessibility: Ensuring that the frontend code meets accessibility standards and can be used by users with disabilities.",
                },
            ]
        },
        {
            id: 3,
            title: `Product \n Design`,
            title2: "Product Designer",
            description: "Service with more than 2 years of experience.",
            classType: "uil-edit",
            modalServiceItems: [
                {
                    id: 1,
                    text: "User research: Understanding the user's needs, pain points, and preferences through research methods such as surveys, interviews, and user testing.",
                },
                {
                    id: 2,
                    text: "Ideation and prototyping: Generating and testing new ideas and creating prototypes to validate design concepts.",
                },
                {
                    id: 3,
                    text: "Product strategy and planning: Developing a roadmap for the product based on user needs, market trends, and business goals.",
                },
                {
                    id: 4,
                    text: "User experience design: Designing the user interface and interaction of the product to ensure a seamless and intuitive user experience.",
                },
                {
                    id: 5,
                    text: "Product branding and identity: Creating a visual identity and brand guidelines for the product to establish a consistent and recognizable brand image.",
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
                        {
                            id: 4,
                            title: "Redux toolkit"
                        },
                    ],
                },
                {
                    id: 2,
                    data: [
                        {
                            id: 1,
                            title: "Responsive Web Design"
                        },
                        {
                            id: 2,
                            title: "UI/UX Design"
                        },
                        {
                            id: 3,
                            title: "Product Design"
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
                            title: "Tailwind CSS"
                        },
                        {
                            id: 3,
                            title: "Git"
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
            title: "Interior design studio",
            category: "web",
            link: "https://github.com/DavidGyulinyan/interior-design-website"
        },
        {
            id: 2,
            image: Work2,
            title: "Sunset Lodge hotel",
            category: "web",
            link: "https://github.com/DavidGyulinyan/sunset_lodge"
        },
        {
            id: 3,
            image: Work3,
            title: "RitmStyle Aquatherapy",
            category: "web",
            link: "https://github.com/DavidGyulinyan/RitmStyle"
        },
        {
            id: 4,
            image: Work4,
            title: "Guest house",
            category: "web",
            link: "https://github.com/DavidGyulinyan/Norwegian-style-guest-house"
        },
        {
            id: 5,
            image: Work5,
            title: "Online shop website design 'Figma'",
            category: "design",
            link: "https://www.figma.com/file/hvk9iIQYwSuEHIq1vKSlN8/Untitled?node-id=0%3A1&t=lXNrUCDM3nSm7C3H-0"
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
                    title: "Habusak College",
                    subtitle: "Dental Technician",
                    text: "2009 - 2012",
                    subject: "education",
                },
                {
                    id: 2,
                    title: "Yerevan Haybusak University",
                    subtitle: "Dentistry",
                    text: "2012 - 2017",
                    subject: "education",
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
                    title: "Marketing Manager",
                    subtitle: "Eargir IT Center",
                    text: "2021/06 - 2021/12",
                    subject: "work",
                },
                {
                    id: 2,
                    title: "Web Developer",
                    subtitle: "Phenix Corporation",
                    text: "2022/01 - Present",
                    subject: "work",
                },

            ]
        },
    ],


};

