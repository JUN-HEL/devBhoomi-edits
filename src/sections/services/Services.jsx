import { useEffect, useRef, useState } from "react";
import "./services.css";

import ServicesHeader from "./ServicesHeader";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./services.data";

const Services = () => {
    const [active, setActive] = useState(null);
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    const toggleCard = (id) => {
        setActive((prev) => (prev === id ? null : id));
    };

    // scroll reveal
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setInView(true),
            { threshold: 0.15 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    // cursor glow
    const handleMouseMove = (e) => {
        const el = sectionRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    return (
        <section
            ref={sectionRef}
            className={`services ${inView ? "in-view" : ""}`}
            id="services"
            onMouseMove={handleMouseMove}
        >
            <div className="cursor-glow" aria-hidden="true" />
            <div className="corner-glow" aria-hidden="true" />

            <ServicesHeader />

            <div className="services-grid">
                {servicesData.map((service, idx) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        active={active}
                        onToggle={toggleCard}
                        delay={idx * 90}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;