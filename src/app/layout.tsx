import "./globals.css";

import type { Metadata } from "next";

import { poppins } from "@/constants/fonts";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Background from "@/components/background";

export const metadata: Metadata = {
    title: "The Mozilla Campus Club of IIT",
    description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${poppins.variable} max-w-full `}>
            <body className="relative h-[100vh] w-full">
                <Nav />
                <main className="relative max-w-full flex flex-col pt-24 containerify">
                    {children}
                </main>
                <Footer />
                <Background />
            </body>
        </html>
    );
}
