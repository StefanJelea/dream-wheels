import * as React from "react"
import './index.scss'
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import TeamPhoto2 from '../../images/team2.jpg'
import TeamPhoto1 from '../../images/team1.jpg'
import TeamPhoto3 from '../../images/team3.jpg'
import CookieConsent from "react-cookie-consent";
import UsePageData from "../../hooks/usePageData";


const AboutPage = () => {
    const {data, cars, language, setLanguage} = UsePageData()


    return (
        <div className="container-fluid about-page-container p-0">
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Decline"
                cookieName="gatsby-gdpr-google-analytics">
                {data.cookiesPolicy}&nbsp;&nbsp;
                <a className="cookie-policy-link" href="/privacy-policy">cookie policy</a>
            </CookieConsent>
            <NavBar language={language} setLanguage={setLanguage} data={data}/>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-5 page-title">
                        <h1>{data.aboutUsSectionTitle}</h1>
                    </div>
                </div>
            </div>
            <div className="about-hero-image-box mt-3">
            </div>
            <div className="container">
            <div className="row about-us-row mt-5">
                <div className="col-12 col-md-6 text-center">
                    <div className="about-us-title mb-3">
                        <h3>
                            {data.aboutUsTitle}
                        </h3>

                    </div>
                    <div className="about-us-description mb-4 mb-md-0">
                        {data.aboutUsDescription}
                    </div>
                </div>
                <div className="col-6 d-none d-md-block"></div>
                <div className="col-6 d-none d-md-block"></div>

                <div className="col-12 col-md-6 text-center">
                    <div className="about-us-title mb-3">
                        <h3> {data.aboutUsTitle2}</h3>

                    </div>
                    <div className="about-us-description">
                        {data.aboutUsDescription2}
                    </div>
                </div>

            </div>
                <div className="row team-row mt-3 mt-md-5 text-center">
                    <div className="col-12 text-center mb-5 mt-5">
                        <div>
                            <h3>{data.aboutUsTitle3}</h3>
                        </div>

                    </div>
                    <div className="col-12 col-md-4 team-profile-col mb-5">
                        <div className="team-test">
                            <img className="team-profile-img" src={TeamPhoto1} alt="team1"/>
                        </div>
                        <div className="team-name mt-4">
                            Richie Erickson
                        </div>
                        <div className="team-position mb-4">
                            Sales Director
                        </div>
                    </div>
                    <div className="col-12 col-md-4 team-profile-col mb-5">
                        <div className="team-test">
                            <img className="team-profile-img" src={TeamPhoto2} alt="team2"/>
                        </div>
                        <div className="team-name mt-4">
                            Aarron Whittington
                        </div>
                        <div className="team-position mb-4">
                            Founder
                        </div>
                    </div>
                    <div className="col-12 col-md-4 team-profile-col mb-5">
                        <div className="team-test">
                            <img className="team-profile-img" src={TeamPhoto3} alt="team3"/>
                        </div>
                        <div className="team-name mt-4">
                            Bilaal Bravo
                        </div>
                        <div className="team-position mb-4">
                           Logistic
                        </div>
                    </div>
                </div>
                </div>
            <Footer/>
        </div>

    )

}
export default AboutPage
