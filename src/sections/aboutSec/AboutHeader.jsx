import { aboutData } from "./about.data";

const AboutHeader = () => {
    return (
        <div className="about-heading-wrapper">
            <div className="about-heading-glass">
                <h2>{aboutData.heading.title}</h2>
                <p>{aboutData.heading.subtitle}</p>
            </div>
        </div>
    );
};

export default AboutHeader;