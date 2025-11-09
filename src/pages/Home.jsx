import FlashSale from "../components/FlashSale";
import HeroSection from "../components/HeroSection";
import OurCategories from "../components/OurCategories";
import PackageDetails from "../components/PackageDetails";
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
        </div>
    )
}
export default Home;