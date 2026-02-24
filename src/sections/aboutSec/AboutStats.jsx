import { aboutData } from "./about.data";

const AboutStats = () => {
    return (
        <div className="about-right">
            <div className="about-glow" aria-hidden="true" />

            <div className="about-stats">
                {aboutData.stats.map((s, i) => (
                    <div key={i} className="about-stat">
                        <h3>{s.value}</h3>
                        <p>{s.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutStats;