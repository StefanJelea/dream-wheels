import * as React from "react"
import './index.scss'
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import {useEffect, useState} from "react";
import axios from "axios";
import CarCard from "../../components/carCard";
import Button from "../../components/button";


const OurCarsPage = () => {

    const [cars1, setCars1] = useState([])


    useEffect(() => {
        axios.get('/axios-json-data/cars.json').then(response => {
            setCars1(response.data)
            console.log(response)
        })
    }, [])
    return (
        <div className="ourcars-page-container container-fluid p-0">
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-5 page-title">
                        <h1>Our Cars</h1>
                    </div>

                </div>
            </div>
            <div className="ourcars-hero-image-box mt-3">
            </div>
           <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 text-center ourcars-second-section">
                    <h3>See our car stock with immediate delivery </h3>
                </div>
            </div>
               <div className="row">
                   {
                       cars1?.map(( car, index) => <CarCard car={car} key={index.toString()}/>)
                   }
               </div>
               <div className="row contact-us-our-cars-page">
                   <div className="col-12 text-center align-self-center mb-5">
                       <h3>See the car of your dreams ? Contact us right now for more details</h3>
                       <a href="/contact">
                           <div className="mt-5">
                       <Button>Contact us</Button>
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
