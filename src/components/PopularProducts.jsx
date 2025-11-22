import product1 from '../assets/product-04.jpg'
import product2 from '../assets/product-05.jpg'
import product3 from '../assets/product-06.jpg'
import Products from './Products'


const PopularProducts = () => {
    const popularProducts = [
        {
            image: product1,
            rating: 4,
            text: 'Desert Bloom',
            type: 'Indoor Plants',
            rate: 90
        },
        {
            image: product2,
            rating: 2,
            text: 'Golden Glow',
            type: 'Indoor Plants',
            rate: 95
        },
        {
            image: product3,
            rating: 3,
            text: 'Silver Mist',
            type: 'Indoor Plants',
            rate: 92
        }
    ]

    return (
        <div>
            <p className="text-[42px] text-center mt-10 font-semibold">Popular Products</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto p-4">
                {
                    <Products popularProducts={popularProducts} />
                }
            </div>
        </div>
    )
}
export default PopularProducts;