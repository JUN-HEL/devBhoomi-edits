import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const { slug } = useParams();

    return (
        <div style={{ padding: "120px 60px" }}>
            <h1>{slug.replace(/-/g, " ")}</h1>
            <p>This is the project details page.</p>
        </div>
    );
};

export default ProjectDetails;