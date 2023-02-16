import React from 'react'

function Social() {
    return (
        <div className="home__social">
            <a href="https://www.facebook.com/profile.php?id=100078521269142" className="home__social-icon" target="_blank">
            <i className="uil uil-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/david-gyulinyan-9834ab215/" className="home__social-icon" target="_blank">
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://github.com/DavidGyulinyan?tab=repositories" className="home__social-icon" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    )
}

export default Social