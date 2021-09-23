import * as React from "react"
import './index.scss'
import Button from "../button";
import InformationCard from "../informationCard";


const CarCard = ({data ,car, buttonTextCarCard, urlPathCarCard}) => {


    return (

        <div className="col-12 col-md-4 mb-5">
            <div style={{backgroundImage: `url(${car?.img})`}} className="text-center img-card-col">
            </div>
            <div className="car-card-information"><b>{data.cardCardMake}:</b>&nbsp;{car?.make}</div>
            <div className="car-card-information"><b>{data.cardCardModel}:</b>&nbsp;{car?.model}</div>
            <div className="car-card-information"><b>{data.cardCardYear}:</b>&nbsp;{car?.year}</div>
            <div className="car-card-information"><b>{data.cardCardMileage}:</b>&nbsp;{car?.mileage}</div>
            <div className="car-card-information"><b>{data.cardCardCountry}:</b>&nbsp;{car?.country}</div>
            <div className="car-card-information"><b>{data.cardCardPrice}:</b>&nbsp;{car?.price}</div>
        </div>
    )
}
export default CarCard
