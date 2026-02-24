import { useRef } from "react";
import { motion } from "framer-motion";
import laptop from "../assets/images/hero/laptop.png";
import iphone from "../assets/images/hero/iphone.png";
import "../styles/hero.css";

const Hero = () => {
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const { left, top, width, height } =
            containerRef.current.getBoundingClientRect();

        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        containerRef.current.style.transform = `
      rotateY(${x * 15}deg)
      rotateX(${-y * 15}deg)
    `;
    };

    const handleMouseLeave = () => {
        containerRef.current.style.transform =
            "rotateY(0deg) rotateX(0deg)";
    };

    return (
        <section className="hero">
            <div className="hero-container">

                {/* LEFT SIDE */}
                <div className="hero-content">
                    <span className="hero-tag">✦ DevBoomi Digital Studio</span>

                    <h1 className="hero-title">
                        We Design Websites & <span>Edit Videos</span>
                        That Make Brands Stand Out
                    </h1>

                    <p className="hero-subtext">
                        Modern web development and cinematic video editing crafted for ambitious businesses.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary">View Our Work</button>
                        <button className="btn-outline">Let’s Collaborate</button>
                    </div>
                </div>

                {/* RIGHT SIDE DEVICES */}
                <div
                    className="hero-image-wrapper"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="hero-image" ref={containerRef}>
                        <motion.img
                            src={laptop}
                            alt="Laptop"
                            className="laptop"
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                        />

                        <motion.img
                            src={iphone}
                            alt="iPhone"
                            className="iphone"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        />
                    </div>
                </div>

            </div>

            <div className="hero-glow"></div>
        </section>
    );
};

export default Hero;