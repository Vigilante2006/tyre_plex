"use client";
import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';
import { navMenu } from '../data/navdata';

const HeadBar = () => {
    // State to manage mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // State to track the currently active menu item
    const [activeMenu, setActiveMenu] = useState(null);

    // Function to toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Function to handle mouse enter events for dropdown menus
    const handleMouseEnter = (menuName) => {
        setActiveMenu(menuName);
    };

    // Function to handle mouse leave events for dropdown menus
    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    return (
        <header className="bg-white  shadow rounded-md mb-5 text-zinc-950">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo and navigation container */}
                <div className="flex items-center">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold">
                        <Link href="https://www.tyreplex.com/">
                            <Image
                                src="/TP-logo.webp"
                                alt="Tyre Plex"
                                width={100}
                                height={24}
                                priority
                            />
                        </Link>
                    </h1>
                    {/* Desktop navigation */}
                    <nav className="ml-8 hidden md:flex space-x-4 items-center">
                        {navMenu.map((menuItem) => (
                            <div
                                key={menuItem.menuName}
                                className="relative"
                                onMouseEnter={() => menuItem.dropdown && handleMouseEnter(menuItem.menuName)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {menuItem.dropdown ? (
                                    <button
                                        className={`relative border-b-2 ${activeMenu === menuItem.menuName ? 'border-red-700' : 'border-transparent'} hover:border-red-700 hover:text-black focus:outline-none`}
                                    >
                                        {menuItem.menuName}
                                    </button>
                                ) : (
                                    <Link
                                        href={menuItem.link}
                                        className={`relative border-b-2 ${activeMenu === menuItem.menuName ? 'border-red-700' : 'border-transparent'} hover:border-red-700 hover:text-black focus:outline-none`}
                                    >
                                        {menuItem.menuName}
                                    </Link>
                                )}
                                {/* Dropdown menu */}
                                {menuItem.dropdown && activeMenu === menuItem.menuName && (
                                    <div className="absolute left-0 w-48 bg-white rounded-md shadow-lg z-20">
                                        {menuItem.subMenu.map((subMenuItem) => (
                                            <a
                                                key={subMenuItem.subMenuName}
                                                href={subMenuItem.link}
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                            >
                                                {subMenuItem.subMenuName}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
                {/* Login button for desktop */}
                <div className="hidden md:block">
                    <Link
                        href="https://www.tyreplex.com/login"
                        className="bg-transparent text-black hover:text-red-700 focus:outline-none"
                    >
                        Login
                    </Link>
                </div>
                {/* Mobile menu toggle button */}
                <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none ml-4">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        ></path>
                    </svg>
                </button>
            </div>
            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <nav className="md:hidden fixed inset-0 bg-white z-30">
                    <div className="flex flex-col space-y-2 p-4">
                        {/* Close Button */}
                        <button onClick={toggleMobileMenu} className="self-end mb-4">
                            <svg
                                className="w-6 h-6 text-black"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                        {navMenu.map((menuItem) => (
                            <div key={menuItem.menuName} className="relative">
                                {menuItem.dropdown ? (
                                    <button
                                        onClick={() => handleMouseEnter(menuItem.menuName)}
                                        className={`relative border-b-2 ${activeMenu === menuItem.menuName ? 'border-red-700' : 'border-transparent'} hover:border-red-700 hover:text-black focus:outline-none w-full text-left`}
                                    >
                                        {menuItem.menuName}
                                    </button>
                                ) : (
                                    <Link
                                        href={menuItem.link}
                                        className={`relative border-b-2 ${activeMenu === menuItem.menuName ? 'border-red-700' : 'border-transparent'} hover:border-red-700 hover:text-black focus:outline-none w-full text-left`}
                                    >
                                        {menuItem.menuName}
                                    </Link>
                                )}
                                {menuItem.dropdown && activeMenu === menuItem.menuName && (
                                    <div className="mt-2 w-full bg-white rounded-md shadow-lg z-20">
                                        {menuItem.subMenu.map((subMenuItem) => (
                                            <a
                                                key={subMenuItem.subMenuName}
                                                href={subMenuItem.link}
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                            >
                                                {subMenuItem.subMenuName}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div>
                            <Link
                                href="https://www.tyreplex.com/login"
                                className="bg-transparent text-black hover:text-red-700 focus:outline-none"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default HeadBar;
