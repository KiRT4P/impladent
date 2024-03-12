import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Impladent",
  description: "Vaša zubná klinika v centre Košíc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={openSans.className} >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
