import React, {useState} from 'react'
import "./Header.css"
import {store} from "../../store/store";

const {menus} = store

const Header = () => {

    /*Change Background Header*/
    window.addEventListener("scroll", function () {
            const header = document.querySelector(".header");
            if (this.scrollY >= 560) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header")
        }
    )

    /* Toggle Menu */
    const [showMenu, setShowMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")

    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">David</a>

                <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {
                            menus.map(menu => {
                                return (
                                    <li key={menu.id} className="nav__item">
                                        <a
                                            href={menu.page}
                                            onClick={() => setActiveNav(`${menu.activeNav}`)}
                                            className={
                                                activeNav === `${menu.activeNav}`
                                                    ? "nav__link active-link"
                                                    : "nav__link"
                                            }
                                        >
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