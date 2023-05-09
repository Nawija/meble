// import Image from "next/image";
"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function CardCarousel() {
    const settings = {
        responsive: {
            0: { items: 1 },
            568: { items: 2 },
            1024: { items: 5 },
        },
        swipeDelta: 4,
        dots: false,
        disableButtonsControls: true,
        disableDotsControls: true,
        mouseTracking: true,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        autoWidth: false,
        autoHeight: false,
    };
    return (
        <AliceCarousel {...settings}>
            <Link
                draggable="false"
                href="/"
                class="relative flex items-center justify-center rounded-full hover:bg-transparent"
            >
                <Image
                    className="h-40 w-40 rounded-full"
                    src="/naroznik.png"
                    draggable="false"
                    width={400}
                    height={400}
                    loading="lazy"
                    alt="Picture of the"
                />
            </Link>
            <Link
                draggable="false"
                href="/"
                class="relative flex items-center justify-center rounded-full hover:bg-transparent"
            >
                <Image
                    className="h-40 w-40 rounded-full"
                    src="/naroznik.png"
                    draggable="false"
                    width={400}
                    height={400}
                    loading="lazy"
                    alt="Picture of the"
                />
            </Link>
            <Link
                draggable="false"
                href="/"
                class="relative flex items-center justify-center rounded-full hover:bg-transparent"
            >
                <Image
                    className="h-40 w-40 rounded-full"
                    src="/fotel.png"
                    draggable="false"
                    width={400}
                    height={400}
                    loading="lazy"
                    alt="Picture of the"
                />
                <div className="-ml-6">
                <p className="font-semibold">Fotele</p>
                <p>Zobacz Więcej</p>
                </div>
            </Link>
            <Link
                draggable="false"
                href="/"
                class="relative flex items-center justify-center rounded-full hover:bg-transparent"
            >
                <Image
                    className="h-40 w-40 rounded-full"
                    src="/2.jpg"
                    draggable="false"
                    width={400}
                    height={400}
                    loading="lazy"
                    alt="Picture of the"
                />
            </Link>
            <Link
                draggable="false"
                href="/"
                class="relative flex items-center justify-center rounded-full hover:bg-transparent"
            >
                <Image
                    className="h-40 w-40 rounded-full"
                    src="/1.jpg"
                    draggable="false"
                    width={400}
                    height={400}
                    loading="lazy"
                    alt="Picture of the"
                />
            </Link>
        </AliceCarousel>
    );
}
