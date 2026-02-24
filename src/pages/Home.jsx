import Hero from "../sections/hero/Hero";
import Services from "../sections/services/Services";
import ContactCTA from "../sections/ContactCTA";
import About from "../sections/aboutSec/About";

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