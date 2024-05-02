import React from "react";
import Image1 from "../assets/testimonial1.jfif";
import Image2 from "../assets/testimonial2.png";
import Image3 from "../assets/testimonial3.jpg";
import Image4 from "../assets/testimonial4.jpg";


import Work4 from "../assets/work4.png";
import Work5 from "../assets/work5.png";
import Work6 from "../assets/work6.png";
import Work7 from "../assets/work7.png";


const generateUniqueIds = () => {
    return Math.random().toString(36).substring(2)
}


export const store = {
    socials: [
        {
            id: generateUniqueIds(),
            href: "https://www.facebook.com/profile.php?id=100078521269142",
            Icon: <i className="uil uil-facebook-f" />,
        },
        {
            id: generateUniqueIds(),
            href: "https://www.linkedin.com/in/david-gyulinyan/",
            Icon: <i className="uil uil-linkedin-alt" />,
        },
        {
            id: generateUniqueIds(),
            href: "https://github.com/DavidGyulinyan",
            Icon: <i className="uil uil-github-alt" />,
        },
    ],
    infos: [
        {
            id: generateUniqueIds(),
            Icon: <i className="uil uil-award-alt about__icon" />,
            title: "Experience",
            sub_title: "2 Years Working",
        },
        {
            id: generateUniqueIds(),
            Icon: <i className="uil uil-briefcase-alt about__icon" />,
            title: "Completed",
            sub_title: "13 + Projects",
        },
        {
            id: generateUniqueIds(),
            Icon: <i className="uil uil-envelope-question about__icon" />,
            title: "Support",
            sub_title: "Online 12/5",
        },
    ],
    menus: [
        {
            id: generateUniqueIds(),
            page: "#home",
            Icon: <i className="uil uil-estate nav__icon" />,
            title: "Home",
            activeNav: "#home"
        },
        {
            id: generateUniqueIds(),
            page: "#about",
            Icon: <i className="uil uil-user nav__icon" />,
            title: "About",
            activeNav: "#about"
        },
        {
            id: generateUniqueIds(),
            page: "#skills",
            Icon: <i className="uil uil-file-alt nav__icon" />,
            title: "Skills",
            activeNav: "#skills"
        },
        {
            id: generateUniqueIds(),
            page: "#services",
            Icon: <i className="uil uil-briefcase-alt nav__icon" />,
            title: "Services",
            activeNav: "#services"
        },
        {
            id: generateUniqueIds(),
            page: "#portfolio",
            Icon: <i className="uil uil-scenery nav__icon" />,
            title: "Portfolio",
            activeNav: "#portfolio"
        },
        {
            id: generateUniqueIds(),
            page: "#contact",
            Icon: <i className="uil uil-message nav__icon" />,
            title: "Contact",
            activeNav: "#contact"
        },
    ],
    testimonials: [
        {
            id: generateUniqueIds(),
            image: Image1,
            alt: "image 1",
            title: "Grigor Osipyan",
            description:
                "Highly skilled and dedicated React developer who brings a wealth of knowledge and expertise to every project he works on. He is a great team player and always goes above and beyond to ensure that his work meets the project's goals and requirements.",
        },
        {
            id: generateUniqueIds(),
            image: Image2,
            alt: "image 2",
            title: "Tatevik Hakobyan",
            description:
                "Always took the time to explain his approach and made sure we were comfortable with the direction he was taking. His attention to details and ability to write clean, efficient code were evident in the final product. I would highly recommend David to anyone looking for a skilled and reliable React developer."
        },
        {
            id: generateUniqueIds(),
            image: Image3,
            alt: "image 3",
            title: "Sarah Cill Tahmanjian",
            description:
                "David is always open to feedback and suggestions, and his willingness to iterate and improve was evident in the quality of his work. His communication skills was also top-notch, which made it easy to work with him despite being in different time zones. I would not hesitate to work with David again in the future.",
        },
        {
            id: generateUniqueIds(),
            image: Image4,
            alt: "image 4",
            title: "Ilya Serpokrylov",
            description:
                "His ability to think outside the box and come up with creative solutions to challenging problems is truly impressive. He is an excellent communicator and always keeps the project stakeholders informed of his progress. I highly recommend David for any React development project.",
        },

    ],
    contact: [
        {
            id: generateUniqueIds(),
            className: "bx-mail-send",
            buttonTxt: "Email",
            data: "gyulinyand@gmail.com",
            link: "mailto:gyulinyand@gmail.com?subject=Subject&body=Message",
        },
        {
            id: generateUniqueIds(),
            className: "bxl-telegram",
            buttonTxt: "Telegram",
            data: "+37477770335",
            link: "https://web.telegram.org/k/#@DavidGyulinyan",
        },
    ],
    input: [
        {
            id: generateUniqueIds(),
            type: "text",
            name: "name",
            placeholder: "Insert your name",
            label: "Name",
        },
        {
            id: generateUniqueIds(),
            type: "email",
            name: "email",
            placeholder: "Insert your email",
            label: "Email"
        },
    ],
    footerMenuItems: [
        {
            id: generateUniqueIds(),
            title: "About"
        },
        {
            id: generateUniqueIds(),
            title: "Projects"
        },
        {
            id: generateUniqueIds(),
            title: "Testimonials"
        },
    ],
    modalService: [
        {
            id: generateUniqueIds(),
            title: `Ui/Ux \n Design`,
            title2: "Ui/Ux Design",
            classType: "uil-web-grid",
            modalServiceItems: [
                {
                    id: generateUniqueIds(),
                    text: "User research and analysis: Understanding the user's behavior, needs, and preferences through surveys, interviews, and other methods.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Wireframing and prototyping: Creating a visual representation of the user interface and interaction design.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Visual design: Developing the look and feel of the product through typography, color, layout, and other design elements.",
                },
                {
                    id: generateUniqueIds(),
                    text: "User testing and feedback: Conducting usability testing and collecting feedback from users to improve the design.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Front-end development: Translating the design into code using HTML, CSS, and JavaScript.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Responsive design: Designing for multiple screen sizes and devices to ensure a consistent experience across platforms.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Branding and identity design: Creating a visual identity for the product or brand, including logos, colors, and typography.",
                },
            ]
        },
        {
            id: generateUniqueIds(),
            title: `Frontend \n Development`,
            title2: "Frontend Development",
            classType: "uil-arrow",
            modalServiceItems: [
                {
                    id: generateUniqueIds(),
                    text: "Frontend web development: Developing the client-side of web applications using HTML, CSS, and JavaScript.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Framework expertise: Proficiency in popular frontend framework such as React JS and Vue JS",
                },
                {
                    id: generateUniqueIds(),
                    text: "Cross-browser compatibility: Ensuring that the website or application works seamlessly across different web browsers.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Responsive design: Designing and developing websites and applications that adapt to various screen sizes and devices.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Web performance optimization: Optimizing web pages for faster load times and improved user experience.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Code optimization: Writing clean, efficient, and maintainable code.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Debugging and troubleshooting: Finding and fixing bugs and issues in the frontend code.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Version control: Proficiency in using version control tools such as Git for collaborative development.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Accessibility: Ensuring that the frontend code meets accessibility standards and can be used by users with disabilities.",
                },
            ]
        },
        {
            id: generateUniqueIds(),
            title: `Product \n Design`,
            title2: "Product Designer",
            classType: "uil-edit",
            modalServiceItems: [
                {
                    id: generateUniqueIds(),
                    text: "User research: Understanding the user's needs, pain points, and preferences through research methods such as surveys, interviews, and user testing.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Ideation and prototyping: Generating and testing new ideas and creating prototypes to validate design concepts.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Product strategy and planning: Developing a roadmap for the product based on user needs, market trends, and business goals.",
                },
                {
                    id: generateUniqueIds(),
                    text: "User experience design: Designing the user interface and interaction of the product to ensure a seamless and intuitive user experience.",
                },
                {
                    id: generateUniqueIds(),
                    text: "Product branding and identity: Creating a visual identity and brand guidelines for the product to establish a consistent and recognizable brand image.",
                },
            ]
        },
    ],
    skills: [
        {
            id: generateUniqueIds(),
            skillGroup: [
                {
                    id: generateUniqueIds(),
                    data: [
                        {
                            id: generateUniqueIds(),
                            title: "JavaScript"
                        },
                        {
                            id: generateUniqueIds(),
                            title: "TypeScript"
                        },
                        {
                            id: generateUniqueIds(),
                            title: "React JS"
                        },
                        {
                            id: generateUniqueIds(),
                            title: "Redux"
                        },
                        {
                            id: generateUniqueIds(),
                            title: "Node JS (basic)"
                        },
                        {
                            id: generateUniqueIds(),
                            title: "Express JS (basic)"
                        }
                    ],
                },
                {
                    id: generateUniqueIds(),
                    data: [
                        {
                            id: generateUniqueIds(),
                            title: "UI/UX Design"
                        },
                        {
                            id: generateUniqueIds(),
                            title: "Product Design"
                        },
                        {
                            id: generateUniqueIds(),
                            title: "Product Managment"
                        },
                    ],
                },
            ]
        },
        {
            id: generateUniqueIds(),
            skillGroup: [
                {
                    id: generateUniqueIds(),
                    data: [
                        {
                            id: generateUniqueIds(),
                            title: "HTML"
                        },
                        {
                            id: generateUniqueIds(),
                            title: "CSS"
                        },
                        {
                            id: generateUniqueIds(),
                            title: "SASS"
                        },
                        {
                            id: generateUniqueIds(),
                            title: "SCSS"
                        }
                    ],
                },
                {
                    id: generateUniqueIds(),
                    data: [
                        {
                            id: generateUniqueIds(),
                            title: "Tailwind CSS"
                        },
                        {
                            id: generateUniqueIds(),
                            title: "Git"
                        },
                        {
                            id: generateUniqueIds(),
                            title: "Linux OS (ubuntu)"
                        }
                    ],
                },
            ]
        }
    ],
    projectsData: [
        {
            id: generateUniqueIds(),
            image: Work7,
            title: "Test online store",
            category: 'web',
            link: "https://github.com/DavidGyulinyan/online_store",
            view: "GitHub"
        },
        {
            id: generateUniqueIds(),
            image: Work6,
            title: "Inknoos meetup web page",
            category: "design",
            link: "https://www.figma.com/file/ADuoPpmm7MOfqlpmOpamFJ/Untitled?node-id=130%3A5&t=WcGvrQIXtxd5Ybhx-1",
            view: "Figma"
        },
        {
            id: generateUniqueIds(),
            image: Work4,
            title: "Astronomy Explorer",
            category: "web",
            link: "https://github.com/DavidGyulinyan/astronomy_explorer",
            view: "GitHub"
        },
        {
            id: generateUniqueIds(),
            image: Work5,
            title: "Atom elecrtrotools 'online sore'",
            category: "design",
            link: "https://www.figma.com/file/hvk9iIQYwSuEHIq1vKSlN8/Untitled?node-id=0%3A1&t=lXNrUCDM3nSm7C3H-0",
            view: "Figma"
        }
    ],
    projectsNav: [
        {
            id: generateUniqueIds(),
            name: "all"
        },
        {
            id: generateUniqueIds(),
            name: "web"
        },
        {
            id: generateUniqueIds(),
            name: "design"
        },
    ],
    qualification: [
        {
            id: generateUniqueIds(),
            title: "Experience",
            icon_class: "uil-briefcase-alt",
            sections: [
                {
                    id: generateUniqueIds(),
                    title: "Web Developer",
                    subtitle: "Phenix Corporation",
                    text: "2023/05 - Present",
                    subject: "work",
                },
                {
                    id: generateUniqueIds(),
                    title: "Code tutor",
                    subtitle: "Phenix Corporation",
                    text: "2022/01 - Present",
                    subject: "work",
                },

            ]
        },

        {
            id: generateUniqueIds(),
            title: "Education",
            icon_class: "uil-graduation-cap",
            sections: [
                {
                    id: generateUniqueIds(),
                    title: "Tumo Labs",
                    subtitle: "Guided self learning program",
                    text: "02.2024 - present",
                    subject: "education",
                },
                {
                    id: generateUniqueIds(),
                    title: "Smart Code",
                    subtitle: "React JS course",
                    text: "2022.10 - 2022.12",
                    subject: "education",
                },
                {
                    id: generateUniqueIds(),
                    title: "Yerevan Haybusak University",
                    subtitle: "Dentistry",
                    text: "2012 - 2018",
                    subject: "education",
                },
                {
                    id: generateUniqueIds(),
                    title: "Haybusak College",
                    subtitle: "Dental Technician",
                    text: "2009 - 2012",
                    subject: "education",
                }
            ]
        },
    ],

};

