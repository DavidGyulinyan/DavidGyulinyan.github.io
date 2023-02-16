import React from 'react'

function Info() {
    return (
        <div className="about__info grid">

            <div className="about__box">
                <i className="uil uil-award-alt about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">2 Years Working</span>
            </div>

            <div className="about__box">
                <i className="uil uil-briefcase-alt about__icon"></i>
                <h3 className="about__title">Complited</h3>
                <span className="about__subtitle">13 + Projects</span>
            </div>

            <div className="about__box">
                <i className="uil uil-envelope-question about__icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info