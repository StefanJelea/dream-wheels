import * as React from "react"
import './index.scss'
import NavBar from "../../components/navbar";
import AboutCoverImage from '../../images/aboutPageCoverPicture.jpg'


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
           </div>

    )

}
export default AboutPage
