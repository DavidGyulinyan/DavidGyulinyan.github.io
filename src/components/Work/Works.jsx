import React, {useEffect, useState} from 'react';
import {store} from "../../store/store";
import WorkItems from "./WorkItems";

function Works() {
    const [item, setItem] = useState({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(1);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(store.projectsData)
        } else {
            const newProjects = store.projectsData.filter(project => {
                return project.category === item.name;
            });
            setProjects(newProjects)
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent});
        setActive(index);
    }

    return (
        <>
            <div className="work__filters">
                {
                    store.projectsNav.map((item, index) => {
                        return (
                            <span
                                onClick={e => handleClick(e, item.id)}
                                className={`${active === item.id ? 'active-work' : " "} work__item`}
                                key={item.id}
                            >
                                {item.name}
                            </span>
                        )
                    })
                }
            </div>
            <div className="work__container container grid">
                {
                    projects.map(item => <WorkItems item={item} key={item.id}/>)
                }
            </div>
        </>
    );
}

export default Works;