import React from 'react'
import {store} from "../../store/store";


const {infos} = store

function Info() {
    return (
        <div className="about__info grid">
            {
                infos.map(info => {
                    return (
                        <div key={info.id} className="about__box">
                            {info.Icon}
                            <h3 className="about__title">{info.title}</h3>
                            <span className="about__subtitle">{info.sub_title}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Info