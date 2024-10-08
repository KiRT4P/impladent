import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default async function Layout({ children }) {


    return (
        <div>
            <Navbar />
            {children}
            <Footer />

        </div>
    )
}

