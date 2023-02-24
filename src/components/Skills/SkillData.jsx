import React from 'react';

const SkillData = ({skills}) => {
    return (
        <>
            {
                skills.map(skill => {
                    return (
                        <div className="skills__data" key={skill.id}>
                            <i className='bx bxs-badge-check'/>
                            <div>
                                <h3 className="skills__name">{skill.title}</h3>
                                <span className="skills__level"/>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default SkillData;