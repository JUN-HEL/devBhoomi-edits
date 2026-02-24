import { aboutData } from "./about.data";

const AboutContent = () => {
    return (
        <div className="about-content">
            <span className="about-tag">{aboutData.tag}</span>

            <h2 className="about-title">
                {aboutData.title.main} <span>{aboutData.title.highlight}</span>
            </h2>

            {aboutData.paragraphs.map((text, i) => (
                <p className="about-description" key={i}>
                    {text}
                </p>
            ))}

            <div className="about-points">
                <h4 className="about-points-title">What we focus on</h4>
                <ul>
                    {aboutData.points.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="about-badge">
                <strong>{aboutData.badge.label}</strong>
                <span>{aboutData.badge.value}</span>
            </div>
        </div>
    );
};

export default AboutContent;