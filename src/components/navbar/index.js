import * as React from "react"
import './index.scss'
import Logo from '../../images/logoWhite.png'
import RoIcon from '../../images/romania.svg'
import EnIcon from '../../images/united-kingdom.svg'


const NavBar = ({ data, setLanguage}) => {



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img className="logo-image" src={Logo} alt=""/>
            </a>
            <button className="navbar-toggler justify-content-end" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse  navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">{data.navbarHome}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">{data.navbarAbout}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/our-cars">{data.navbarOurCars}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">{data.navbarContact}</a>
                    </li>
                    <li className="nav-item">
                        <a className="language-link" onClick={() => setLanguage('ro')}>
                            <img className="flag-icon" src={RoIcon} alt=""/>
                            RO
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="language-link" onClick={() => setLanguage('en')}>
                            <img className="flag-icon" src={EnIcon} alt=""/>

                            EN
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
    )


}


export default NavBar
