"use client";
import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Hockey",
        path: "#hockey",
    },
    {
        title: "Astronomy",
        path: "#astronomy",
    },
    {
        title: "Music",
        path: "#music",
    },
    {
        title: "Other",
        path: "#other",
    }
]

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#ffffff] bg-opacity-60 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className="text-2xl md:text-5xl text-black font-semibold">
                    LOGO
                </Link>
                
                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="md:hidden flex items-center px-3 py-2 border rounded border-black text-black hover:text-black hover:border-black"
                    aria-label="Toggle menu"
                >
                    {navbarOpen ? (
                        <XMarkIcon className="h-5 w-5" />
                    ) : (
                        <Bars3Icon className="h-5 w-5" />
                    )}
                </button>

                {/* Nav Links */}
                <div className={`${navbarOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`} id="navbar">
                    <ul className="flex flex-col md:flex-row p-4 md:p-0 md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index} className="my-2 md:my-0">
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;