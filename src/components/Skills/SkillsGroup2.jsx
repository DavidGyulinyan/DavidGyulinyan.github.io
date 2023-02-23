import React from 'react';
import SkillData2 from "./SkillData2";
import SkillSystem2 from "./SkillSystem2";

function SkillsGroup2() {
    return (<div className="skills__content">
        <div className="skills__box">
            <div className="skills__group">
                <SkillData2/>
            </div>
            <div className="skills__group">
                <SkillSystem2/>
            </div>
        </div>

    </div>)
}

export default SkillsGroup2;