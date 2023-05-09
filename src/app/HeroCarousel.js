// import Image from "next/image";
"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function HeroCarousel() {
    const settings = {
        autoPlay: true,
        autoPlayInterval: 4500,
        dots: true,
        disableButtonsControls: true,
        mouseTracking: true,
        infinite: true,
        speed: 200,
        slidesToScroll: 1,
    };
    return (
        <AliceCarousel {...settings}>
            <Link
                draggable="false"
                href="/"
                class="group relative flex px-12 items-center justify-center overflow-hidden bg-gray-100"
            >
                <Image
                    className="rounded-xl"
                    src="/1.jpg"
                    draggable="false"
                    width={1600}
                    height={300}
                    loading="lazy"
                    alt="Picture of the author"
                />
            </Link>
            <Link
                draggable="false"
                href="/"
                class="group relative flex px-12 items-center justify-center overflow-hidden bg-gray-100"
            >
                <Image
                    className="rounded-xl"
                    src="/2.jpg"
                    draggable="false"
                    width={1600}
                    height={300}
                    loading="lazy"
                    alt="Picture of the"
                />
            </Link>
        </AliceCarousel>
    );
}
