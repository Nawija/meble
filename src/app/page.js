// import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import CardCarousel from "./CardCarousel"


export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between">
            <HeroCarousel />
            <CardCarousel />

            <div className="my-32 flex items-center justify-center">
                <Link className="btn" href="/test">
                    Link Test
                </Link>
            </div>
            <div className="h-[200vh]" />
        </main>
    );
}
