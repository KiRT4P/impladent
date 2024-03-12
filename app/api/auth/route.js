
import connection from "@/app/api/DBconnection.js";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';


const generateRandomPassword = () => {
    const length = 8;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export async function POST(request) {
    const { email } = await request.json();

    try {
        const password = generateRandomPassword();
        const hashedPassword = await hashPassword(password);

        const [users] = await connection.query("SELECT email FROM user");
        const emails = users.map(user => user.email);
        if (emails.includes(email)) {
            return NextResponse.json({ message: "Tento používateľ už existuje!" }, { status: 400 });
        }

        // Save the email and hashed password to your database or perform any other necessary operations
        await connection.query("INSERT INTO user (email, password) VALUES (?, ?)", [email, hashedPassword]);

        // Send email to the user with the generated password
        const transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: 'kirt4p.automation@outlook.com',
                pass: 'Dhg=3xEz'
            }
        });

        const mailOptions = {
            from: 'Impladent Web <kirt4p.automation@outlook.com>',
            to: email,
            subject: 'Bol Vám vytvorený účet na stránke impladent.sk',
            text: `Dobrý deň \n\nBol Vám vytvorený účet na stránke impladent.sk\nPrihlásiť sa môžete na linku www.impladent.sk/admin \n\n Vaše prihlasovacie údaje sú: \n\n\tEmail: ${email} \n\tHeslo: ${password} \n\n Heslo si zmente ho po prvom prihlásení!  \n\n Tento email bol vygenerovaný automaticky, prosím neodpovedajte naňho. \n`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {

                console.log('Error sending email:', error);
                return NextResponse.json({ message: error }, { status: 500 },);
            } else {
                console.log("odosielam response");
                return NextResponse.json({ status: 200 });
            }
        });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ message: "Nastala chyba pri vytváraní nového používateľa" }, { status: 500 });
    }


}


export async function DELETE(request) {
    const { email } = await request.json();
    if (email === "timkopatrik8@gmail.com" || email === "walid2727@gmail.com" || email === "*") {
        return NextResponse.json({ status: 500 });
    }
    try {
        await connection.query("DELETE FROM user WHERE email = ?", [email]);
        return NextResponse.json({ status: 200 });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ status: 500 });
    }
}