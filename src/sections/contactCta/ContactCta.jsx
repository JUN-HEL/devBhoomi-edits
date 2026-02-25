// src/components/ContactCTA/ContactCTA.jsx
import "./ContactCTA.css";
import { channels, contact } from "../../data/contact-details";

const ContactCTA = () => {
    return (
        <section className="contact-cta" data-reveal>
            <div className="contact-cta-container">
                <div className="contact-cta-head" data-reveal="left">
                    <span className="contact-cta-tag">Let’s Talk</span>
                    <h2 className="contact-cta-title">
                        Start Your Project <span>Today</span>
                    </h2>
                    <p className="contact-cta-subtitle">
                        Pick your favorite platform — we’ll reply quickly with next steps, timelines, and pricing.
                    </p>
                </div>

                <div
                    className="contact-cta-grid"
                    data-reveal="zoom"
                    style={{ "--reveal-delay": "80ms" }}
                >
                    {channels.map((c) => (
                        <a
                            key={c.name}
                            className={`contact-cta-card ${c.className}`}
                            href={c.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Contact via ${c.name}`}
                            title={`Contact via ${c.name}`}
                        >
                            <div className="contact-cta-icon" aria-hidden="true">
                                <img className="contact-cta-icon-img" src={c.icon} alt="" />
                            </div>

                            <div className="contact-cta-meta">
                                <div className="contact-cta-name">{c.name}</div>
                                <div className="contact-cta-desc">{c.desc}</div>
                            </div>

                            <div className="contact-cta-arrow" aria-hidden="true">↗</div>
                        </a>
                    ))}
                </div>

                <div className="contact-cta-foot" data-reveal style={{ "--reveal-delay": "120ms" }}>
                    <p>
                        Prefer a call? <a href={`tel:+${contact.phone}`}>+91 8588064988</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;