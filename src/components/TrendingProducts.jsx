import product1 from '../assets/product-01.jpg'
import product2 from '../assets/product-02.jpg'
import product3 from '../assets/product-03.jpg'
import { FcRating } from "react-icons/fc";
import { CiStar } from "react-icons/ci";
import { RiShoppingBag3Fill } from "react-icons/ri";

const TrendingProducts = () => {
    const trendProducts = [
        {
            image: product1,
            rating: 4,
            text: 'Zen Bamboo Grove',
            type: 'Indoor Plants',
            rate: 90
        },
        {
            image: product2,
            rating: 2,
            text: 'Starlight Succulent',
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
            <p className="text-[42px] text-center mt-10 font-semibold">Trending Products</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto p-4">
                {trendProducts.map((item, index) => {
                    return ( 
                        <div key={index} className='relative group'>
                            <div className='opacity-100 md:opacity-0 md:group-hover:opacity-100 
                                             transition-opacity duration-300 absolute top-2 right-3 bg-[#ECF4D3] rounded-full p-4 cursor-pointer'>
                                <RiShoppingBag3Fill  size={20}/>
                            </div>
                            <img src={item.image} className='w-full md:w-[300] h-[326] cursor-pointer' />
                            <div className='flex flex-row items-start mt-1'>
                                {[...Array(5)].map((_,i)=>
                                   i<item.rating?(
                                     <FcRating key={i}/>
                                   )
                                  : (
                                     <CiStar key={i}/>
                                  )
                                 )
                                }
                            </div>
                            <p className='mt-2 text-[16px] font-semibold'>{item.text}</p>
                            <p className='text-[14px] text-gray-600'>{item.type}</p>
                            <p className='text-[14px] font-semibold'>${item.rate.toFixed(2)}</p>
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}
export default TrendingProducts;