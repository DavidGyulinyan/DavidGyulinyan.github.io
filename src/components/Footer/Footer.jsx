import React from 'react';
import "./Footer.css";
import {store} from "../../store/store";


function Footer() {
    return (<footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">David</h1>

            <ul className="footer__list">

                {
                    store.footerMenuItems.map(items => {
                        return (
                            <li key={items.id}>
                                <a href="#about" className="footer__link">{items.title}</a>
                            </li>
                        )
                    })
                }


            </ul>

            <div className="footer__social">
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

            <span className="footer__copy">
                &#169; Crypticalcoder. All rigths reserved
            </span>
        </div>
    </footer>);
}

export default Footer;