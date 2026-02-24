import "../../styles/contact/contact.typography.css";

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <p className="contact-script">Get In Touch</p>

            <h2 className="contact-title">
                LET’S BUILD SOMETHING <span>GREAT</span>
            </h2>

            <p className="contact-subtitle">
                Have a project in mind? Want to collaborate? Fill out the form and let’s
                create something amazing together.
            </p>

            <div className="contact-details">
                <p>
                    <strong>Email:</strong> hello@devboomi.com
                </p>
                <p>
                    <strong>Location:</strong> India
                </p>
            </div>
        </div>
    );
};

export default ContactInfo;