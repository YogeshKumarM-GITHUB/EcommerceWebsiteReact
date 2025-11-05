import { MdPayment } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";


const PackageDetails = () => {
    const packDetails = [
        {
            icon: <MdPayment size={40} />,
            MainText: 'Secure Payment',
            LowerText: 'Elementum feugiat diam'
        },
        {
            icon: <MdLocalShipping size={40} />,
            MainText: 'Free Shipping',
            LowerText: 'For $50 order'
        },
        {
            icon: <FaBox size={40} />,
            MainText: 'Delivered with Care',
            LowerText: 'Lacinia pellentesque leo'
        },
        {
            icon: <IoIosHeartEmpty size={40} />,
            MainText: 'Excellent Service',
            LowerText: 'Blandit gravida viverra'
        }
    ]

    return (
            <div className="md:mt-8 max-w-7xl mx-auto  gap-10 grid grid-cols-1 md:grid-cols-4 items-center justify-center">
                {
                    packDetails.map((item, index) => {
                        return (
                            <div className="w-auto h-auto   flex flex-col items-center justify-center py-4 md:py-0" key={index}>
                                <div className="bg-[#ECF4D3] rounded-full p-4">
                                    {item.icon}
                                </div>
                                <h3 className="mt-2 font-semibold text-lg text-center">{item.MainText}</h3>
                                <p className="text-gray-500 text-sm text-center">{item.LowerText}</p>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default PackageDetails;