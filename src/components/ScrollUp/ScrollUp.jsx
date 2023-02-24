import React, {useState, useEffect} from 'react';
import "./ScrollUp.css"

function ScrollUp() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 560) setShowScroll(true)
            else setShowScroll(false)
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <>
            {
                showScroll && (
                    <button className={`scrollup ${showScroll ? "show-scroll" : ""}`} onClick={handleClick}>
                        <i className="uil uil-arrow-up scrollup__icon"></i>
                    </button>
                )
            }
        </>
    );
}

export default ScrollUp;
