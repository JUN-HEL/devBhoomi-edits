
import SectionTitle from "../components/ui/SectionTitle/SectionTitle";
import ServiceCard from "../components/ui/ServiceCard/ServiceCard";
const projects = [
    {
        title: "Ecommerce Website",
        category: "Web Development",
        image: "/images/ecommerce.jpg",
        slug: "ecommerce-website",
    },
    {
        title: "Travel Agency Platform",
        category: "UI/UX Design",
        image: "/images/travel.jpg",
        slug: "travel-agency-platform",
    },
    {
        title: "Creative Studio Landing",
        category: "Branding",
        image: "/images/studio.jpg",
        slug: "creative-studio-landing",
    },
    {
        title: "Startup SaaS Dashboard",
        category: "Product Design",
        image: "/images/saas.jpg",
        slug: "startup-saas-dashboard",
    },
];

const Services = () => {
    return (
        <section className="services-section">
            <SectionTitle
                title="Selected Work"
                subtitle="Portfolio"
            />
            <div className="services-grid">
                {projects.map((project, index) => (
                    <ServiceCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Services;