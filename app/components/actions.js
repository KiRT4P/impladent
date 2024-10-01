'use server'
import nodemailer from 'nodemailer';


export async function sendEmail(data) {
    const message = Object.fromEntries(data);
    console.log(message);

    const transporter = nodemailer.createTransport({
        host: 'mail.digitalpeak.sk',
        auth: {
            user: 'automation@digitalpeak.sk',
            pass: 'Dhg=3xEzpt538es'
        }
    });

    // Define email options
    const mailOptions = {
        from: 'Impladent Web <automation@digitalpeak.sk>',
        to: 'timkopatrik8@gmail.com',
        subject: `Správa od ${message.email}`,
        text: `${message.text}`,
        replyTo: message.email
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error.message);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}
