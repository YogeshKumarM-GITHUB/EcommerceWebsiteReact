import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaShoppingBag } from "react-icons/fa";

const FollowUs=()=>{
    return(
        <div className="bg-[#E9F1CB]  text-center mt-10 p-20">
            <p className='text-[20px] md:text-3xl font-bold'>Follow us @Urban Jungle Co.</p>
            <div className='flex flex-row items-center justify-center gap2'>
                  <FaFacebook size={30} className='m-2 hover:text-blue-600 cursor-pointer'/>
                  <FaInstagram size={30} className='m-2 hover:text-pink-600 cursor-pointer'/>
                  <GrYoutube size={30} className='m-2 hover:text-red-600 cursor-pointer'/>
                  <FaShoppingBag size={30} className='m-2 hover:text-green-600 cursor-pointer'/>
            </div>
        </div>
    )
}
export default FollowUs;