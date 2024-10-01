'use server'

import nodemailer from 'nodemailer';

export async function sendEmail(custom, _, data) {

    const message = {
        email: data.get('email'),
        text: data.get('text'),
        city: custom
    }

    console.log(message);

    if (message.email === '' || message.text === '') {
        return { message: 'error', error: 'Email and text are required' }
    }

    if (message.text.length < 10) {
        console.log('Text must be at least 10 characters long');

        return {
            message: 'error', error: 'Text must be at least 10 characters long!'

        }
    }



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
        text: `${message.text} (${message.city})`,
        replyTo: message.email
    };

    try {
        // Send the email
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return { message: 'success' };
    } catch (error) {
        console.log('Error occurred:', error.message);
        return { message: 'error', error: error.message };
    }

}
