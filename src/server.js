const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(8000, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "dreawheelscontact@gmail.com",
        pass: "dreamwheels12",
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});


router.post("/", (req, res) => {
    const mail = {
        from: name,
        to: "stefan.mountsoftware.test@gmail.com",
        subject: "Contact Form Submission",
        html: `
              <h1>Dream Wheels Contact Form</h1>
            <h3>Client Email: ${req.body.email}</h3>
           `,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({status: "ERROR"});
        } else {
            res.json({status: "Message Sent"});
        }
    });
});
