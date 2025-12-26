import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/normal-header.svg'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaShoppingBag } from "react-icons/fa";
import { CgClose, CgMenuLeftAlt } from "react-icons/cg";
import { useState } from 'react';
import ShoppingCart from './ShoppingCart';
import { CiLogin } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { SlLogout } from "react-icons/sl";
import { LogoutUser } from '../features/user/userSlice';
import { toast } from 'react-toastify'

const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const User = useSelector((state) => state.user);
    const [isShowMobileMenu, setShowMobileMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const NavLinks = [
        { path: "/", text: "Home" },
        { path: "/shop", text: "Shop" },
        { path: "/about", text: "About" },
        { path: "/contact", text: "Contact" }
    ]


    console.log("NavBar User:", User.user, User?.user?.Email);

    const Logout = () => {
        //debugger;
        dispatch(LogoutUser());
        navigate("/login");
        toast.success("Logged out successfully");
    }

    return (
        <nav className={` shadow-md fixed z-20  bg-white flex flex-row items-center justify-between px-4 py-4 w-full`}>
            <img src={logo} alt="logo" />
            {
                !isShowMobileMenu ?
                    <CgMenuLeftAlt onClick={() => setShowMobileMenu(!isShowMobileMenu)} size={40} className='md:hidden cursor-pointer' /> :
                    <CgClose size={40} onClick={() => setShowMobileMenu(!isShowMobileMenu)} className='md:hidden cursor-pointer' />
            }
            {/* for mobile  */}
            {
                isShowMobileMenu &&
                <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center  gap-6 py-6 text-lg animate-slideDown md:hidden">
                    <ul className='flex flex-col items-center gap-8 '>
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
                        <Link onClick={() => setShowCart(!showCart)} className='hover:text-green-400 text-black'>
                            <FaShoppingBag />
                        </Link>
                    </li>
                    {User?.user &&
                        <li>
                            <span className='font-bold bg-green-400 rounded-full p-2'>{User?.user?.Email[0].toUpperCase()}</span>
                        </li>
                    }
                    <li>
                        <Link to="/login" className='hover:text-green-400 text-black hover:cursor-pointer'>
                            {User?.user ? <div className="relative group">
                                <SlLogout onClick={() => Logout()} size={25} className="cursor-pointer" />

                                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 
                                 bg-black text-white text-xs px-2 py-1 rounded
                                   opacity-0 group-hover:opacity-100
                                    transition">
                                    Logout
                                </span>
                            </div> :
                                <div className="relative group">
                                    <CiLogin size={25} className='cursor-pointer' />
                                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 
                                 bg-black text-white text-xs px-2 py-1 rounded
                                   opacity-0 group-hover:opacity-100
                                    transition">
                                        Login
                                    </span>
                                </div>
                            }
                        </Link>
                    </li>
                </ul>
            </div>
            {/* end of desktop */}
            {
                showCart &&
                <div className="hidden md:block fixed inset-0 bg-black/40 opacity-100 overflow-y-auto">
                    <ShoppingCart open={showCart} onClose={() => setShowCart(false)} />
                </div>
            }
        </nav>
    )
}
export default NavBar;