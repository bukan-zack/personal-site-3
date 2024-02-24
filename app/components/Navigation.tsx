"use client";

import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Navigation() {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY >= 25);
        }

        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "w-full px-6 z-10 fixed top-0 h-20 flex items-center border-b border-transparent",
                "transition duration-500 ease-in-out",
                scrolled && "border-white/10 backdrop-blur-md bg-[#040418]/50"
            )}
        >
            <div className="container mx-auto overflow-hidden">
                <Link
                    className="text-white"
                    href="/"
                >
                    <motion.h1
                        className="uppercase text-white text-xl font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "easeInOut", duration: 0.5, delay: 0.8 }}
                    >
                        Zack (w/ cat)
                    </motion.h1>
                </Link>
            </div>
        </nav>
    );
}