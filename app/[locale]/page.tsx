import Header from "../_components/modules/Header/Header";
import HeroSection from "../_components/templates/Index/HeroSection/HeroSection";
import OurGenres from "../_components/modules/OurGenres/OurGenres";
import Devices from "../_components/templates/Index/Devices/Devices";
import FAQ from "../_components/modules/FAQ/FAQ";
import Plans from "../_components/modules/Plans/Plans";

export default function Home() {
    return (
        <>
            <Header component={<HeroSection />} isNavigationBarFloat />
            <OurGenres title="title" description="description" />
            <Devices />
            <FAQ />
            <Plans />
        </>
    );
}