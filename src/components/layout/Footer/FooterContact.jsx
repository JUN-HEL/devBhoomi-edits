const FooterContact = () => {
    return (
        <div className="footer-contact">
            <h4>Contact</h4>

            <p>
                Email:{" "}
                <a href="mailto:amankukreti95@gmail.com">amankukreti95@gmail.com</a>
            </p>

            <p>
                Phone:{" "}
                <a href="tel:+918218749995">+91 8218749995</a>
            </p>

            <p>
                Location:{" "}
                <a
                    href="https://www.google.com/maps/search/?api=1&query=Uttarakhand%2C%20India"
                    target="_blank"
                    rel="noreferrer"
                >
                    Uttarakhand, India
                </a>
            </p>

            <div className="footer-socials">
                <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
        </div>
    );
};

export default FooterContact;