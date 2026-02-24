import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ title, category, image, slug }) => {
    return (
        <Link to={`/project/${slug}`} className="portfolio-card">

            <div
                className="portfolio-image"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="portfolio-overlay"></div>

                <div className="portfolio-content">
                    <span className="portfolio-category">
                        {category}
                    </span>

                    <h3>{title}</h3>

                    <div className="portfolio-link">
                        View Project →
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default ServiceCard;