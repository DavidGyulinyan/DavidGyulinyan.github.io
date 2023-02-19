import React, {useState} from 'react'
import "./Header.css"
import {store} from "../../store/store";

const Header = () => {

    /* Toggle Menu */

    const [showMenu, setShowMenu] = useState(false)


    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">David</a>

                <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {
                            store.menus.map(menu => {
                                return (
                                    <li key={menu.id} className="nav__item">
                                        <a href={menu.page} className="nav__link">
                                            {menu.Icon}
                                            {menu.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => setShowMenu(!showMenu)}/>
                </div>

                <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
                    <i className="uil uil-apps"/>
                </div>
            </nav>

        </header>
    )
}

export default Header