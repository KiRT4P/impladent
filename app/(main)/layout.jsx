import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default async function Layout({ children }) {


    return (
        <div className="min-h-screen flex flex-col ">
            <Navbar />
            <div className="grow">
                {children}
            </div>

            <Footer />

        </div>
    )
}

