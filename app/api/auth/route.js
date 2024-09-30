
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

export async function POST(request, res) {
    const { email, password } = await request.json();
    const session = await getServerSession(request, res)

    if (!session) {
        res.status(401).json({ message: "You must be logged in." })
        return
    }
    try {
        const hashedPassword = await hashPassword(password);

        const [users] = await connection.query("SELECT email FROM user");
        const emails = users.map(user => user.email);
        if (emails.includes(email)) {
            return NextResponse.json({ message: "Tento používateľ už existuje!" }, { status: 400 });
        }

        await connection.query("INSERT INTO user (email, password) VALUES (?, ?)", [email, hashedPassword]);

        return NextResponse.json({ message: "Používateľ bol úspešne vytvorený" }, { status: 200 });

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