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
            0: { items: 4 },
            568: { items: 4 },
            1024: { items: 6 },
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
        <div className="w-full h-32 max-w-screen-xl mx-auto px-5 mt-6">
            <AliceCarousel {...settings}>
                <Link
                    draggable="false"
                    href="/"
                    class="relative flex items-end justify-center rounded-full hover:bg-transparent"
                >
                    <Image
                        className="h-12 w-12 md:h-24 md:w-24 rounded-full"
                        src="/n1.jpg"
                        draggable="false"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Picture of the"
                    />
                    <div className="-ml-6 text-sm">
                    </div>
                </Link>
                <Link
                    draggable="false"
                    href="/"
                    class="relative flex items-end justify-center rounded-full hover:bg-transparent"
                >
                    <Image
                        className="h-12 w-12 md:h-24 md:w-24 rounded-full"
                        src="/fotel.png"
                        draggable="false"
                        width={200}
                        height={200}
                        loading="lazy"
                        alt="Picture of the"
                    />
                    <div className="-ml-6 text-sm">
                    </div>
                </Link>
                <Link
                    draggable="false"
                    href="/"
                    class="relative flex items-end justify-center rounded-full hover:bg-transparent"
                >
                    <Image
                        className="h-12 w-12 md:h-24 md:w-24 rounded-full"
                        src="/fotel.png"
                        draggable="false"
                        width={200}
                        height={200}
                        loading="lazy"
                        alt="Picture of the"
                    />
                    <div className="-ml-6 text-sm">
                    </div>
                </Link>
                <Link
                    draggable="false"
                    href="/"
                    class="relative flex items-end justify-center rounded-full hover:bg-transparent"
                >
                    <Image
                        className="h-12 w-12 md:h-24 md:w-24 rounded-full"
                        src="/fotel.png"
                        draggable="false"
                        width={200}
                        height={200}
                        loading="lazy"
                        alt="Picture of the"
                    />
                    <div className="-ml-6 text-sm">
                    </div>
                </Link>
                <Link
                    draggable="false"
                    href="/"
                    class="relative flex items-end justify-center rounded-full hover:bg-transparent"
                >
                    <Image
                        className="h-12 w-12 md:h-24 md:w-24 rounded-full"
                        src="/fotel.png"
                        draggable="false"
                        width={200}
                        height={200}
                        loading="lazy"
                        alt="Picture of the"
                    />
                    <div className="-ml-6 text-sm">
                    </div>
                </Link>
                <Link
                    draggable="false"
                    href="/"
                    class="relative flex items-end justify-center rounded-full hover:bg-transparent"
                >
                    <Image
                        className="h-12 w-12 md:h-24 md:w-24 rounded-full"
                        src="/fotel.png"
                        draggable="false"
                        width={200}
                        height={200}
                        loading="lazy"
                        alt="Picture of the"
                    />
                    <div className="-ml-6 text-sm">
                    </div>
                </Link>
            </AliceCarousel>
        </div>
    );
}
