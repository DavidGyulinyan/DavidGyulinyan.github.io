import React from 'react'
import "./About.css"
import AboutImg from "../../assets/cvImg.jpg"
import CV from "../../assets/Gyulinyan-CV.pdf"
import Info from './Info'
import {ReactComponent as FileSvg} from "../../assets/files.svg";
import Section from "../Section/Section";

const About = () => {
    return (
        <Section
            id="about"
            title="About Me"
            subtitle="My introduction"
        >
            <div className="about__container container grid">
                <img
                    className="about__img"
                    src={AboutImg}
                    alt="my img"
                />
                <div className="about__data">
                    <Info/>
                    <p className="about__description">
                        I'm a front-end developer with 2 years of experience. I am passionate about creating beautiful and functional user interfaces that enhance the user experience.
                        <br/><br/>
                        In my time as a front-end developer, I have worked with a variety of technologies such as HTML, CSS, JavaScript, and React. I have experience in creating responsive and accessible websites and web applications that are optimized for performance.
                        <br/><br/>
                        My design skills and attention to detail are always at the forefront of my work, ensuring that the final product is not only functional but also visually appealing. I have collaborated with designers, developers, and project managers to deliver high-quality projects that meet client requirements and exceed expectations.

                           </p>
                    <a
                        download="My CV"
                        href={CV}
                        className="button button--flex"
                    >
                        Download CV
                        <FileSvg/>
                    </a>
                </div>
            </div>
        </Section>
    )
}

export default About