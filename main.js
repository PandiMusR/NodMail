require('dotenv').config();

const express = require('express');
const { createTransport } = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3050;

app.use(bodyParser.urlencoded({ extended: true }));

const transporter = createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

app.get('/', (req, res) => {
    res.send(`
        <form action="/sendmail" method="post">
            <input type="text" name="fromEmail" placeholder="From Email"><br>
            <input type="text" name="toEmail" placeholder="To Email"><br>
            <input type="text" name="subject" placeholder="Subject"><br>
            <textarea name="text" placeholder="Email body"></textarea><br>
            <button type="submit">Send Email</button>
        </form>
    `);
});

app.post('/sendmail', (req, res) => {
    const mailOptions = {
        from: req.body.fromEmail,
        to: req.body.toEmail,
        subject: req.body.subject,
        text: req.body.text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});