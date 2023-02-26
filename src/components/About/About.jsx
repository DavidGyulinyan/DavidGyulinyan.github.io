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
                        Frontend developer, I create web pages with UI / UX user interface, I have years of experience
                        and many clients are happy with the projects carried out.
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