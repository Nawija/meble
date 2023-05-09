"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const iconColor = "#5a5962";
    const menuBtnShowClose =
        "flex flex-col absolute right-0 top-0 h-screen w-4/5 md:w-1/2 bg-gray-200 lg:bg-transparent justify-center items-center translate-transform duration-200 lg:w-auto lg:h-auto lg:static lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-x-5";

    const [showMenu, setMenu] = useState(false);
    const closeMenu = () => setMenu(false);
    const handleMenu = () => setMenu(!showMenu);

    return (
        <header className="sticky top-0 bg-white text-gray-900 z-50">
            <div className=" flex items-center justify-between px-3 sm:px-10 py-4 w-full overflow-hidden">
                <Link
                    href="/"
                    className=" hover:bg-transparent tracking-wide text-xl sm:text-2xl font-bold"
                >
                    DESIGNO
                </Link>
                <input
                    type="search"
                    id="search"
                    name="search"
                    placeholder="szukaj produktu"
                    className="w-full bg-white border border-gray-400 rounded-xl mx-3 sm:mx-10 px-4 py-1.5 text-[14px] -tracking-wide font-medium"
                />
                <button
                    aria-label="Menu"
                    onClick={handleMenu}
                    className="group lg:hidden bg-gray-100 p-2.5 transition-colors duration-200 z-50 rounded-lg"
                >
                    <div
                        style={{ background: iconColor }}
                        className={
                            !showMenu
                                ? `w-5 h-1 transition-all duration-200 m-1 rounded-lg`
                                : `w-5 h-1 transition-all duration-200 m-1 translate-y-2 rotate-45 rounded-lg`
                        }
                    />
                    <div
                        style={{ background: iconColor }}
                        className={
                            !showMenu
                                ? `w-3 h-1 transition-all duration-200 m-1 rounded-lg`
                                : `w-3 h-1 transition-all duration-200 m-1 opacity-0`
                        }
                    />
                    <div
                        style={{ background: iconColor }}
                        className={
                            !showMenu
                                ? `w-5 h-1 transition-all duration-200 m-1 rounded-lg`
                                : `w-5 h-1 transition-all duration-200 m-1 -translate-y-2 -rotate-45 rounded-lg`
                        }
                    />
                </button>
                <div
                    className={
                        showMenu
                            ? `${menuBtnShowClose}`
                            : `${menuBtnShowClose} translate-x-full lg:translate-x-0`
                    }
                >
                    <Link href="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class=" h-5 w-5"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke={iconColor}
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                        </svg>
                    </Link>
                    <Link onClick={closeMenu} href="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class=" h-5 w-5"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke={iconColor}
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                        </svg>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        href="/"
                        className="flex items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="mr-3 h-5 w-5"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke={iconColor}
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <path
                                d="M12.684 3.27l.084 .09l4.7 5.64h3.532a1 1 0 0 1 .991 1.131l-.02 .112l-1.984 7.918c-.258 1.578 -1.41 2.781 -2.817 2.838l-.17 .001l-10.148 -.002c-1.37 -.053 -2.484 -1.157 -2.787 -2.57l-.035 -.185l-2 -8a1 1 0 0 1 .857 -1.237l.113 -.006h3.53l4.702 -5.64a1 1 0 0 1 1.452 -.09zm-.684 8.73a3 3 0 0 0 -2.98 2.65l-.015 .174l-.005 .176l.005 .176a3 3 0 1 0 2.995 -3.176zm0 -6.438l-2.865 3.438h5.73l-2.865 -3.438z"
                                stroke-width="0"
                                fill={iconColor}
                            ></path>
                        </svg>
                        <p className="font-semibold text-sm mt-1">Koszyk</p>
                    </Link>
                </div>
            </div>
        </header>
    );
}
