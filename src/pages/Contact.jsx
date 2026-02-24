import { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState({ type: "", msg: "" });
    const [loading, setLoading] = useState(false);

    const onChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: "", msg: "" });

        try {
            const res = await fetch("/.netlify/functions/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.error || "Something went wrong");
            }

            setStatus({ type: "success", msg: "Message sent successfully ✅" });
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            setStatus({ type: "error", msg: err.message || "Failed to send ❌" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-page">
            <div className="contact-container">
                {/* LEFT SIDE */}
                <div className="contact-info">
                    <span className="contact-tag">Get In Touch</span>

                    <h1 className="contact-title">
                        Let’s Build Something <span>Great</span>
                    </h1>

                    <p className="contact-text">
                        Have a project in mind? Want to collaborate? Fill out the form and let’s create something amazing together.
                    </p>

                    <div className="contact-details">
                        <p><strong>Email:</strong> hello@devboomi.com</p>
                        <p><strong>Location:</strong> India</p>
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
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

                        <button type="submit" className="btn-primary" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                        {status.msg && (
                            <p
                                style={{
                                    marginTop: 8,
                                    fontSize: 14,
                                    color: status.type === "success" ? "green" : "crimson",
                                }}
                            >
                                {status.msg}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;