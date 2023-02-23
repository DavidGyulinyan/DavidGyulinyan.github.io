import React from 'react'
import "./About.css"
import AboutImg from "../../assets/about.jpg"
import CV from "../../assets/Gyulinyan-CV.pdf"
import Info from './Info'
import {FileSvg} from "../../assets";

const About = () => {
    return (<section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img
                    className="about__img"
                    src={AboutImg}
                    alt=""
                />
                <div className="about__data">
                    <Info/>
                    <p className="about__description">
                        Frontend developer, I create web pages with UI / UX user interface, I have years of experience
                        and many clients are happy with the projects carried out.
                    </p>
                    <a
                        download=""
                        href={CV}
                        className="button button--flex"
                    >
                        Download CV
                        {/*<FileSvg/>*/}
                    </a>
                </div>
            </div>
        </section>)
}

export default About