import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/normal-header.svg'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaShoppingBag } from "react-icons/fa";

const Footer = () => {
    const NavLinks = [
        { path: "/", text: "Home" },
        { path: "/shop", text: "Shop" },
        { path: "/about", text: "About" },
        { path: "/contact", text: "Contact" }
    ]
    return (
        <div className='bg-[#E9F1CB]  w-full'>
        <footer className=" flex flex-col md:flex-row items-center justify-between px-4 py-4 max-w-7xl mx-auto gap-y-4 md:gap-y-0">

            <img src={logo} alt="logo" className='text-black' />
            {/* for desktop */}
            <div className='flex flex-col md:flex-row items-center 
                           justify-between  gap-2 text-[18px]'>
                <ul className='flex flex-row items-center gap-8'>
                    {
                        NavLinks.map((link, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={link.path} className={({ isActive }) =>
                                        `text-black hover:text-green-400 ${isActive ? "text-green-400" : ""}`
                                    }>{link.text}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className='flex flex-row items-center gap-6 ml-4'>
                    <li>
                        <Link className='hover:text-green-400 text-black'>
                            <FaFacebook />
                        </Link>
                    </li>
                    <li>
                        <Link className='hover:text-green-400 text-black'>
                            <FaInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link className='hover:text-green-400 text-black'>
                            <GrYoutube />
                        </Link>
                    </li>
                    <li>
                        <Link className='hover:text-green-400 text-black'>
                            <FaShoppingBag />
                        </Link>
                    </li>
                </ul>
                <hr/>
                
            </div>
            
            {/* end of desktop */}
        </footer>
        <p className='text-gray-800 text-center font-bold'>Copyright ©{new Date().getFullYear()} Generic eCommerce</p>
    </div>
    )
}
export default Footer;