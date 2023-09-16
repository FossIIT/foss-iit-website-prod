import "./globals.css";

import type { Metadata } from "next";
import Image from "next/image";

import { poppins } from "@/constants/fonts";

import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Mozilla IIT",
    description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${poppins.variable} max-w-full `}>
            <body className="relative h-[100vh] w-full">
                <Nav />
                <div className="absolute top-0 z-10 pt-32">
                    {children}
                    <Footer />
                </div>
                <div className="absolute top-0 z-0 h-[100vh] w-full">
                    <Image
                        alt=""
                        src="/background.png"
                        fill={true}
                        quality={100}
                        className="z-0 object-cover object-top"
                    />
                </div>
            </body>
        </html>
    );
}
