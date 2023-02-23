import React from 'react';
import SkillData from "./SkillData";
import SkillSystem from "./SkillSystem";

function SkillsGroup() {
    return (<div className="skills__content">
        <div className="skills__box">
            <div className="skills__group">
                <SkillData/>
            </div>
            <div className="skills__group">
                <SkillSystem/>
            </div>
        </div>

    </div>)
}

export default SkillsGroup;