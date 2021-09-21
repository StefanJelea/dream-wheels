import * as React from "react"
import './index.scss'
import NavBar from "../../components/navbar";
import PhoneIcon from '../../images/smartphone.svg'
import MailIcon from '../../images/email.svg'
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";


const ContactPage = () => {


    return (
        <div className="container-fluid contact-page-container p-0">
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-5 page-title">
                        <h1>Contact us</h1>
                    </div>

                </div>
            </div>
            <div className="contact-hero-image-box mt-3">
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 text-center contact-second-section">
                        <h3>If you have any questions do not hesitate to contact us</h3>
                    </div>
                    <div className="d-flex contact-ways row">
                    <div className="col-12 col-md-6 text-center">
                        <div className="contact-card-title mb-3">Phone</div>
                        <div className="">
                            <img className="contact-icons" src={PhoneIcon} alt="phoneIcon"/>
                        </div>
                        <div className="contact-card-information mt-4">
                            <a href="tel:23232332">
                        0743700700
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <div className="contact-card-title mb-3">Email</div>
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
                        <h3>or leave us a message straight here using our form</h3>
                    </div>
                    <div className="d-flex justify-content-center mt-3 mb-3 mt-md-5 mb-md-5">
                        <ContactForm/>
                    </div>
                    <div className="col-12 text-center">
                        <h3>you can find us here</h3>
                    </div>
                    <div className="mapouter text-center">
                        <div className="gmap_canvas mb-5 mt-5">
                            <iframe width="600" height="500" id="gmap_canvas"
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
