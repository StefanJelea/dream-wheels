import * as React from "react"
import * as axios from "axios";
import './index.scss'
import Button from "../button";
import {useState} from "react";
import PropTypes from "prop-types";


const ContactForm = ({onChange, ...props}) => {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState("")
    const [showSendMessage, setShowSendMessage] = useState(false)


    const [nameError, setNameError] = useState("")
    const [surnameError, setSurnameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('')
    const [messageError, setMessageError] = useState('')
    const [showButton, setShowButton] = useState(true)
    const [emailSucceeded, setEmailSucceeded] = useState("")


    const validateForm = () => {
        if (email === "") {
            setEmailError("Invalid Email!")
            setEmailSucceeded(null)
            return false
        } else {
            setEmailError(null)
            setEmailSucceeded("Thank you! Our team will contact you soon.")
            return true
        }

    }


    const submitForm = (e) => {
        console.log('testSubmit')
        e.preventDefault();
        const isValid = validateForm()
        if (isValid) {
            console.log(Array.from(e.target.elements))
            const params = {
                name: name,
                surname: surname,
                email: email,
                phoneNumber: phoneNumber,
                message: message,
            }

            setIsLoading(true)
            axios({
                method: "post",
                url: "https://us-central1-dreamwheels-105bd.cloudfunctions.net/sendContactForm",
                data: params,
            }).then(response => {
                setIsLoading(false);
                setResponse(response.data);
                setEmail("");
                setShowButton(false);
                setShowSendMessage(true);


                console.log(response);
            }).catch(() => {
                setIsLoading(false);
                console.log();
            })

        }


    };


    return (
        <div className="form-contact-form">
            <form className="d-flex flex-column" onSubmit={submitForm}>
                <input id="name" name={name} value={name} onChange={e => setName(e.target.value)} placeholder="Name"
                       type="name"/>
                <input id="surname" name={surname} value={surname} onChange={e => setSurname(e.target.value)}
                       placeholder="Surname" type="surname"/>
                <input id="email" name={email} value={email} onChange={e => setEmail(e.target.value)}
                       placeholder="Email"
                       type="email"/>
                <input id="phoneNumber" name={phoneNumber} value={phoneNumber}
                       onChange={e => setPhoneNumber(e.target.value)}
                       placeholder="Phone Number"
                       type="phoneNumber"/>
                <textarea id="Message" name={message} value={message} onChange={e => setMessage(e.target.value)}
                          placeholder="Type your message here" type="message"/>
                <div className="alert">

                    {emailError}
                </div>
                <div className="submit-button text-center">
                    {showButton && <Button type="submit" disabled={isLoading}>
                        {!isLoading && "Send"}
                        {isLoading && <div className="loading-button-animation d-flex align-items-center">
                            <div className="d-flex loading-button text-center"></div>
                            <div className="">Loading</div>
                        </div>}
                    </Button>}
                </div>
                {showSendMessage &&
                <div className="text-center email-succeeded-message">
                    {emailSucceeded}
                </div>
                    }
            </form>
        </div>


    )
}
ContactForm.propTypes = {
    onChange: PropTypes.func,
}

export default ContactForm
