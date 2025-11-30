import { useState } from "react";
import { IoCalendarClearOutline } from "react-icons/io5";

const CheckOut = () => {
    const [showCoupon, setShowCoupon] = useState(false);
    return (
        <div className="mt-20">
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-[30px]  text-black font-bold'>CheckOut</h1>
                <div className="border-t-3 border-[#88Ad35]">
                    <div className="bg-gray-100 p-1 flex flex-col md:flex-row items-center md:gap-4">
                        <IoCalendarClearOutline size={25} className="text-[#88Ad35] m-4" />
                        <p>Have a coupon? <span onClick={() => setShowCoupon(!showCoupon)} className="text-[#88AD35] cursor-pointer">Click here to enter your code</span></p>
                    </div>
                    <div className={`p-2 flex flex-col md:flex-row items-center md:gap-2  mt-8 transform transition-all duration-300 ease-in-out ${showCoupon ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <form>
                            <input type="text" placeholder="Coupon Code" className="border border-gray-300 p-2 w-full" />
                            <button className="bg-[#88Ad35] ml-2 px-5 py-2 text-white rounded-full w-full mt-2">Apply coupon</button>
                        </form>
                    </div>
                </div>
                {/* Billing Details */}
                <div className="flex flex-col md:flex-row gap-4 p-1 mt-10 md:mt-4">

                    <form className="flex flex-col gap-2 w-full md:w-1/2 p-4">

                        <p className="text-[24px] font-semibold">Billing Details</p>
                        <hr />

                        {/* First Name and Last Name */}
                        <div className="flex flex-col md:flex-row gap-2 mt-4">
                            <div className="flex flex-col w-full">
                                <label className="font-bold text-[15px]">First name*</label>
                                <input type="text" name="firstName" className="border border-gray-300 py-2 w-full outline outline-none px-2 focus:border focus:border-[#88Ad35]" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="font-bold text-[15px]">Last name*</label>
                                <input type="text" name="lastName" className="border border-gray-300 py-2 w-full outline outline-none px-2 focus:border focus:border-[#88AD35]" />
                            </div>
                        </div>

                        {/* CompanyName */}
                        <div className="flex flex-col w-full">
                            <label className="font-bold text-[15px]">Company name(optional)</label>
                            <input type="text" name="companyName" className="border border-gray-300 py-2 w-full outline outline-none px-2 focus:border focus:border-[#88Ad35]" />
                        </div>

                        {/* Country Region */}
                        <div className="flex flex-col w-full">
                            <label className="font-bold text-[15px]">Country / Region *</label>
                            <select className="w-full border border-gray-300 py-2 outline outline-none focus:border focus:border-[#88Ad35] px-2">
                                <option>Select a country / region...</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                                <option>Australia</option>
                            </select>
                        </div>

                        {/* Street Address */}
                        <div className="flex flex-col w-full">
                            <label className="font-bold text-[15px]">Street address*</label>
                            <input type="text" placeholder="House number and street name" name="streetAddress" className="border border-gray-300 py-2 w-full outline outline-none px-2 focus:border focus:border-[#88Ad35]" />
                            <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" name="apartmentSuite" className="border border-gray-300 py-2 w-full outline outline-none px-2 focus:border focus:border-[#88Ad35] mt-2" />
                        </div>

                        {/* Town / City */}
                        <div className="flex flex-col w-full">
                            <label className="font-bold text-[15px]">Town / City*</label>
                            <input type="text" placeholder="House number and street name" name="streetAddress" className="border border-gray-300 py-2 w-full outline outline-none px-2 focus:border focus:border-[#88Ad35]" />
                        </div>

                        {/* State */}
                        <div className="flex flex-col w-full">
                            <label className="font-bold text-[15px]">State*</label>
                            <select className="w-full border border-gray-300 py-2 outline outline-none focus:border focus:border-[#88Ad35] px-2">
                                <option>Select a state...</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                                <option>Australia</option>
                            </select>
                        </div>

                        {/* Zip Code */}
                        <div className="flex flex-col w-full">
                            <label className="font-bold text-[15px]">ZIP Code*</label>
                            <input type="text" name="zipcode" className="border border-gray-300 py-2 w-full outline outline-none px-2 focus:border focus:border-[#88Ad35]" />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col w-full">
                            <label className="font-bold text-[15px]">Phone*</label>
                            <input type="text" name="phone" className="border border-gray-300 py-2 w-full outline outline-none px-2 focus:border focus:border-[#88Ad35]" />
                        </div>

                        {/* Email Address */}
                        <div className="flex flex-col w-full">
                            <label className="font-bold text-[15px]">Email address*</label>
                            <input type="email" name="email" className="border border-gray-300 py-2 w-full outline outline-none px-2 focus:border focus:border-[#88Ad35]" />
                        </div>

                        <p className="text-[24px] font-semibold">Additional information</p>
                        <hr />

                        {/* Order Notes */}
                        <div className="flex flex-col w-full">
                            <label className="font-bold text-[15px]">Order notes (optional)</label>
                            <textarea placeholder="Notes about your order, e.g. special notes for delivery." name="orderNotes" className="border border-gray-300 py-2 w-full outline outline-none px-2 focus:border focus:border-[#88Ad35]" rows={4}></textarea>
                        </div>

                        <button type="submit" className="bg-[#88Ad35] cursor-pointer ml-2 px-5 py-2 text-white rounded-full">Place order</button>
                    </form>

                    <div className="flex-1 border border-gray-300 p-4 mt-4 h-[500px] w-full">
                        <p className="font-bold text-[30px] text-center">Your order</p>

                        <table className="w-2/2">
                            <thead>
                                <tr className="border-b border-gray-300">
                                    <th className="text-left p-2">Product</th>
                                    <th className="text-left p-2">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-300">
                                    <td>Star flower</td>
                                    <td>400</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                </div>
                {/* End of Billing Details */}
            </div>
        </div>
    )
}
export default CheckOut;