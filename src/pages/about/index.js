import * as React from "react"
import './index.scss'
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import TeamPhoto2 from '../../images/team2.jpg'
import TeamPhoto1 from '../../images/team1.jpg'
import TeamPhoto3 from '../../images/team3.jpg'


const AboutPage = () => {


    return (
        <div className="container-fluid about-page-container p-0">
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-5 page-title">
                        <h1>About us</h1>
                    </div>
                </div>
            </div>
            <div className="about-hero-image-box mt-3">
            </div>
            <div className="container">
            <div className="row about-us-row mt-5">
                <div className="col-12 col-md-6 text-center">
                    <div className="about-us-title mb-3">
                        <h3> Who we are</h3>

                    </div>
                    <div className="about-us-description mb-4 mb-md-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum
                    </div>
                </div>
                <div className="col-6 d-none d-md-block"></div>
                <div className="col-6 d-none d-md-block"></div>

                <div className="col-12 col-md-6 text-center">
                    <div className="about-us-title mb-3">
                        <h3> Our story</h3>

                    </div>
                    <div className="about-us-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum
                    </div>
                </div>

            </div>
                <div className="row team-row mt-3 mt-md-5 text-center">
                    <div className="col-12 text-center mb-5 mt-5">
                        <div>
                            <h3>Our team</h3>
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
