import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <Image
                    draggable="false"
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>

            <div className="my-32 flex items-center justify-center">
                <Link className="btn" href="/test">
                    Link Test
                </Link>
            </div>
            <div className="h-[200vh]" />
        </main>
    );
}
