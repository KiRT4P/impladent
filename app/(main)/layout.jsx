import Footer from "../components/Footer";

export default async function Layout({ children }) {


    return (
        <div>
            {children}
            <Footer />

        </div>
    )
}

