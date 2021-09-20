const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

admin.initializeApp();

/**
 * Here we're using Gmail to send
 */
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dreawheelscontact@gmail.com',
        pass: 'dreamwheels12'
    }
});


exports.sendContactForm = functions.https.onRequest(async (req, res) => {


    try {
        if (isCorsOptionRequest(req, res)) {

        } else {
            if (req.method === "POST") {

                if (!req.body.email) {
                    return res.status(400).send("Missing email!")
                }
                if (!req.body.message) {
                    return res.status(400).send("Missing email!")
                }

                const toEmail = 'jeleastefan@gmail.com';

                const html = `
            <h1>Dream Wheels Contact Form</h1>
            <h3>Client Name: ${req.body.name}</h3>
            <h3>Client Surname: ${req.body.surname}</h3>
            <h3>Client Email: ${req.body.email}</h3>
            <h3>Client Phone Number: ${req.body.phoneNumber}</h3>
            <p>Client Message: ${req.body.message}</p>`

                const mailOptions = {
                    from: 'Contact Form <dreawheelscontact@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
                    to: toEmail,
                    subject: 'Contact form message: ' + req.body.email, // email subject
                    html: html
                };

                // returning result
                return transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return res.send(error.toString());
                    }
                    return res.send('Sent');
                });

            }
        }


    } catch (e) {
        console.log(e);
        return res.send("Failed")
    }


});

const isCorsOptionRequest = (req, resp) => {
    resp.set('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
        resp.set('Access-Control-Allow-Methods', 'GET');
        resp.set('Access-Control-Allow-Headers', 'Content-Type');
        resp.set('Access-Control-Max-Age', '3600');
        return true;
    }

    return false;
};

