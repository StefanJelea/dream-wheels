import * as React from "react"
import './index.scss'
import Logo from '../../images/baby-car.svg'
import IconSocialFacebook from '../../images/facebook (1).svg'
import IconSocialGoogle from '../../images/google.svg'
import IconSocialInstagram from '../../images/instagram.svg'


const Footer = () => {


    return (
        <div className="footer-container container-fluid">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-12 col-md-6 text-center text-md-start mt-4">
                        <div>
                            Dream Wheels
                        </div>
                        <div>
                            <img className="logo-image" src={Logo} alt='logo'/>
                        </div>
                        <div>
                            Call us
                            <div>
                                <a href="tel:0743700700">0743700700</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto d-none d-md-block col-md-3 social-media-col mt-4">
                        <div>
                            <ul className="">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/our-cars">Our Cars</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/privacy-policy">Privacy Policy</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-12  text-center text-md-start col-md-3 social-media-col mt-4">
                        <ul>
                            <li className="social-media-li">
                                <a className="nav-link" href="mailto:jeleastefan@gmail.com" target="_blank">
                                    <img className="icon-social-media" src={IconSocialGoogle} alt=""/>
                                </a>

                            </li>
                            <li className="social-media-li">
                                <a className="nav-link" href="#" target="_blank">
                                    <img className="icon-social-media" src={IconSocialFacebook} alt=""/>
                                </a>
                            </li>
                            <li className="social-media-li">
                                <a className="nav-link" href="#" target="_blank">
                                    <img className="icon-social-media" src={IconSocialInstagram} alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 text-center mt-3 mb-3 copyright">
                        <div>Copyright &copy; 2014-{new Date().getFullYear()} Dream Wheels All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
