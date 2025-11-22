import { FcRating } from "react-icons/fc";
import { CiStar } from "react-icons/ci";
import { RiShoppingBag3Fill } from "react-icons/ri";

const Products = ({popularProducts}) => {
    return (
        popularProducts.map((item, index) => {
            return (
                <div key={index} className='relative group'>
                    <div className='opacity-100 md:opacity-0 md:group-hover:opacity-100 
                                             transition-opacity duration-300 absolute top-2 right-3 bg-[#ECF4D3] rounded-full p-4 cursor-pointer'>
                        <RiShoppingBag3Fill size={20} />
                    </div>
                    <img src={item.image} className='w-full md:w-[400px] h-[450px] object-cover cursor-pointer' />
                    <div className='flex flex-row items-start mt-1'>
                        {[...Array(5)].map((_, i) =>
                            i < item.rating ? (
                                <FcRating key={i} />
                            )
                                : (
                                    <CiStar key={i} />
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
    )
}
export default Products;