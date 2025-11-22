import ShoppingProducts from "../components/ShoppingProducts";
import ShopView from "../components/ShopView";
import FlashSale from "../components/FlashSale";

const Shop=()=>{
    return(
        <div>
          <ShopView/>
          <ShoppingProducts/>
          <FlashSale/>
        </div>
    )
}
export default Shop;