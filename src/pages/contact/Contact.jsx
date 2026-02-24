import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import useContactForm from "./useContactForm";

import "../../styles/contact/contact.base.css";
import "../../styles/contact/contact.typography.css";
import "../../styles/contact/contact.form.css";
import "../../styles/contact/contact.responsive.css";

const Contact = () => {
    const { form, status, loading, onChange, onSubmit } = useContactForm();

    return (
        <section className="contact-page" id="contact">
            <div className="contact-container">
                <ContactInfo />
                <ContactForm
                    form={form}
                    status={status}
                    loading={loading}
                    onChange={onChange}
                    onSubmit={onSubmit}
                />
            </div>
        </section>
    );
};

export default Contact;