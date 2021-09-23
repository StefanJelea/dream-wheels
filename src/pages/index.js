import * as React from "react"
import NavBar from "../components/navbar";
import './index.scss'
import '../styles.scss'
import Footer from "../components/footer";
import InformationCard from "../components/informationCard";
import CarCard from "../components/carCard";
import Button from "../components/button";
import CookieConsent from "react-cookie-consent";
import UsePageData from "../hooks/usePageData";


export const IndexPage = () => {


const {data, cars, language, setLanguage} = UsePageData()


    return (
        <main>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Decline"
                cookieName="gatsby-gdpr-google-analytics">
                {data.cookiesPolicy}&nbsp;&nbsp;
                <a className="cookie-policy-link" href="/privacy-policy">cookie policy</a>
            </CookieConsent>
            <NavBar language={language} setLanguage={setLanguage} data={data}/>
            <div className="container-fluid p-0 w-100 h-100">
                <div className="hero-image-box">
                    <div className="hero-text-box d-flex text-center align-items-center justify-content-center">
                        <div>
                        <h1>{data.title}</h1>
                        <h2>{data.subtitle}</h2>
                        </div>
                    </div>
                </div>
                <div className="container cars-preview-container">
                    <div className="row">
                    <div className="col-12 text-center mb-5 mt-5 cars-preview-title">
                        <h2>{data.cardDescriptionTitle2}</h2>
                    </div>

                    </div>
                    <div className="row">
                        {
                            cars?.sort( () => .5 - Math.random() ).splice(0,3).map((car, index) => <CarCard data={data}  car={car} key={index.toString()}/>)
                        }
                        <div className="col-12 text-center mt-5 mb-5 mb-md-0">
                            <a href='/our-cars'>
                                <Button>{data.viewAllCarButton}</Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container container-about">
                    <div className="row">
                    <div className="d-flex col-12  col-md-6 home-page-description">
                        <InformationCard title={data.cardDescriptionTitle} description={data.cardDescription} buttonText={data.findCarButton} urlPath="/our-cars"/>
                    </div>
                    <div className="d-flex col-12 col-md-6 home-page-description">
                        <InformationCard title={data.cardDescriptionTitleSecond} description={data.cardDescriptionSecond} buttonText={data.contactButton} urlPath="/contact"/>
                    </div>
                    </div>
                </div>
                <Footer data={data}/>
            </div>
        </main>
    )
}

export default IndexPage
