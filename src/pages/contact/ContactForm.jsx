import "../../styles/contact/contact.form.css";

const ContactForm = ({ form, status, loading, onChange, onSubmit }) => {
    return (
        <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={onSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={onChange}
                    required
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={onChange}
                    required
                />

                <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={onChange}
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={form.message}
                    onChange={onChange}
                    required
                />

                <button type="submit" className="contact-btn" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                </button>

                {status.msg && (
                    <p className={`form-status ${status.type}`}>{status.msg}</p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;