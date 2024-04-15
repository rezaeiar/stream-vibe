import Header from "../_components/modules/Header/Header";
import HeroSection from "../_components/templates/Index/HeroSection/HeroSection";
import Categories from "../_components/templates/Index/Categories/Categories";
import Devices from "../_components/templates/Index/Devices/Devices";
import Pricing from "../_components/modules/Pricing/Pricing";

export default function Home() {
    return (
        <>
            <Header component={<HeroSection />} isNavigationBarFloat />
            <Categories />
            <Devices />
            <Pricing />
        </>
    );
}