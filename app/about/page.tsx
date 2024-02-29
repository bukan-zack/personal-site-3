"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/app/components/Navigation";

export default function Page() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen">
                <section className="container mx-auto mt-24 px-6 py-8 flex flex-col justify-center items-center gap-2">
                    <div className="overflow-hidden">
                        <motion.p
                            initial={{ opacity: 0, translateY: 100 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ type: "easeInOut", duration: 0.4 }}
                        >
                            Hey there! I am software developer hailing from Sarawak, Malaysia. My journey into the fascinating realm of programming kicked off in 2018, and it is been a passion-filled adventure ever since.
                        </motion.p>
                    </div>
                    <div className="overflow-hidden">
                        <motion.p
                            initial={{ opacity: 0, translateY: 100 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ type: "easeInOut", duration: 0.4, delay: 0.2 }}
                        >
                            Currently, I am in cahoots with the caffeine addicts over at BerryByte Limited.  If you are curious about what we are brewing up, feel free to check out BerryByte Limited - they are making waves, and it is worth a peek!
                        </motion.p>
                    </div>
                    <div className="overflow-hidden">
                        <motion.p
                            initial={{ opacity: 0, translateY: 100 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ type: "easeInOut", duration: 0.4, delay: 0.4 }}
                        >
                            If you are keen on teaming up or just want to shoot the breeze, feel free to hit me up anytime. Let&apos;s make the tech world even more exciting together!
                        </motion.p>
                    </div>
                </section>
            </main>
        </>
    );
}