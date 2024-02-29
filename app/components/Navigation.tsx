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
                "w-full z-[100] fixed top-0 h-20 flex items-center",
                "transition duration-[400ms] ease-in-out",
                scrolled && "backdrop-blur-lg bg-[#E7DBD6]/60"
            )}
        >
            <motion.div
                className="px-6 container mx-auto overflow-hidden flex justify-between items-center"
                initial={animate && { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "easeInOut", duration: 0.4, delay: 1 }}
            >
                <div className="text-xl md:text-2xl uppercase font-bold">
                    <Link href="/">
                        Zack (w/o cat)
                    </Link>
                </div>
                <div className="font-semibold flex items-center gap-8">
                    <Link href="/about">
                        About
                    </Link>
                    <Link href="/resume">
                        Resume
                    </Link>
                </div>
            </motion.div>
        </nav>
    );
}
