import * as React from "react"
import './index.scss'
import Logo from '../../images/logoWhite.png'
import RoIcon from '../../images/romania.svg'
import EnIcon from '../../images/united-kingdom.svg'
import {Link} from "gatsby"
import  {localStorageSet} from "../../services/localStorageService";


const NavBar = ({data, setLanguage}) => {
    // const updateLanguage = language => {
    //     if(localStorageIsDefined()){
    //         window.localStorage.setItem('language', language)
    //     }
    //     setLanguage(language)
    // }


    const updateLanguage = language => {
        localStorageSet('language', language)
        setLanguage(language)
    }


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
                        <Link className="nav-link" to="/">{data.navbarHome}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">{data.navbarAbout}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/our-cars">{data.navbarOurCars}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">{data.navbarContact}</Link>
                    </li>
                    <li className="nav-item">
                        <a className="language-link" onClick={() => updateLanguage('ro')}>
                            <img className="flag-icon" src={RoIcon} alt=""/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="language-link" onClick={() => updateLanguage('en')}>
                            <img className="flag-icon" src={EnIcon} alt=""/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )


}


export default NavBar
