import CustomersSays from "../components/CustomersSays";
import FlashSale from "../components/FlashSale";
import HeroSection from "../components/HeroSection";
import OurCategories from "../components/OurCategories";
import PackageDetails from "../components/PackageDetails";
import PerfectPlant from "../components/PerfectPlant";
import PopularProducts from "../components/PopularProducts";
import PremierCustomer from "../components/PremierCustomer";
import TrendingProducts from "../components/TrendingProducts";

const Home=()=>{
    return (
        <div>
            <HeroSection/>
            <PackageDetails/>
            <TrendingProducts/>
            <FlashSale/>
            <OurCategories/>
            <PremierCustomer/>
            <PopularProducts/>
            <CustomersSays/>
            <PerfectPlant/>
        </div>
    )
}
export default Home;