import { HashLink } from "react-router-hash-link";

const FooterServices = () => {
    return (
        <div className="footer-links">
            <h4>Services</h4>
            <ul>
                <li><HashLink smooth to="/#services">Web Development</HashLink></li>
                <li><HashLink smooth to="/#services">Branding</HashLink></li>
                <li><HashLink smooth to="/#services">Advertising</HashLink></li>
                <li><HashLink smooth to="/#services">Video Editing</HashLink></li>
            </ul>
        </div>
    );
};

export default FooterServices;