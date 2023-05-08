"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [showMenu, setMenu] = useState(false);
    const closeMenu = () => setMenu(false);
    const handleMenu = () => setMenu(!showMenu);

    const menuBtnShowHidden = showMenu
        ? "flex flex-col space-y-5 absolute top-0 left-0 w-full h-1/2 items-center justify-center bg-white z-50 -translate-y-full translate-transform duration-200"
        : "flex flex-col space-y-5 absolute translate-transform duration-200 top-0 left-0 w-full h-1/2 items-center justify-center bg-white z-50";

    return (
        <header className="flex items-center justify-between font-bold m-4">
            <p className="z-[999]">Designo</p>
            <button
                aria-label="Menu"
                onClick={handleMenu}
                className="group bg-gray-100 p-2.5 transition-colors duration-200 z-[999] rounded-lg"
            >
                <div
                    className={
                        showMenu
                            ? "w-5 h-1 transition-all duration-200 bg-slate-700 m-1 rounded-lg"
                            : "w-5 h-1 transition-all duration-200 bg-slate-700 m-1 translate-y-2 rotate-45 rounded-lg"
                    }
                />
                <div
                    className={
                        showMenu
                            ? "w-3 h-1 transition-all duration-200 bg-slate-700 m-1 rounded-lg"
                            : "w-3 h-1 transition-all duration-200 bg-slate-700 m-1 opacity-0"
                    }
                />
                <div
                    className={
                        showMenu
                            ? "w-5 h-1 transition-all duration-200 bg-slate-700 m-1 rounded-lg"
                            : "w-5 h-1 transition-all duration-200 bg-slate-700 m-1 -translate-y-2 -rotate-45 rounded-lg"
                    }
                />
            </button>
            <ul className={menuBtnShowHidden}>
                <li>
                    <Link onClick={closeMenu} href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={closeMenu} href="/test">
                        Test
                    </Link>
                </li>
            </ul>
        </header>
    );
}
