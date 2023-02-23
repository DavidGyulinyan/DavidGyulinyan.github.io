import React from 'react'
import {store} from "../../store/store";

const Social = () => {
    return (
        <div className="home__social">
            {store.socials.map(social => {
                return (<a
                        key={social.id}
                        href={social.href}
                        className="home__social-icon"
                        rel="noreferrer"
                        target="_blank"
                    >
                        {social.Icon}
                    </a>)
            })}
        </div>
    )
}

export default Social