import Hero from "../sections/hero/Hero";
import Services from "../sections/services/Services";
import About from "../sections/aboutSec/About";
import ContactCTA from "../sections/contactCta/ContactCta";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <ContactCTA />
        </>
    );
};

export default Home;