import "./footer.css";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";
import FooterContact from "./FooterContact";

const Footer = () => {
    return (
        <footer className="footer">
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