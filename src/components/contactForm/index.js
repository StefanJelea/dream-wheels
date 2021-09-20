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
            setEmailSucceeded("Thank you!")
            return true
        }

    }


    // const submitForm = (e) => {
    //     e.preventDefault();
    //     console.log(Array.from(e.target.elements))
    //     const params = {
    //         name: name,
    //         surname: surname,
    //         email: email,
    //         phoneNumber: phoneNumber,
    //         message: message,
    //     }
    //     setIsLoading(true)
    //     axios({
    //         method: 'POST',
    //         url: "https://us-central1-dreamwheelsla.cloudfunctions.net/sendContactForm",
    //         data: params,
    //     }).then(response => {
    //         setIsLoading(false);
    //         setResponse(response.data);
    //         setEmail("");
    //         setShowButton(false);
    //         console.log(response);
    //     }).catch(() => {
    //         setIsLoading(false);
    //         console.log();
    //     })
    //
    //
    //
    // }

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
                url: "https://us-central1-dreamwheelsla.cloudfunctions.net/sendContactForm",
                data: params,
            }).then(response => {
                setIsLoading(false);
                setResponse(response.data);
                setEmail("");
                setShowButton(false);


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
                    {emailSucceeded}
                    {emailError}
                </div>
                <div className="submit-button text-center">
                    <Button>Submit</Button>
                </div>
            </form>
        </div>


    )
}
ContactForm.propTypes = {
    onChange: PropTypes.func,
}

export default ContactForm
