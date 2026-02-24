import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* BRAND */}
                <div className="footer-brand">
                    <h3>Devbhoomi Edits</h3>
                    <p>
                        A registered MSME creative studio specializing in
                        web development, branding, advertising, and
                        cinematic content creation.
                    </p>

                    <div className="footer-msme">
                        <strong>MSME Registered</strong>
                        <span>UDYAM-UK-08-0016405</span>
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* SERVICES */}
                <div className="footer-links">
                    <h4>Services</h4>
                    <ul>
                        <li>Web Development</li>
                        <li>Branding</li>
                        <li>Advertising</li>
                        <li>Video Editing</li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>Email: amankukreti95@gmail.com</p>
                    <p>Location: Uttarakhand, India</p>
                    <p>Phone: +91 8218749995</p>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="footer-bottom">
                © {new Date().getFullYear()} Devbhoomi Edits. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;