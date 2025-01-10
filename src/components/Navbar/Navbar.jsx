import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.module.css';

export default function Navbar() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <nav className="bg-[#2c3e50] border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">

                <div className="logo">
                    <h2>
                        <Link className="text-decoration-none font-extrabold text-xl md:text-4xl uppercase hover:text-white text-white" to="/">
                            Start FrameWork
                        </Link>
                    </h2>
                </div>


                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center mx-2 p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuVisible}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>


                <div
                    className={`${isMenuVisible ? 'block' : 'hidden'
                        } w-full md:block p-3 md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-1 gap-3 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                        <li className="text-lg mx-4 text-white font-extrabold">
                            <NavLink
                                className="text-decoration-none hover:text-white text-uppercase text-white"
                                to="about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="text-lg mx-4 text-white font-extrabold">
                            <NavLink
                                className="text-decoration-none hover:text-white text-uppercase text-white"
                                to="portfolio"
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="text-lg mx-4 text-white font-extrabold">
                            <NavLink
                                className="text-decoration-none hover:text-white text-uppercase text-white"
                                to="contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
