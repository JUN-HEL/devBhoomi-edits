import "./About.css";
import AboutHeader from "./AboutHeader";
import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

const About = () => {
    return (
        <section className="about-section" id="about">
            <AboutHeader />

            <div className="about-container">
                <AboutContent />
                <AboutStats />
            </div>
        </section>
    );
};

export default About;