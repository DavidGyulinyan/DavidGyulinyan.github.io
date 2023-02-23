import React, {useState} from 'react'
import "./Qualification.css"

function Qualification() {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (<section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey
            </span>

            <div className="qualification__container container">
                <div className="qualification__tabs">

                    <div
                        className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}

                        onClick={() => toggleTab(1)}
                    >

                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div
                        className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}

                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>


                        {/*//////////////////// Qualification Data 1*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Yerevan Haybusak University</h3>
                                <span className="qualification__subtitle">Bachelor's degree</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2012 - 2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/*//////////////////// Qualification Data 2*/}
                        <div className="qualification__data">
                            <div></div>


                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Marketing Manager</h3>
                                <span className="qualification__subtitle">Eargir IT Center</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021/06 - 2021/12
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        {/*//////////////////// Qualification Data 3*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Habusak College</h3>
                                <span className="qualification__subtitle">Tech Engineering</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2009 - 2012
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/*//////////////////// Qualification Data 4*/}

                        <div className="qualification__data">
                            <div></div>


                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">Phenix Corporation</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2022/01 - Present
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>)
}

export default Qualification