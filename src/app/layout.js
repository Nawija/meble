import "../style/globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Meble",
    description: "Sklep Internetowy",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
            <head>
                {/* <link rel="shortcut icon" href="/favicon.ico"></link> */}
            </head>
            <body className={`${inter.className} max-w-[2000px] mx-auto`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
