import { useState } from 'react';
import product1 from '../assets/product-01.jpg';
import { CiCircleRemove } from "react-icons/ci";

const CartDetails = () => {
    const [qty,setQty]=useState(1);
    return (
        <div className="mt-4 p-1">
            <div className="max-w-7xl mx-auto border border-gray-300 p-4">
                <h2 className="text-2xl font-semibold mb-6">Cart Details</h2>
                <div className='overflow-auto'>
                    <table className='border border-gray-300 w-full'>
                        <thead>
                            <tr className="border border-gray-300 bg-gray-100">
                                <th className="text-left p-4"></th>
                                <th className="text-left p-4">Product</th>
                                <th className="text-left p-4">Price</th>
                                <th className="text-left p-4">Quantity</th>
                                <th className="text-left p-4">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               <td className='flex flex-row items-center'>
                                    <CiCircleRemove className="cursor-pointer bg-white shadow-2xs" size={20} />
                                    <span>
                                        <img src={product1} className="h-20 w-20 object-fill" alt="product" />
                                    </span>
                               </td>
                                <td className="p-4">Starlight Succulent1</td>
                                <td className="p-4">$55.00</td>
                                <td className="p-4"><input type="number" min={1} onChange={(e)=>setQty(e.target.value)} value={qty} name="quantity" className='border border-gray-300 text-center w-15 outline outline-none focus:border-[#88Ad35]' /></td>
                                <td className="p-4">$55.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className={`p-2 flex flex-col md:flex-row items-center justify-between md:gap-2  mt-8 transform transition-all duration-300 ease-in-out w-full`}>
                        <form className='flex flex-col md:flex-row w-full md:w-[1000px]'>
                            <input type="text" placeholder="Coupon Code" className="border border-gray-300 p-2" />
                            <button className="bg-[#88Ad35] ml-2 px-5 py-2 text-white rounded-full cursor-pointer mt-2">Apply coupon</button>
                        </form>
                        <button className="bg-[#88Ad35] ml-2 px-5 py-2 text-white rounded-full cursor-pointer mt-2 w-full md:w-auto">Update Cart</button>
                    </div>
                </div>
            </div>

            <div>
                <div className="max-w-7xl mx-auto border border-gray-300 p-4 mt-6 w-full md:w-1/3">
                    <h2 className="text-2xl font-semibold mb-6">Cart Totals</h2>
                    <div className="flex flex-row items-center justify-between mb-4">
                        <p className="text-gray-700 font-semibold">Subtotal:</p>
                        <p className="text-gray-700 font-semibold">$55.00</p>
                    </div>
                    <div className="flex flex-row items-center justify-between mb-4">
                        <p className="text-gray-700 font-semibold">Total:</p>
                        <p className="text-gray-700 font-semibold">$55.00</p>
                    </div>
                    <button className="bg-[#88Ad35] w-full px-5 py-2 text-white rounded-full cursor-pointer mt-2">Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}
export default CartDetails;