import React from 'react';
import SkillData from "./SkillData";

function SkillsGroup({skillData}) {
    return (
        <div className="skills__content">
            <div className="skills__box">
                {
                    skillData.map(skill => {
                        return (
                            <div
                                key={skill.id}
                                className="skills__group"
                            >
                                <SkillData skills={skill.data}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SkillsGroup;