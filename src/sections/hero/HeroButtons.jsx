import "./hero.buttons.css";
import { Link } from "react-router-dom";
const HeroButtons = () => {
    return (
        <div className="hero-buttons">
            <Link to="/work" className="btn-primary">
                View Our Work
            </Link>

            <Link to="/contact" className="btn-outline">
                Let’s Collaborate
            </Link>
        </div>
    );
};

export default HeroButtons;