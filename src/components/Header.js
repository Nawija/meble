"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const iconColor = "#5a5962";
    const menuBtnShowClose =
        "flex flex-col fixed right-0 top-0 h-screen w-4/5 md:w-1/2 bg-gray-200 lg:bg-transparent justify-center items-center translate-transform duration-200 lg:w-auto lg:h-auto lg:static lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-x-5";

    const [showMenu, setMenu] = useState(false);
    const closeMenu = () => setMenu(false);
    const handleMenu = () => setMenu(!showMenu);

    return (
        <header className="bg-white relative overflow-hidden text-gray-900  z-50">
            <div className=" flex max-w-screen-2xl mx-auto items-center justify-between px-3 sm:px-10 py-4 overflow-hidden w-full z-50">
                <Link
                    href="/"
                    className=" hover:bg-transparent -tracking-wide md:text-lg sm:text-2xl font-bold"
                >
                    DESIGNO
                </Link>

                <div className="relative w-4/5">
                    <input
                        type="search"
                        id="search"
                        name="search"
                        placeholder="szukaj produktu"
                        className="w-[95%] bg-white border-b border-gray-400 rounded-xl mx-3 sm:mx-10 px-4 py-1.5 text-[14px] -tracking-wide font-medium"
                    />
                    <button class="absolute right-6 top-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            
                            width="24"
                            height="24"
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
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                            <path d="M21 21l-6 -6"></path>
                        </svg>
                    </button>
                </div>
                <Link
                    href="tel:570037077"
                    className="mx-5 fixed lg:static flex px-2 lg:px-5 lg:mr-5 bottom-5 right-0 text-white bg-emerald-600 lg:bg-transparent font-semibold text-[12px] md:text-sm lg:text-black md:hover:text-gray-100 md:hover:bg-emerald-600 border-2 rounded-full lg:rounded-3xl border-emerald-500 items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 lg:w-4 lg:mr-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path
                            d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
                            stroke-width="0"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <p className="hidden lg:flex">570037077</p>
                </Link>
                <button
                    aria-label="Menu"
                    onClick={handleMenu}
                    className={
                        showMenu
                            ? "fixed right-3 sm:right-10 group lg:hidden bg-gray-100 p-2.5 transition-colors duration-200 z-50 rounded-lg"
                            : "right-6 group lg:hidden bg-gray-100 p-2.5 transition-colors duration-200 z-50 rounded-lg"
                    }
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
            <div className=" lg:flex font-bold uppercase max-w-screen-xl mx-auto hidden items-start justify-around">
                <Link className="px-7 py-4" href="/">
                    meble
                </Link>
                <Link className="px-7 py-4 bg-amber-400" href="/">
                    promocje
                </Link>
                <Link className="px-7 py-4" href="/">
                    od ręki
                </Link>
                <Link className="px-7 py-4" href="/">
                    meble
                </Link>
                <Link className="px-7 py-4" href="/">
                    kontakt
                </Link>
            </div>
        </header>
    );
}
