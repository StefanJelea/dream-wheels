import * as React from "react"
import './index.scss'
import NavBar from "../../components/navbar";
import PhoneIcon from '../../images/smartphone.svg'
import MailIcon from '../../images/email.svg'
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";
import CookieConsent from "react-cookie-consent";
import UsePageData from "../../hooks/usePageData";


const ContactPage = () => {

    const {data, cars, language, setLanguage} = UsePageData()


    return (
        <div className="container-fluid contact-page-container p-0">
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Decline"
                cookieName="gatsby-gdpr-google-analytics">
                {data.cookiesPolicy}&nbsp;&nbsp;
                <a className="cookie-policy-link" href="/privacy-policy">cookie policy</a>
            </CookieConsent>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-5 page-title">
                        <h1>{data.contactUsSectionTitle}</h1>
                    </div>

                </div>
            </div>
            <div className="contact-hero-image-box mt-3">
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 text-center contact-second-section">
                        <h3>{data.contactUsTitle}</h3>
                    </div>
                    <div className="d-flex contact-ways row">
                        <div className="col-12 col-md-6 text-center">
                            <div className="contact-card-title mb-2 mb-md-3">{data.contactUsMobile}</div>
                            <div className="">
                                <img className="contact-icons" src={PhoneIcon} alt="phoneIcon"/>
                            </div>
                            <div className="contact-card-information mt-4">
                                <a href="tel:23232332">
                                    0743700700
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 text-center mb-5 mb-md-0 mt-4 mt-md-0">
                            <div className="contact-card-title mb-0 mb-md-3">{data.contactUsEmail}</div>
                            <div className="">
                                <img className="contact-icons" src={MailIcon} alt="mailIcon"/>
                            </div>
                            <div className="contact-card-information mt-4">
                                <a href="mailto:dreawheelscontact@gmail.com">
                                    dreawheelscontact@gmail.com
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <h3>{data.contactUsTitle2}</h3>
                    </div>
                    <div className="d-flex justify-content-center mt-3 mb-3 mt-md-5 mb-md-5">
                        <ContactForm/>
                    </div>
                    <div className="col-12 text-center">
                        <h3>{data.contactUsTitle3}</h3>
                    </div>
                    <div className="mapouter text-center">
                        <div className="gmap_canvas mb-5 mt-5">
                            <iframe width="400" height="250" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=%C5%9Eoseaua%20Pavel%20D.%20Kiseleff&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )

}
export default ContactPage
