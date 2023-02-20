import React from "react";

export const store = {
  socials: [
    {
      id: 1,
      href: "https://www.facebook.com/profile.php?id=100078521269142",
      Icon: <i className="uil uil-facebook-f" />,
    },
    {
      id: 2,
      href: "https://www.linkedin.com/in/david-gyulinyan-9834ab215/",
      Icon: <i className="uil uil-linkedin-alt" />,
    },
    {
      id: 3,
      href: "https://github.com/DavidGyulinyan?tab=repositories",
      Icon: <i className="uil uil-github-alt" />,
    },
  ],
  infos: [
    {
      id: 1,
      Icon: <i className="uil uil-award-alt about__icon" />,
      title: "Experience",
      sub_title: "2 Years Working",
    },
    {
      id: 2,
      Icon: <i className="uil uil-briefcase-alt about__icon" />,
      title: "Completed",
      sub_title: "13 + Projects",
    },
    {
      id: 3,
      Icon: <i className="uil uil-envelope-question about__icon" />,
      title: "Support",
      sub_title: "Online 24/7",
    },
  ],
  menus: [
    {
      id: 1,
      page: "#home",
      Icon: <i className="uil uil-estate nav__icon" />,
      title: "Home",
    },
    {
      id: 2,
      page: "#about",
      Icon: <i className="uil uil-user nav__icon" />,
      title: "About",
    },
    {
      id: 3,
      page: "#skills",
      Icon: <i className="uil uil-file-alt nav__icon" />,
      title: "Skills",
    },
    {
      id: 4,
      page: "#services",
      Icon: <i className="uil uil-briefcase-alt nav__icon" />,
      title: "Services",
    },
    {
      id: 5,
      page: "#portfolio",
      Icon: <i className="uil uil-scenery nav__icon" />,
      title: "Portfolio",
    },
    {
      id: 6,
      page: "#contact",
      Icon: <i className="uil uil-message nav__icon" />,
      title: "Contact",
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

  // input: [
  //
  //   {
  //     id:1,
  //     type:"text",
  //     name:"name",
  //     placeholder:"Insert your name",
  //     lable:"Name"
  //   },
  //
  //   {
  //     id:2,
  //     type:"email",
  //     name:"email",
  //     placeholder:"Insert your email",
  //     label:"Email"
  //   },
  //
  // ]
};
