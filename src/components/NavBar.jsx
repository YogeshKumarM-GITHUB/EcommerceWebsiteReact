import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/header-logo.svg'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaShoppingBag } from "react-icons/fa";
import { CgClose, CgMenuLeftAlt } from "react-icons/cg";
import { useState } from 'react';

const NavBar = () => {
    const [isShowMobileMenu, setShowMobileMenu] = useState(false);
    const NavLinks = [
        { path: "/", text: "Home" },
        { path: "/shop", text: "Shop" },
        { path: "/about", text: "About" },
        { path: "/contact", text: "Contact" }
    ]
    return (
        <nav className="fixed z-20  flex flex-row items-center justify-between px-4 md:px-40 py-4 w-full">
            <img src={logo} alt="logo" className='text-white' />
            {
                !isShowMobileMenu ?
                    <CgMenuLeftAlt onClick={() => setShowMobileMenu(!isShowMobileMenu)} size={40} className='md:hidden cursor-pointer' /> :
                    <CgClose size={40} onClick={() => setShowMobileMenu(!isShowMobileMenu)} className='md:hidden cursor-pointer' />
            }
            {/* for mobile  */}
            {
                isShowMobileMenu &&
                <div className="absolute top-[64px] left-0 w-full bg-white shadow-lg flex flex-col items-center  gap-6 py-6 text-lg animate-slideDown md:hidden">
                    <ul className='flex flex-col items-center gap-8'>
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
                </div>
            }
            {/* end of mobile */}
            {/* for desktop */}
            <div className='hidden md:flex flex-row items-center 
                           justify-between  gap-2 text-[18px]'>
                <ul className='flex flex-row items-center gap-8'>
                    {
                        NavLinks.map((link, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={link.path} className={({ isActive }) =>
                                        `text-white hover:text-green-400 ${isActive ? "text-green-400" : ""}`
                                    }>{link.text}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className='flex flex-row items-center gap-6 ml-4'>
                    <li>
                        <Link className='hover:text-green-400 text-white'>
                            <FaFacebook />
                        </Link>
                    </li>
                    <li>
                        <Link className='hover:text-green-400 text-white'>
                            <FaInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link className='hover:text-green-400 text-white'>
                            <GrYoutube />
                        </Link>
                    </li>
                    <li>
                        <Link className='hover:text-green-400 text-white'>
                            <FaShoppingBag />
                        </Link>
                    </li>
                </ul>
            </div>
            {/* end of desktop */}
        </nav>
    )
}
export default NavBar;