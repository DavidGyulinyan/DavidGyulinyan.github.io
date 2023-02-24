import React from 'react';
import "./Skills.css";
import SkillsGroup from './SkillsGroup';
import {store} from "../../store/store";

const {skills} = store;

function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                {
                    skills.map(skill => {
                        console.log(skill, "skill")
                        return (
                            <React.Fragment key={skill.id}>
                                <SkillsGroup skillData={skill.skillGroup}/>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Skills