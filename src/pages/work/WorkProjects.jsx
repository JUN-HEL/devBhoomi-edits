import ServiceCard from "../../components/ui/ServiceCard/ServiceCard";

const WorkProjects = ({ projects }) => {
    if (!projects?.length) return null;

    return (
        <div className="projects-grid">
            {projects.map((project, index) => (
                <ServiceCard key={project?.id || index} {...project} />
            ))}
        </div>
    );
};

export default WorkProjects;