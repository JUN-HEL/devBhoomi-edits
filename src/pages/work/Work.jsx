import { useMemo, useState } from "react";
import WorkHeader from "./WorkHeader";
import WorkFilters from "./WorkFilters";
import WorkProjects from "./WorkProjects";
import WorkReels from "./WorkReels";

import "../../styles/work/work.base.css";
import "../../styles/work/work.typography.css";
import "../../styles/work/work.filters.css";
import "../../styles/work/work.grids.css";
import "../../styles/work/work.responsive.css";

import { projects } from "../../data/webProjects";
import { reels } from "../../data/reelsData";

const Work = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    // ✅ Add more categories here anytime
    const filters = ["All", "Web", "UI/UX", "Branding", "Social Media", "SEO", "Ads", "Reels"];

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") return projects;
        if (activeFilter === "Reels") return [];
        return projects.filter((item) => item.category === activeFilter);
    }, [activeFilter]);

    const showReels = activeFilter === "All" || activeFilter === "Reels";

    return (
        <section className="work-page" id="work">
            <WorkHeader />

            <WorkFilters
                filters={filters}
                activeFilter={activeFilter}
                onChange={setActiveFilter}
            />

            <WorkProjects projects={filteredProjects} />

            {showReels && <WorkReels reels={reels} />}
        </section>
    );
};

export default Work;