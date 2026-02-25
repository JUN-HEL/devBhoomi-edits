// HeroContent.jsx
import HeroButtons from "./HeroButtons";
import "./hero.typography.css";

const HeroContent = () => {
    return (
        <div className="hero-content">
            <p className="hero-tag">DevBoomi Digital Studio</p>

            <h1 className="hero-title">
                WE DESIGN WEBSITES & <span>EDIT VIDEOS</span>{" "}
                <span className="hero-title-break">THAT MAKE BRANDS STAND OUT</span>
            </h1>

            <p className="hero-subtext">
                Strategy-led web development and cinematic video editing built to grow visibility,
                trust, and revenue — with execution that looks premium and performs even better.
            </p>

            <HeroButtons />
        </div>
    );
};

export default HeroContent;