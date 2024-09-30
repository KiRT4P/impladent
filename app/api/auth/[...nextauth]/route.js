import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt"


import connection from "@/app/api/DBconnection.js";

const handler = NextAuth({
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "E-mail", type: "email" },
                password: { label: "Password", type: "password" }
            },


            async authorize(credentials, req) {
                try {
                    const { email, password } = credentials;
                    const [rows] = await connection.execute('SELECT * FROM user WHERE email = ?', [email]);
                    let user = rows[0];
                    // console.log(await bcrypt.compare('  ', user.password));
                    console.log(user);
                    if (user && await bcrypt.compare(password, user.password)) {
                        return user;
                    } else {
                        console.log("fail");
                        return null;
                    }
                } catch (error) {
                    console.error(error);
                    return null;
                }
            }
        })
    ],
    theme: {
        colorScheme: "light", // "auto" | "dark" | "light"
        brandColor: "#46B8BD", // Hex color code
        logo: "../../logo_nav.png", // Absolute URL to image
    },
    callbacks: {
        async jwt({ token, account, profile }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.id = account.providerAccountId
            }
            return token
        }
    }

})




export { handler as GET, handler as POST }