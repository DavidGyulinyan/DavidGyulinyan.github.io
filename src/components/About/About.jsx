import React from 'react';
import "./About.css";
import AboutImg1 from "../../assets/cvImg1.jfif";
import CV from "../../assets/Davit-Gyulinyan-resume.pdf";
import Info from './Info';
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
                    src={AboutImg1}
                    alt="my img"
                />
                <div className="about__data">
                    <Info/>
                    <p className="about__description">
                        I'm a front-end developer. Passionate about creating beautiful and functional user interfaces that enhance the user experience.
                        <br/><br/>
                      
                        My design skills and attention to details are always at the forefront of my work, ensuring that the final product is not only functional but also visually appealing. I have collaborated with designers, developers, and project managers to deliver high-quality projects that meet client's requirements and exceed expectations.

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