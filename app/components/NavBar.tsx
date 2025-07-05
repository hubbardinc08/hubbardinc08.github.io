"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import NavLink from "./NavLink"
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
    { title: "About", path: "/about" },
    { title: "Hockey", path: "/hockey" },
    { title: "Astronomy", path: "/astronomy" },
    { title: "Music", path: "/music" },
    { title: "Other", path: "/other" }
];

const NavBar = () => {
    const pathname = usePathname();
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#ffffff] bg-opacity-100 backdrop-blur-sm">
            <div className="flex items-center justify-between mx-auto px-4 py-2">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png" // <-- Replace with your logo path
                        alt="Logo"
                        width={100}             // <-- Adjust size as needed
                        height={100}
                        className="mr-2 -ml-2 px-3 py-2 "
                    />
                </Link>

                {/* Hamburger menu button for mobile */}
                <button 
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="md:hidden flex items-center px-3 py-2 h-12 border rounded border-black text-black hover:text-black hover:border-black cursor-pointer"
                    aria-label="Toggle menu"
                >
                    {navbarOpen ? (
                        <XMarkIcon className="h-5 w-5" />
                    ) : (
                        <Bars3Icon className="h-5 w-5" />
                    )}
                </button>

                {/* Navigation links */}
                <div className={`${navbarOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`} id="navbar">
                    <ul className="flex flex-col md:flex-row p-4 md:p-0 md:space-x-8 mt-0 mr-6">
                        
                        {navLinks.map((link, index) => {
                            const backPages = ["/hockey", "/astronomy", "/music", "/other"];
                            if (backPages.includes(pathname) && pathname === link.path) {
                                // show back button in replace
                                return (
                                    <li key={`back-${link.title}`} className="my-2 md:my-0">
                                        <Link
                                            href="/"
                                            className="flex items-center text-blue-600 hover:underline"
                                        >
                                            <span className="mr-1">←</span> Back
                                        </Link>
                                    </li>
                                );
                            }
                          
                            return (
                                <li key={index} className="my-2 md:my-0">
                                    <Link href={link.path}>{link.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};


export default NavBar;

{/*This is the original implementation of the NavBar component.
const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#ffffff] bg-opacity-100 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className="text-2xl md:text-5xl text-black font-semibold">
                    LOGO
                </Link>
                
                
                <button 
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="md:hidden flex items-center px-3 py-2 border rounded border-black text-black hover:text-black hover:border-black cursor-pointer"
                    aria-label="Toggle menu"
                >
                    {navbarOpen ? (
                        <XMarkIcon className="h-5 w-5" />
                    ) : (
                        <Bars3Icon className="h-5 w-5" />
                    )}
                </button>

    
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

*/}
