import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonials from "../Testimonials";
import Footer from "../Footer";
import ContactMeDetails from "../ContactMeDetails";
import ContactMe from "../ContactMe";

export default function Home(){
    return(
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <ContactMeDetails />
            <Testimonials />
            <Footer />

        </>
    )
}