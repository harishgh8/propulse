import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
// import { WhatsappComp } from "@components/WhatsappComp";
import { WhatsappComp } from "@components/Whatsapp";
export const Layout = ({ children, className = "" }) => {
    return (
        <main
            className={`main relative overflow-hidden ${
                className && className
            }`}
        >
            <Header />
            {children}
            <Footer />

            <WhatsappComp />
        </main>
    );
};
