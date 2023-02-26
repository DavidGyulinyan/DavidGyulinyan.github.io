import React from 'react';
import "./Skills.css";
import SkillsGroup from './SkillsGroup';
import {store} from "../../store/store";
import Section from "../Section/Section";

const {skills} = store;

const Skills = () => {
    return (
        <Section
            id="skills"
            title="Skills"
            subtitle="My technical level"
        >
            <div className="skills__container container grid">
                {
                    skills.map(skill => {
                        return (
                            <React.Fragment key={skill.id}>
                                <SkillsGroup skillData={skill.skillGroup}/>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </Section>
    )
}

export default Skills