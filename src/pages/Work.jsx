import { useState } from "react";
import ServiceCard from "../components/ui/ServiceCard/ServiceCard";
import ReelCard from "../components/ui/ReelCard/ReelCard";
import "./Work.css";
import { projects } from "../data/webProjects";
import { reels } from "../data/reelsData"

const Work = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", "Web", "UI/UX", "Branding", "Reels"];

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((item) => item.category === activeFilter);

    const showReels =
        activeFilter === "All" || activeFilter === "Reels";

    return (
        <section className="work-page">

            <div className="work-header">
                <span className="work-tag">Portfolio</span>
                <h1>Selected Work</h1>
                <p>
                    A curated selection of projects and creative reels.
                </p>
            </div>

            {/* FILTER BUTTONS */}
            <div className="work-filters">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={activeFilter === filter ? "active" : ""}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* PROJECT GRID */}
            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <ServiceCard key={index} {...project} />
                ))}
            </div>

            {/* REELS */}
            {showReels && (
                <div className="reels-grid">
                    {reels.map((reel, index) => (
                        <ReelCard key={index} {...reel} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Work;
