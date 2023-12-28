import React, {useState} from 'react'
import "./Qualification.css"
import Section from "../Section/Section";
import {store} from "../../store/store";
import QualificationData from "./QualificationData";

const {qualification} = store

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <Section
            id="qualification"
            title="Qualification"
        >
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    {
                        qualification.map(item => {
                            return (
                                <div
                                    key={item.id}
                                    className={toggleState === item.id ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
                                    onClick={() => toggleTab(item.id)}
                                >
                                    <i className={`uil ${item.icon_class} qualification__icon`}/>
                                    {item.title}
                                </div>
                            )
                        })
                    }
                </div>

                {
                    qualification.map(item => {
                        return (
                            <div
                                key={item.id}
                                className="qualification__sections"
                            >
                                <div
                                    className={toggleState === item.id ? "qualification__content qualification__content-active" : "qualification__content"}
                                >
                                    <QualificationData sections={item.sections}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Section>
    )
}

export default Qualification