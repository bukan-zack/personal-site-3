"use client";

import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Navigation({
    animate,
}: {
    animate?: boolean;
}) {
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
                "w-full z-10 fixed top-0 h-20 flex items-center border-b border-transparent",
                "transition duration-500 ease-in-out",
                scrolled && "border-[#3E362F]/20 backdrop-blur-md bg-[#E7DBD6]/50"
            )}
        >
            <motion.div
                className="uppercase text-xl px-6 container mx-auto overflow-hidden flex justify-between"
                initial={animate && { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "easeInOut", duration: 0.3, delay: 0.9 }}
            >
                <div className="font-bold">
                    <Link href="/">
                        Zack (w/o cat)
                    </Link>
                </div>
                <div className="font-semibold">
                    <Link href="/about">
                        About
                    </Link>
                </div>
            </motion.div>
        </nav>
    );
}