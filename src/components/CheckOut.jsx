import { useState } from "react";
import { IoCalendarClearOutline } from "react-icons/io5";

const CheckOut = () => {
    const [showCoupon, setShowCoupon] = useState(false);
    return (
        <div className="mt-20">
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-[30px]  text-black font-bold'>CheckOut</h1>
                <div className="border-t-3 border-[#88Ad35]">
                    <div className="bg-gray-100 p-1 flex flex-row items-center gap-4">
                        <IoCalendarClearOutline size={25} className="text-[#88Ad35] m-4" />
                        <p>Have a coupon? <span onClick={() => setShowCoupon(!showCoupon)} className="text-[#88AD35] cursor-pointer">Click here to enter your code</span></p>
                    </div>
                    <div className={`flex flex-row items-center gap-2 mt-8 transform transition-all duration-300 ease-in-out ${showCoupon ? '-translate-y-5 opacity-100' : 'translate-y-full opacity-0'}`}>
                        <form>
                            <input type="text" placeholder="Coupon Code" className="border border-gray-300 p-2" />
                            <button className="bg-[#88Ad35] ml-2 px-5 py-2 text-white rounded-full">Apply coupon</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CheckOut;