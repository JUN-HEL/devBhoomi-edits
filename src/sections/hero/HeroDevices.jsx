import { motion } from "framer-motion";
import laptop from "../../assets/images/hero/laptop.png";
import iphone from "../../assets/images/hero/iphone.png";
import screenImage from "../../assets/images/hero/mobile.jpeg"; // 👈 ADD THIS
import "./hero.devices.css";

const HeroDevices = ({ deviceRef, onMove, onLeave }) => {
    return (
        <div className="hero-image-wrapper" onMouseMove={onMove} onMouseLeave={onLeave}>
            <div className="hero-image" ref={deviceRef}>

                {/* Laptop */}
                <motion.div
                    className="laptop-wrapper"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                >

                    {/* Laptop Screen */}
                    <iframe
                        src="https://pankuu.netlify.app/"
                        className="laptop-screen"
                        title="Project Preview"
                    />

                    {/* Laptop Frame */}
                    <img
                        src={laptop}
                        alt="Laptop"
                        className="laptop"
                        draggable="false"
                    />

                </motion.div>
                {/* iPhone Wrapper */}
                <motion.div
                    className="iphone-wrapper"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <img src={screenImage} alt="Mobile Screen" className="iphone-screen" />
                    <img src={iphone} alt="iPhone" className="iphone" draggable="false" />
                </motion.div>

            </div>
        </div>
    );
};

export default HeroDevices;