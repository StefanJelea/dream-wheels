import * as React from "react"
import './index.scss'
import Button from "../button";


const InformationCard = ({title, description, buttonText, urlPath}) => {

    return (
        <div className="d-flex information-card-container align-items-center justify-content-center">
            <div className="information-card-box">
            <h2 className="information-card-box-title">{title}</h2>
            <div className="information-card-box-description">{description}</div>
                <div className="mt-4">
                    <a href={urlPath}>
                    <Button>{buttonText}</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default InformationCard
