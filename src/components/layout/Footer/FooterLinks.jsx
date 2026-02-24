import { Link } from "react-router-dom";

const FooterLinks = () => {
    return (
        <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default FooterLinks;