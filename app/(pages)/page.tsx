import Pricing from "../_components/modules/Pricing/Pricing";
import Header from "../_components/modules/Header/Header";
import Categories from "../_components/templates/Index/Categories/Categories";
import Devices from "../_components/templates/Index/Devices/Devices";

export default function Home() {
    return (
        <>
            <Header />
            {/* // <Categories /> */}
            <Devices />
            <Pricing />
        </>
    );
}