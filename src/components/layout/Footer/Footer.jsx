import "./footer.css";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";
import FooterContact from "./FooterContact";


const Footer = () => {
    const phone = "+918218749995"; // no +
    return (
        <footer className="footer">
            <a
                className="whatsapp-float"
                href={`https://wa.me/${phone}?text=${encodeURIComponent(
                    "Hi DevBoomi Team, I want to know more about your services."
                )}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
            >
                <img className="wa-img" src="/icons/whatsApp.png" alt="WhatsApp" />
            </a>

            <div className="footer-container">
                <FooterBrand />
                <FooterLinks />
                <FooterServices />
                <FooterContact />
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Devbhoomi Edits. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;