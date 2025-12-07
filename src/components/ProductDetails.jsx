import { useEffect, useState } from 'react';
import product from '../assets/product-01.jpg';
import { CiStar } from "react-icons/ci";
import PopularProducts from '../components/PopularProducts';
import PerfectPlant from '../components/PerfectPlant';

const AddCart = () => {
    const [showcart, setShowcart] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowcart(true);
            } else {
                setShowcart(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className={`p-4 fixed top-0 left-0 h-[95px] w-full z-100 bg-white flex flex-row items-center justify-between shadow-md transform transition-all duration-300 ease-in-out ${showcart ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`}>
            <div className='flex flex-row items-center gap-2'>
                <img src={product} alt="product" className='w-20 h-20 object-fill' />
                <p>Desert Bloom</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <p>$70.00</p>
                <input type="number" defaultValue={1} min={1} className='w-16 h-8 border border-gray-300 text-center' />
                <button className='w-28 h-8 bg-green-500 text-white rounded-full cursor-pointer hover:bg-green-300 ml-2'>Add to Cart</button>
            </div>
        </div>
    )
}

const DescrptionTab = () => {
    return (
        <div className='mt-5 text-gray-500'>
            <p>Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.</p>
            <p className='mt-5'>Tincidunt mauris, pharetra aliquam in magnis ornare sit mi velit, quis semper ut a malesuada pharetra volutpat euismod vulputate pellentesque et risus in malesuada pellentesque dictumst amet vitae vitae ut phasellus quam et enim feugiat eget mauris aenean eu volutpat, dictum donec gravida nunc egestas viverra justo sed.</p>
            <p className='mt-5'>Tincidunt mauris, pharetra aliquam in magnis ornare sit mi velit, quis semper ut a malesuada pharetra volutpat euismod vulputate pellentesque et risus in malesuada pellentesque dictumst amet vitae vitae ut phasellus quam et enim feugiat eget mauris aenean eu volutpat, dictum donec gravida nunc egestas viverra justo sed.</p>
        </div>
    )
}

const ReviewsTab = () => {
    return (
        <div className='mt-5'>
            <p className='text-gray-500'>There are no reviews yet.</p>
            <form className='border border-gray-200 p-4'>
                <p className='mt-2'>Be the first to review “Starlight Succulent”</p>
                <p className='mt-2'>Your email address will not be published. Required fields are marked *</p>
                <div className='mt-5 flex flex-col gap-4'>
                    <div className='flex flex-row'>
                        <label>Your Rating *</label>
                        {
                            Array.from({ length: 5 }).map((_, index) => (
                                <CiStar key={index} className='inline-block text-2xl cursor-pointer hover:text-green-500' />
                            ))
                        }
                    </div>
                </div>
                <label>Your review *</label>
                <textarea
                    rows={5}
                    className='w-full border border-gray-300 p-2'></textarea>
                <div className='flex flex-row items-center w-full gap-3'>
                    <div className='w-full'>
                        <label>Name *</label>
                        <input type="text" name="name" className='w-full border border-gray-300 p-2 mt-2' />
                    </div>
                    <div className='w-full'>
                        <label>Email *</label>
                        <input type="email" name="name" className='w-full border border-gray-300 p-2 mt-2' />
                    </div>
                </div>
                <div className='flex flex-row items-center gap-2 mt-2'>
                    <checkbox className="border border-gray-300 w-4 h-4 cursor-pointer" />
                    <p>Save my name, email, and website in this browser for the next time I comment.</p>
                </div>
                <button className='mt-5 w-35 h-10 bg-green-500 text-white rounded-full cursor-pointer hover:bg-green-300'>Submit</button>
            </form>
        </div>
    )
}

const ProductDetails = () => {
    const [tab, setTab] = useState("Descrption");


    return (
        <>
            <AddCart />
            {/* {
            showcart && <AddCart/>
          } */}
            <div>
                {/* Product Details */}
                <div className='mt-10 flex flex-col md:flex-row items-start  max-w-7xl mx-auto gap-10 p-4 w-full'>
                    <img
                        src={product}
                        alt="Product"
                        className='w-full md:w-[540px] md:h-[586px] border border-gray-300 cursor-pointer object-fill' />

                    <div className='w-full'>
                        <p className='text-gray-600 text-[15px]'>Home / Indoor Plants /Golden Glow</p>
                        <p className='mt-4 text-[20px] text-green-500'>Indoor Plants</p>
                        <h1 className='mt-2 font-bold'>Golden Glow</h1>
                        <p className='mt-4'><b className='text-[40px]'>$85.00</b> & Free Shipping</p>
                        <p className='mt-5 text-gray-800'>Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.</p>
                        <p className='mt-5 text-gray-800'>Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.</p>
                        <form className='mt-5 flex flex-row items-center gap-1'>
                            <input type="number"
                                defaultValue={1}
                                min={1}
                                className='w-20 h-10 border border-gray-300 text-center' />
                            <button className='w-35 h-10 bg-green-500 text-white rounded-full cursor-pointer hover:bg-green-300'>Add to Cart</button>
                        </form>
                        <p className='mt-3 font-bold text-[20px]'>Category: Indoor Plants</p>
                    </div>
                </div>
                {/* End of Product Details */}

                {/* Tabs Section */}
                <div>
                    <div className='max-w-7xl mx-auto p-4 w-full'>
                        <div className='border-b border-gray-300'>
                            <button
                                className={`pb-2 mr-6 ${tab === "Descrption" ? "border-b-2 border-green-500 text-green-500" : "text-gray-600"} cursor-pointer`}
                                onClick={() => setTab("Descrption")}>
                                Descrption
                            </button>
                            <button
                                className={`pb-2 mr-6 ${tab === "Reviews" ? "border-b-2 border-green-500 text-green-500" : "text-gray-600"} cursor-pointer`}
                                onClick={() => setTab("Reviews")}>
                                Reviews(0)
                            </button>
                        </div>
                        {
                            tab === "Descrption" && <DescrptionTab />
                        }
                        {
                            tab === "Reviews" && <ReviewsTab />
                        }
                    </div>
                </div>
                {/* End of Tabs Section */}
                {/* {Related Products} */}
                <PopularProducts />
                <PerfectPlant />
            </div>
        </>
    )

}

export default ProductDetails;