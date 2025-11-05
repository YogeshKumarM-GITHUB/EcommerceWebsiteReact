import FlashSale from "../components/FlashSale";
import HeroSection from "../components/HeroSection";
import PackageDetails from "../components/PackageDetails";
import TrendingProducts from "../components/TrendingProducts";

const Home=()=>{
    return (
        <div>
            <HeroSection/>
            <PackageDetails/>
            <TrendingProducts/>
            <FlashSale/>
        </div>
    )
}
export default Home;