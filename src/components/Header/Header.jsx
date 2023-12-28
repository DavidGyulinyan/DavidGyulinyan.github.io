import React, {useState, useEffect} from 'react'
import "./Header.css"
import {store} from "../../store/store";

const {menus} = store

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")
    const [headerClass, setHeaderClass] = useState("");

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY >= 560) setHeaderClass("scroll-header")
            else setHeaderClass("")
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <header className={`header ${headerClass}`}>
            <nav className="nav container">
                <a href="/" className="nav__logo">Davit</a>

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