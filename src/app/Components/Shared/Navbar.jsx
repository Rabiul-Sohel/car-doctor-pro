"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    const pathName = usePathname()
    const session = useSession()
    const navItems = [
        {
            text: "Home",
            path: "/"
        },
        {
            text: "About",
            path: "/about"
        },
        {
            text: "Services",
            path: "/services"
        },
        {
            text: "My Bookings",
            path: `/my-booking/${session?.data?.user?.email}`
        },
        {
            text: "Blog",
            path: "/blog"
        },
        {
            text: "Contact",
            path: "/contact"
        },
    ]
   

    return (
        <div className=' bg-base-100 text-slate-900 py-2'>
            <div className="navbar container mx-auto flex items-center  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navItems.map((item, idx) =>
                                    <li key={idx}>
                                        <Link href={item.path}> {item.text} </Link>
                                    </li>)
                            }
                        </ul>
                    </div>
                    <Link href='/' className="btn btn-ghost text-xl ">
                        <Image width={10} height={10} className='w-20 pb-3' alt='Logo image' src="/assets/logo.svg" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5">
                        {
                            navItems.map((item, idx) =>
                                <li className={`${pathName === item.path && 'text-primary'} hover:text-primary duration-300 font-semibold`} key={idx}>
                                    <Link href={item.path}> {item.text} </Link>
                                </li>)
                        }
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <HiOutlineShoppingBag className='text-2xl' />
                    <IoSearchOutline className='text-2xl' />
                    <a className="btn btn-outline btn-primary px-8">Appointment</a>
                </div>
                {
                    session.status === 'loading' && <span>Loading....</span>
                }
                {
                    session.status === 'unauthenticated' && <Link href='/login'>
                    <button className='btn btn-primary ml-2 px-5'>Login</button>
                </Link>
                }
                {
                    session.status === 'authenticated' && <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image
                            width={20} 
                            height={20}
                                alt={session.data?.user?.name}
                                src={'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' }/>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><button onClick={()=> signOut()}>Logout</button></li>
                    </ul>
                </div>
                }
            </div>
            <div className='divider'></div>
        </div >
    );
  
    
};

export default Navbar;