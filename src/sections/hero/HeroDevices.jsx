import { motion } from "framer-motion";
import laptop from "../../assets/images/hero/laptop.png";
import iphone from "../../assets/images/hero/iphone.png";
import "./hero.devices.css";

const HeroDevices = ({ deviceRef, onMove, onLeave }) => {
    return (
        <div className="hero-image-wrapper" onMouseMove={onMove} onMouseLeave={onLeave}>
            <div className="hero-image" ref={deviceRef}>
                <motion.img
                    src={laptop}
                    alt="Laptop"
                    className="laptop"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    draggable="false"
                />

                <motion.img
                    src={iphone}
                    alt="iPhone"
                    className="iphone"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    draggable="false"
                />
            </div>
        </div>
    );
};

export default HeroDevices;