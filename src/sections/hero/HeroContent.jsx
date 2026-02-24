import HeroButtons from "./HeroButtons";
import "./hero.typography.css";

const HeroContent = () => {
    return (
        <div className="hero-content">
            <p className="hero-script">DevBoomi Digital Studio</p>

            <h1 className="hero-title">
                WE DESIGN WEBSITES & <span>EDIT VIDEOS</span>
                <br />
                THAT MAKE BRANDS STAND OUT
            </h1>

            <p className="hero-subtitle">
                Strategy-led web development and cinematic video editing built to grow visibility,
                trust, and revenue — with execution that looks premium and performs even better.
            </p>

            <HeroButtons />
        </div>
    );
};

export default HeroContent;