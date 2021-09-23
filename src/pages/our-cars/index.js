import * as React from "react"
import './index.scss'
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

import CarCard from "../../components/carCard";
import Button from "../../components/button";
import CookieConsent from "react-cookie-consent";
import UsePageData from "../../hooks/usePageData";


const OurCarsPage = () => {
    const {data, cars, language, setLanguage} = UsePageData()
    return (
        <div className="ourcars-page-container container-fluid p-0">
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
                        <h1>{data.ourCarsSectionTitle}</h1>
                    </div>

                </div>
            </div>
            <div className="ourcars-hero-image-box mt-3">
            </div>
           <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 text-center ourcars-second-section">
                    <h3>{data.ourCarsTitle} </h3>
                </div>
            </div>
               <div className="row">
                   {
                       cars?.map(( car, index) => <CarCard car={car} key={index.toString()}/>)
                   }
               </div>
               <div className="row contact-us-our-cars-page">
                   <div className="col-12 text-center align-self-center mb-5">
                       <h3>{data.ourCarsTitle2}</h3>
                       <a href="/contact">
                           <div className="mt-5">
                       <Button>{data.contactButton}</Button>
                           </div>
                       </a>
                   </div>
               </div>

           </div>
            <Footer/>
        </div>

    )

}
export default OurCarsPage
