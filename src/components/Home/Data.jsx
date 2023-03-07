import React from 'react'
import {ReactComponent as SendSvg} from "../../assets/send.svg";
import {ReactComponent as HandSvg} from "../../assets/hand.svg";

const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">
                David
                <HandSvg/>
            </h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <p className="home__description">
                Always looking to acquire new skills, take on extra responsibilities, and grow professionally.
            </p>
            <a href="#contact" className="button button--flex">
                Say Hello
                <SendSvg/>
            </a>
        </div>
    )
}

export default Data