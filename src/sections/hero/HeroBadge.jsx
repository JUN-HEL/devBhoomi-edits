import { motion } from "framer-motion";
import "./hero.badge.css";

const HeroBadge = () => {
    return (
        <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
        >
            <span className="badge-dot"></span>

            <div className="badge-text">
                <span className="badge-label">Registered MSME</span>
                <span className="badge-value">UDYAM-UK-08-0016405</span>
            </div>
        </motion.div>
    );
};

export default HeroBadge;