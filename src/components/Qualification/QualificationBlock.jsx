import React from 'react'
import "./Qualification.css"

const QualificationBlock = ({title, subtitle, text}) => {
    return (
        <div>
            <h3 className="qualification__title">{title}</h3>
            <span className="qualification__subtitle">{subtitle}</span>
            <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"/>
                {text}
            </div>
        </div>
    )
}

export default QualificationBlock