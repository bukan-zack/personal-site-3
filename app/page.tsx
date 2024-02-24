"use client";

import { motion } from "framer-motion";

export default function Page() {
    return (
        <main>
            <section className="container mx-auto px-6 flex flex-col justify-center items-center min-h-screen text-center">
                <div className="overflow-hidden">
                    <motion.h1
                        className="uppercase text-white text-6xl md:text-8xl font-bold"
                        initial={{ opacity: 0, translateY: 100 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: "easeInOut", duration: 0.5 }}
                    >
                        Zackry Rosli
                    </motion.h1>
                </div>
                <div className="overflow-hidden mt-2 max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, translateY: 100 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: "easeInOut", duration: 1, delay: 0.4 }}
                    >
                        A self-motivated Go expert from Sarawak, Malaysia, with 4 years of experience.
                        Passionate about crafting innovative solutions with precision.
                    </motion.p>
                </div>
            </section>
            <section
                className="overflow-hidden py-10 bg-[#05051D] shadow-md"
            >
                <motion.div
                    className="px-6 text-center container mx-auto flex flex-col items-center justify-center"
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "easeInOut", duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p>
                        Collaborated with leading brands, delivering impactful results through innovative strategies.
                    </p>
                    <div className="grid grid-cols-1 mt-6">
                        <img
                            src="/berrybyte.svg"
                            className="h-12"
                        />
                    </div>
                </motion.div>
            </section>
            <section className="mt-24 px-6 py-8 container mx-auto overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "easeInOut", duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="uppercase text-white text-4xl md:text-6xl font-bold">
                        Work
                    </h2>
                    <p className="mt-2">
                        Explore a curated collection of my professional achievements and collaborations with industry-leading brands.
                    </p>
                    <div className="mt-6 grid md:grid-cols-2 gap-4">
                        <img src="https://imadqadri.dev/static/work/berry-website.jpeg" />
                        <img src="https://imadqadri.dev/static/work/berry-website.jpeg" />
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
