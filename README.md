# Email Sender Web Application

This is a simple web application built with Express.js and Nodemailer. It provides a form where users can input email details (from, to, subject, and body) and send an email by submitting the form.

## Setup

1. Clone this repository to your local machine.
2. Run `npm install` to install the necessary dependencies.
3. Create a `.env` file in the root of your project and add your SMTP server details:

    ```env
    MAIL_HOST=your-smtp-server.com
    MAIL_PORT=your-smtp-port
    MAIL_USER=your-email@example.com
    MAIL_PASS=your-email-password
    ```

4. Start the server by running `node main.js`.

## Usage

Navigate to `http://localhost:3050` in your web browser. You will see a form where you can input the following details:

- From Email: The email address that the email will be sent from.
- To Email: The email address that the email will be sent to.
- Subject: The subject of the email.
- Email body: The body of the email.

After filling out the form, click the "Send Email" button to send the email. If the email is sent successfully, you will be redirected to a success page.