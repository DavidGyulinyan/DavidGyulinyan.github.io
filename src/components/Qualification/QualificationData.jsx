import React from 'react'
import "./Qualification.css"
import RounderLine from "./RounderLine";
import QualificationBlock from "./QualificationBlock";

const QualificationData = ({sections}) => {
    return (
        <div className="qualification__data">
            {
                sections.map(section => {
                    return (
                        <React.Fragment key={section.id}>
                            {
                                section.subject === "education"
                                    ?
                                    <>
                                        <div></div>
                                        <RounderLine/>
                                        <QualificationBlock
                                            title={section.title}
                                            subtitle={section.subtitle}
                                            text={section.text}
                                        />
                                    </>
                                    :
                                    <>
                                        <QualificationBlock
                                            title={section.title}
                                            subtitle={section.subtitle}
                                            text={section.text}
                                        />
                                        <RounderLine/>
                                        <div></div>
                                    </>
                            }

                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default QualificationData