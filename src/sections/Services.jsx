import React, { useEffect, useRef, useState } from "react";
import "../styles/services.css";


const services = [
    {
        title: "SEO (Search Engine Optimization)",
        desc:
            "We turn search into your most consistent sales channel. From technical fixes to content strategy, we build rankings that bring compounding traffic and qualified leads — not vanity clicks.",
        bullets: [
            "Technical SEO Audit & Fixes",
            "On-Page SEO (Structure, Content, Intent)",
            "Keyword Research & Competitor Analysis",
            "Content Strategy & Topical Authority",
            "Local SEO (Google Business Profile)",
            "Performance & Core Web Vitals Optimization",
        ],
        platforms: ["Google", "Bing", "Google Search Console", "Google Analytics"],
    },
    {
        title: "App Development",
        desc:
            "From idea to launch — we craft fast, scalable apps with clean UI and solid architecture. Built for real users, real performance, and real growth.",
        bullets: [
            "Android / iOS App Development",
            "UI/UX Design + Prototyping",
            "API Integration & Backend Connectivity",
            "Authentication, Payments, Notifications",
            "Testing, Deployment & Store Support",
            "Maintenance & Feature Upgrades",
        ],
        platforms: ["Android", "iOS", "Firebase", "REST APIs"],
    },
    {
        title: "Social Media Marketing (SMM)",
        desc:
            "We don’t just post content — we engineer attention. Our SMM system builds brand presence, engagement, and consistent inbound leads with strategy-first execution.",
        bullets: [
            "Content Creation",
            "Post Designing",
            "Reel / Short Video Editing",
            "Page Management",
            "Growth Strategy",
            "Community Management",
        ],
        platforms: ["Instagram", "Facebook"],
    },
    {
        title: "Website Services",
        desc:
            "High-converting websites built like a product: fast, responsive, SEO-ready, and designed to make users trust you in seconds — because attention spans are tiny and competition is loud.",
        bullets: [
            "Landing Pages & Business Websites",
            "Portfolio / Agency Websites",
            "Speed Optimization",
            "SEO-Friendly Structure",
            "Responsive Design (Mobile-First)",
            "Deployment + Basic Security Setup",
        ],
        platforms: ["React", "WordPress", "HTML/CSS/JS", "Vercel/Netlify"],
    },
    {
        title: "Branding Services",
        desc:
            "Branding is not a logo — it’s recognition. We shape a strong identity system that makes you instantly memorable, visually consistent, and premium in your audience’s mind.",
        bullets: [
            "Logo Design Concepts",
            "Brand Colors & Typography System",
            "Social Media Brand Kit",
            "Visual Guidelines (Consistency Rules)",
            "Post Templates & Creative Direction",
            "Brand Positioning Support",
        ],
        platforms: ["Adobe", "Figma", "Canva (if needed)"],
    },
];

export default function Services() {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`services ${inView ? "in-view" : ""}`}
            id="services"
        >
            {/* Background image overlay layer */}
            <div className="services-bg" aria-hidden="true" />
            <div className="services-overlay" aria-hidden="true" />

            {/* Floating glows like your hero */}
            <div className="glow glow1" aria-hidden="true" />
            <div className="glow glow2" aria-hidden="true" />

            <div className="services-inner">
                <div className="services-header">
                    <p className="services-script">Services</p>
                    <h2 className="services-title">
                        WHAT WE <span>DELIVER</span>
                    </h2>
                    <p className="services-subtitle">
                        Strategy-led services built to grow visibility, trust, and revenue —
                        with execution that looks premium and performs even better.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((s, idx) => (
                        <article
                            key={s.title}
                            className="service-card"
                            style={{ animationDelay: `${idx * 0.12}s` }}
                        >
                            <div className="service-top">
                                <span className="service-index">
                                    {(idx + 1).toString().padStart(2, "0")}
                                </span>
                                <h3 className="service-name">{s.title}</h3>
                            </div>

                            <p className="service-desc">{s.desc}</p>

                            <div className="service-cols">
                                <div className="service-col">
                                    <h4>What we do</h4>
                                    <ul>
                                        {s.bullets.map((b) => (
                                            <li key={b}>{b}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="service-col">
                                    <h4>Platforms</h4>
                                    <ul>
                                        {s.platforms.map((p) => (
                                            <li key={p}>{p}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}