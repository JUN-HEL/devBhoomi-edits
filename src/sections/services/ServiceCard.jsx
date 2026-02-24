const ServiceCard = ({ service, active, onToggle, delay }) => {
    return (
        <div
            className={`service-card ${active === service.id ? "active" : ""}`}
            onClick={() => onToggle(service.id)}
            style={{ "--d": `${delay}ms` }}
        >
            <span className="service-number">{service.id}</span>

            <h3>{service.title}</h3>

            <p className="service-description">{service.description}</p>

            <div className="expand-content">
                <ul className="service-list">
                    {service.details.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {service.platforms?.length > 0 && (
                    <div className="platforms">
                        {service.platforms.map((platform, index) => (
                            <span key={index}>{platform}</span>
                        ))}
                    </div>
                )}
            </div>

            <div className="expand-indicator">{active === service.id ? "−" : "+"}</div>
        </div>
    );
};

export default ServiceCard;