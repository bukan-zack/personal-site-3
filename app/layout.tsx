import { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Zackry Rosli",
    description: "A self-motivated Go expert from Sarawak, Malaysia, with 4 years of experience. Passionate about crafting innovative solutions with precision.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${GeistMono.variable} font-mono bg-[#E7DBD6] text-[#3E362F] mt-4 md:text-xl`}>
                {children}
                <p className="my-6 text-sm text-center">
                    &copy; {new Date().getFullYear()} Zackry Rosli. All rights reserved.
                </p>
            </body>
        </html>
    );
}
