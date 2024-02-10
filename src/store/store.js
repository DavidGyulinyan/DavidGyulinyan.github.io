import React from "react";
import Image1 from "../assets/testimonial1.jfif";
import Image2 from "../assets/testimonial2.png";
import Image3 from "../assets/testimonial3.jpg";
import Image4 from "../assets/testimonial4.jpg";

import Work1 from "../assets/work1.png";
import Work2 from "../assets/work2.png";
import Work3 from "../assets/work3.png";
import Work4 from "../assets/work4.png";
import Work5 from "../assets/work5.png";
import Work6 from "../assets/work6.png";
import Work7 from "../assets/work7.png";
import Work8 from "../assets/work8.png";


export const store = {
    socials: [
        {
            id: Math.random().toString(36).substring(2),
            href: "https://www.facebook.com/profile.php?id=100078521269142",
            Icon: <i className="uil uil-facebook-f" />,
        },
        {
            id: Math.random().toString(36).substring(2),
            href: "https://www.linkedin.com/in/david-gyulinyan/",
            Icon: <i className="uil uil-linkedin-alt" />,
        },
        {
            id: Math.random().toString(36).substring(2),
            href: "https://github.com/DavidGyulinyan",
            Icon: <i className="uil uil-github-alt" />,
        },
    ],
    infos: [
        {
            id: Math.random().toString(36).substring(2),
            Icon: <i className="uil uil-award-alt about__icon" />,
            title: "Experience",
            sub_title: "2 Years Working",
        },
        {
            id: Math.random().toString(36).substring(2),
            Icon: <i className="uil uil-briefcase-alt about__icon" />,
            title: "Completed",
            sub_title: "13 + Projects",
        },
        {
            id: Math.random().toString(36).substring(2),
            Icon: <i className="uil uil-envelope-question about__icon" />,
            title: "Support",
            sub_title: "Online 12/5",
        },
    ],
    menus: [
        {
            id: Math.random().toString(36).substring(2),
            page: "#home",
            Icon: <i className="uil uil-estate nav__icon" />,
            title: "Home",
            activeNav: "#home"
        },
        {
            id: Math.random().toString(36).substring(2),
            page: "#about",
            Icon: <i className="uil uil-user nav__icon" />,
            title: "About",
            activeNav: "#about"
        },
        {
            id: Math.random().toString(36).substring(2),
            page: "#skills",
            Icon: <i className="uil uil-file-alt nav__icon" />,
            title: "Skills",
            activeNav: "#skills"
        },
        {
            id: Math.random().toString(36).substring(2),
            page: "#services",
            Icon: <i className="uil uil-briefcase-alt nav__icon" />,
            title: "Services",
            activeNav: "#services"
        },
        {
            id: Math.random().toString(36).substring(2),
            page: "#portfolio",
            Icon: <i className="uil uil-scenery nav__icon" />,
            title: "Portfolio",
            activeNav: "#portfolio"
        },
        {
            id: Math.random().toString(36).substring(2),
            page: "#contact",
            Icon: <i className="uil uil-message nav__icon" />,
            title: "Contact",
            activeNav: "#contact"
        },
    ],
    testimonials: [
        {
            id: Math.random().toString(36).substring(2),
            image: Image1,
            alt: "image 1",
            title: "Grigor Osipyan",
            description:
                "Highly skilled and dedicated React developer who brings a wealth of knowledge and expertise to every project he works on. He is a great team player and always goes above and beyond to ensure that his work meets the project's goals and requirements.",
        },
        {
            id: Math.random().toString(36).substring(2),
            image: Image2,
            alt: "image 2",
            title: "Tatevik Hakobyan",
            description:
                "Always took the time to explain his approach and made sure we were comfortable with the direction he was taking. His attention to details and ability to write clean, efficient code were evident in the final product. I would highly recommend David to anyone looking for a skilled and reliable React developer."
        },
        {
            id: Math.random().toString(36).substring(2),
            image: Image3,
            alt: "image 3",
            title: "Sarah Cill Tahmanjian",
            description:
                "David is always open to feedback and suggestions, and his willingness to iterate and improve was evident in the quality of his work. His communication skills was also top-notch, which made it easy to work with him despite being in different time zones. I would not hesitate to work with David again in the future.",
        },
        {
            id: Math.random().toString(36).substring(2),
            image: Image4,
            alt: "image 4",
            title: "Ilya Serpokrylov",
            description:
                "His ability to think outside the box and come up with creative solutions to challenging problems is truly impressive. He is an excellent communicator and always keeps the project stakeholders informed of his progress. I highly recommend David for any React development project.",
        },

    ],
    contact: [
        {
            id: Math.random().toString(36).substring(2),
            className: "bx-mail-send",
            buttonTxt: "Email",
            data: "gyulinyand@gmail.com",
            link: "mailto:examplemail@gmail.com.com",
        },
        {
            id: Math.random().toString(36).substring(2),
            className: "bxl-telegram",
            buttonTxt: "Telegram",
            data: "+374 41855800",
            link: "https://web.telegram.org/k/#@DavidGyulinyan",
        },
    ],
    input: [
        {
            id: Math.random().toString(36).substring(2),
            type: "text",
            name: "name",
            placeholder: "Insert your name",
            label: "Name",
        },
        {
            id: Math.random().toString(36).substring(2),
            type: "email",
            name: "email",
            placeholder: "Insert your email",
            label: "Email"
        },
    ],
    footerMenuItems: [
        {
            id: Math.random().toString(36).substring(2),
            title: "About"
        },
        {
            id: Math.random().toString(36).substring(2),
            title: "Projects"
        },
        {
            id: Math.random().toString(36).substring(2),
            title: "Testimonials"
        },
    ],
    modalService: [
        {
            id: Math.random().toString(36).substring(2),
            title: `Ui/Ux \n Design`,
            title2: "Ui/Ux Design",
            classType: "uil-web-grid",
            modalServiceItems: [
                {
                    id: Math.random().toString(36).substring(2),
                    text: "User research and analysis: Understanding the user's behavior, needs, and preferences through surveys, interviews, and other methods.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Wireframing and prototyping: Creating a visual representation of the user interface and interaction design.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Visual design: Developing the look and feel of the product through typography, color, layout, and other design elements.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "User testing and feedback: Conducting usability testing and collecting feedback from users to improve the design.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Front-end development: Translating the design into code using HTML, CSS, and JavaScript.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Responsive design: Designing for multiple screen sizes and devices to ensure a consistent experience across platforms.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Branding and identity design: Creating a visual identity for the product or brand, including logos, colors, and typography.",
                },
            ]
        },
        {
            id: Math.random().toString(36).substring(2),
            title: `Frontend \n Development`,
            title2: "Frontend Development",
            classType: "uil-arrow",
            modalServiceItems: [
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Frontend web development: Developing the client-side of web applications using HTML, CSS, and JavaScript.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Framework expertise: Proficiency in popular frontend framework such as React JS and Vue JS",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Cross-browser compatibility: Ensuring that the website or application works seamlessly across different web browsers.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Responsive design: Designing and developing websites and applications that adapt to various screen sizes and devices.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Web performance optimization: Optimizing web pages for faster load times and improved user experience.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Code optimization: Writing clean, efficient, and maintainable code.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Debugging and troubleshooting: Finding and fixing bugs and issues in the frontend code.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Version control: Proficiency in using version control tools such as Git for collaborative development.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Accessibility: Ensuring that the frontend code meets accessibility standards and can be used by users with disabilities.",
                },
            ]
        },
        {
            id: Math.random().toString(36).substring(2),
            title: `Product \n Design`,
            title2: "Product Designer",
            classType: "uil-edit",
            modalServiceItems: [
                {
                    id: Math.random().toString(36).substring(2),
                    text: "User research: Understanding the user's needs, pain points, and preferences through research methods such as surveys, interviews, and user testing.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Ideation and prototyping: Generating and testing new ideas and creating prototypes to validate design concepts.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Product strategy and planning: Developing a roadmap for the product based on user needs, market trends, and business goals.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "User experience design: Designing the user interface and interaction of the product to ensure a seamless and intuitive user experience.",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    text: "Product branding and identity: Creating a visual identity and brand guidelines for the product to establish a consistent and recognizable brand image.",
                },
            ]
        },
    ],
    skills: [
        {
            id: Math.random().toString(36).substring(2),
            skillGroup: [
                {
                    id: Math.random().toString(36).substring(2),
                    data: [
                        {
                            id: Math.random().toString(36).substring(2),
                            title: "JavaScript"
                        },
                        {
                            id: Math.random().toString(36).substring(2),
                            title: "React JS"
                        },
                        {
                            id: Math.random().toString(36).substring(2),
                            title: "Redux"
                        }
                    ],
                },
                {
                    id: Math.random().toString(36).substring(2),
                    data: [
                        {
                            id: Math.random().toString(36).substring(2),
                            title: "UI/UX Design"
                        },
                        {
                            id: Math.random().toString(36).substring(2),
                            title: "Product Design"
                        },
                    ],
                },
            ]
        },
        {
            id: Math.random().toString(36).substring(2),
            skillGroup: [
                {
                    id: Math.random().toString(36).substring(2),
                    data: [
                        {
                            id: Math.random().toString(36).substring(2),
                            title: "HTML"
                        },
                        {
                            id: Math.random().toString(36).substring(2),
                            title: "CSS"
                        }
                    ],
                },
                {
                    id: Math.random().toString(36).substring(2),
                    data: [
                        {
                            id: Math.random().toString(36).substring(2),
                            title: "Tailwind CSS"
                        },
                        {
                            id: Math.random().toString(36).substring(2),
                            title: "Git"
                        }
                    ],
                },
            ]
        }
    ],
    projectsData: [
        {
            id: Math.random().toString(36).substring(2),
            image: Work7,
            title: "Test online store",
            category: 'web',
            link: "https://github.com/DavidGyulinyan/online_store",
            view: "GitHub"
        },
        {
            id: Math.random().toString(36).substring(2),
            image: Work8,
            title: "Focus Design Studio",
            category: 'web',
            link: "https://github.com/DavidGyulinyan/focus-design-studio",
            view: "GitHub"
        },
        {
            id: Math.random().toString(36).substring(2),
            image: Work1,
            title: "Interior design studio",
            category: "web",
            link: "https://github.com/DavidGyulinyan/interior-design-website",
            view: "GitHub"
        },
        {
            id: Math.random().toString(36).substring(2),
            image: Work2,
            title: "Sunset Lodge hotel",
            category: "web",
            link: "https://github.com/DavidGyulinyan/sunset_lodge",
            view: "GitHub"
        },
        {
            id: Math.random().toString(36).substring(2),
            image: Work6,
            title: "Inknoos meetup web page",
            category: "design",
            link: "https://www.figma.com/file/ADuoPpmm7MOfqlpmOpamFJ/Untitled?node-id=130%3A5&t=WcGvrQIXtxd5Ybhx-1",
            view: "Figma"
        },
        {
            id: Math.random().toString(36).substring(2),
            image: Work3,
            title: "RithmStyle",
            category: "web",
            link: "https://github.com/DavidGyulinyan/RitmStyle",
            view: "GitHub"
        },
        {
            id: Math.random().toString(36).substring(2),
            image: Work4,
            title: "Guest house",
            category: "web",
            link: "https://github.com/DavidGyulinyan/Norwegian-style-guest-house",
            view: "GitHub"
        },
        {
            id: Math.random().toString(36).substring(2),
            image: Work5,
            title: "Atom elecrtrotools 'online sore'",
            category: "design",
            link: "https://www.figma.com/file/hvk9iIQYwSuEHIq1vKSlN8/Untitled?node-id=0%3A1&t=lXNrUCDM3nSm7C3H-0",
            view: "Figma"
        }
    ],
    projectsNav: [
        {
            id: Math.random().toString(36).substring(2),
            name: "all"
        },
        {
            id: Math.random().toString(36).substring(2),
            name: "web"
        },
        {
            id: Math.random().toString(36).substring(2),
            name: "design"
        },
    ],
    qualification: [
        {
            id: 1,
            title: "Experience",
            icon_class: "uil-briefcase-alt",
            sections: [
                {
                    id: Math.random().toString(36).substring(2),
                    title: "Web Developer",
                    subtitle: "Phenix Corporation",
                    text: "2023/05 - Present",
                    subject: "work",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    title: "Code tutor",
                    subtitle: "Phenix Corporation",
                    text: "2022/01 - Present",
                    subject: "work",
                },

            ]
        },

        {
            id: 2,
            title: "Education",
            icon_class: "uil-graduation-cap",
            sections: [
                {
                    id: Math.random().toString(36).substring(2),
                    title: "Smart Code",
                    subtitle: "React JS course",
                    text: "2022.10 - 2022.12",
                    subject: "education",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    title: "Yerevan Haybusak University",
                    subtitle: "Dentistry",
                    text: "2012 - 2018",
                    subject: "education",
                },
                {
                    id: Math.random().toString(36).substring(2),
                    title: "Haybusak College",
                    subtitle: "Dental Technician",
                    text: "2009 - 2012",
                    subject: "education",
                }
            ]
        },
    ],

};

