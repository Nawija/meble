import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center">
                <h1 className="mb-24">test page</h1>
                <Link className="btn" href="/">Strona Główna</Link>
            </div>
            <div className="h-[200vh]" />
        </main>
    );
}
