import { useRef } from "react";
import HeroContent from "./HeroContent";
import HeroDevices from "./HeroDevices";
import "./hero.base.css";
import "./hero.typography.css";
import "./hero.buttons.css";
import "./hero.devices.css";
const Hero = () => {
    const deviceRef = useRef(null);

    const handleMouseMove = (e) => {
        const el = deviceRef.current;
        if (!el) return;

        const { left, top, width, height } = el.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        el.style.transform = `rotateY(${x * 15}deg) rotateX(${-y * 15}deg)`;
    };

    const handleMouseLeave = () => {
        const el = deviceRef.current;
        if (!el) return;
        el.style.transform = "rotateY(0deg) rotateX(0deg)";
    };

    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <HeroContent />
                <HeroDevices
                    deviceRef={deviceRef}
                    onMove={handleMouseMove}
                    onLeave={handleMouseLeave}
                />
            </div>

            <div className="hero-glow" aria-hidden="true" />
        </section>
    );
};

export default Hero;