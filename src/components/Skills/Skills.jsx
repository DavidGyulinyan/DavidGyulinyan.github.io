import React from 'react';
import "./Skills.css";
import SkillsGroup from './SkillsGroup';
import SkillsGroup2 from './SkillsGroup2';

function Skills() {
    return (<section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>
        <div className="skills__container container grid">
            <SkillsGroup/>
            <SkillsGroup2/>
        </div>
    </section>)
}

export default Skills