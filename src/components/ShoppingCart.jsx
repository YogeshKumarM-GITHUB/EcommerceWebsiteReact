import { IoIosCloseCircleOutline } from "react-icons/io";
import product1 from '../assets/product-01.jpg';
import { useNavigate } from "react-router-dom";

const ShoppingCart = ({ open, onClose }) => {
    const navigate=useNavigate();
    const CartItems = [
        {
            id: 1,
            name: "Starlight Succulent",
            price: 95.00,
            image: product1,
            quantity: 1
        },
        {
            id: 1,
            name: "Starlight Succulent",
            price: 95.00,
            image: product1,
            quantity: 1
        },
        {
            id: 1,
            name: "Starlight Succulent",
            price: 95.00,
            image: product1,
            quantity: 1
        },
        {
            id: 1,
            name: "Starlight Succulent",
            price: 95.00,
            image: product1,
            quantity: 1
        },
        {
            id: 1,
            name: "Starlight Succulent",
            price: 95.00,
            image: product1,
            quantity: 1
        },
        {
            id: 1,
            name: "Starlight Succulent",
            price: 95.00,
            image: product1,
            quantity: 1
        },
        {
            id: 1,
            name: "Starlight Succulent",
            price: 95.00,
            image: product1,
            quantity: 1
        }
        ,
        {
            id: 1,
            name: "Starlight Succulent",
            price: 95.00,
            image: product1,
            quantity: 1
        }
        ,
        {
            id: 1,
            name: "Starlight Succulent1",
            price: 55.00,
            image: product1,
            quantity: 1
        },
        ,
        {
            id: 1,
            name: "Starlight Succulent1",
            price: 55.00,
            image: product1,
            quantity: 1
        },
        {
             id: 1,
            name: "Starlight Succulent1",
            price: 155.00,
            image: product1,
            quantity: 1
        }
    ]
    const total=CartItems.reduce((sum,item)=>sum+item.price*item.quantity,0);
    return (
        <div className={`fixed bg-white top-0 right-0 h-screen w-[400px] shadow-lg transform transition-transform duration-300 ease-in-out z-50 p-2 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Header */}
            <div className="flex flex-row items-center justify-between">
                <p className="text-gray-600">Shopping Cart</p>
                <IoIosCloseCircleOutline onClick={onClose} size={30} className="cursor-pointer bg-white rounded-full shadow-lg" />
            </div>
            <hr className="mt-2  bg-gray-600 " />
            {/* End of Header */}
            {/* Items */}
            <div className="overflow-y-auto h-[calc(100vh-250px)]">
                {
                    CartItems.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row items-center justify-between my-2 w-full">
                                <div className="flex flex-row">
                                    <img src={item.image} alt={item.name} className="w-[60px] h-[60px] rounded-full" />
                                    <div className="flex flex-col items-start">
                                        <p className="text-gray-700">{item.name}</p>
                                        <p className="text-gray-700">{item.quantity}*${item.price}</p>
                                    </div>
                                </div>
                                <IoIosCloseCircleOutline size={25} className="cursor-pointer bg-white rounded-full shadow-lg ml-4" />
                            </div>
                        )
                    })
                }
            </div>
            {/* End of Items */}
            {/* bottom Section */}
            <div className="absolute bottom-0 w-full px-4 py-4 bg-white">
                <div className="flex flex-col gap-4">
                    <hr className=" bg-gray-600 " />
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-gray-700 font-semibold">Total:</p>
                        <p className="text-gray-700 font-semibold">${total.toFixed(2)}</p>
                    </div>
                    <hr className=" bg-gray-600 " />
                    <div>
                        <button className="w-full text-white py-3 rounded-full bg-lime-600 hover:bg-lime-700 transition-colors duration-300 cursor-pointer">View cart</button>
                        <button onClick={()=>{navigate('/checkout');onClose()}} className="w-full  text-white py-3 rounded-full bg-lime-600 hover:bg-green-500 transition-colors duration-300 mt-2 cursor-pointer">Check out</button>
                    </div>
                </div>
            </div>
            {/* End of bottom Section */}
        </div>
    )
}
export default ShoppingCart;