import * as React from "react"
import axios from "axios";
import {useEffect, useState} from "react";
import NavBar from "../components/navbar";
import './index.scss'
import '../styles.scss'
import Footer from "../components/footer";
import InformationCard from "../components/informationCard";
import CarCard from "../components/carCard";
import Button from "../components/button";
import CookieConsent from "react-cookie-consent";


export const IndexPage = () => {

    const [data, setData] = useState({})
    const [cars, setCars] = useState([])




    useEffect(() => {
        axios.get('/axios-json-data/index.json').then(response => {
            setData(response.data)
        })
        axios.get('/axios-json-data/cars.json').then(response => {
            setCars(response.data)
        })
    }, [])


    console.log(data, 'test')


    return (
        <main>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Decline"
                cookieName="gatsby-gdpr-google-analytics">
                {data.cookiesPolicy}
                <a href="/privacy-policy">Cookie Policy</a>
            </CookieConsent>
            <NavBar/>
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
                    {/*<div className="row about-home-page-row mt-3 mt-md-5">*/}
                    {/*    <div className="col-12 text-center mb-5 mt-5 cars-preview-title">*/}
                    {/*        <h2>Dream wheels team makes your dreams come true  </h2>*/}
                    {/*    </div>*/}
                    {/*    <div className="text-center">*/}
                    {/*        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.*/}
                    {/*    </div>*/}
                    {/*    <div className="text-center mt-5">*/}
                    {/*        <a href="/about">*/}
                    {/*            <Button>About us</Button>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="row">
                    <div className="col-12 text-center mb-5 mt-5 cars-preview-title">
                        <h2>Cars Available Right Now </h2>
                    </div>

                    </div>
                    <div className="row">
                        {
                            cars?.sort( () => .5 - Math.random() ).splice(0,3).map((car, index) => <CarCard  car={car} key={index.toString()}/>)
                        }
                        <div className="col-12 text-center mt-5 mb-5 mb-md-0">
                            <a href='/our-cars'>
                                <Button>View all cars</Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container container-about">
                    <div className="row">
                    <div className="d-flex col-12  col-md-6 home-page-description">
                        <InformationCard title={data.cardDescriptionTitle} description={data.cardDescription} buttonText={'Find a car'} urlPath="/our-cars"/>
                    </div>
                    <div className="d-flex col-12 col-md-6 home-page-description">
                        <InformationCard title={data.cardDescriptionTitleSecond} description={data.cardDescriptionSecond} buttonText={'Contact us'} urlPath="/contact"/>
                    </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </main>
    )
}

export default IndexPage
