import React from 'react';
import {store} from "../../store/store";

function SkillData2() {
    return (<>
        {store.skillsData2.map(skills => {
            return (<div className="skills__data" key={skills.id}>
                <i className='bx bxs-badge-check'></i>
                <div>
                    <h3 className="skills__name">{skills.title}</h3>
                    <span className="skills__level"></span>
                </div>
            </div>)
        })}
    </>);
}

export default SkillData2;