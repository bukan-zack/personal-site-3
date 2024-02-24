"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Navigation } from "@/app/components/Navigation";

const contacts = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="2.1em" height="2.1em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75">
                </path>
            </svg>,
        href: "mailto:me@zackryrosli.com",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 448 512">
                <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9z">
                </path>
            </svg>,
        href: "https://www.linkedin.com/in/zackry-rosli",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 496 512">
                <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8M97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2">
                </path>
            </svg>,
        href: "https://github.com/zackrsli"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512">
                <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z">
                </path>
            </svg>,
        href: "https://twitter.com/zack0x25",
    },
];

const brands = [
    {
        image: "/brands/berrybyte.svg",
        href: "https://berrybyte.net",
    },
    {
        image: "/brands/lusory.jpeg",
        href: "https://lusory.net",
    },
    {
        image: "/brands/ultraservers.svg",
        href: "https://ultraservers.com",
    },
    {
        image: "/brands/crunchbits.svg",
        href: "https://crunchbits.com",
    },
];

const works = [
    {
        name: "BerryByte Landing Page",
        image: "/works/berry-website.jpeg",
    },
    {
        name: "BerryByte Dashboard Auth Page",
        image: "/works/berry-shell-auth.png",
    },
    {
        name: "AwesomeMY",
        image: "/works/awesome-my.png",
    },
];

export default function Page() {
    return (
        <>
            <Navigation animate />
            <main>
                <section className="container mx-auto px-6 flex flex-col justify-center items-center min-h-screen text-center">
                    <div className="overflow-hidden">
                        <motion.h1
                            className="uppercase text-7xl md:text-8xl font-bold tracking-tight"
                            initial={{ opacity: 0, translateY: 100 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ type: "easeInOut", duration: 0.3 }}
                        >
                            Zackry Rosli
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden mt-2 max-w-4xl">
                        <motion.p
                            initial={{ opacity: 0, translateY: 100 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ type: "easeInOut", duration: 0.3, delay: 0.3 }}
                        >
                            A self-motivated Go expert from Sarawak, Malaysia, with 4 years of experience.
                            Passionate about crafting innovative solutions with precision.
                        </motion.p>
                    </div>
                    <div className="overflow-hidden mt-8">
                        <motion.div
                            className="grid grid-cols-4 gap-4"
                            initial={{ opacity: 0, translateY: 100 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ type: "easeInOut", duration: 0.3, delay: 0.6 }}
                        >
                            {contacts.map((contact, i) => (
                                <Link href={contact.href} target="_blank" key={i}>
                                    {contact.icon}
                                </Link>
                            ))}
                        </motion.div>
                    </div>
                </section>
                <section
                    className="overflow-hidden bg-[#3E362F] text-[#E7DBD6] h-72 py-8 shadow-md"
                >
                    <motion.div
                        className="h-full justify-between px-6 text-center container mx-auto flex flex-col items-center"
                        initial={{ opacity: 0, translateY: 100 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ type: "easeInOut", duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p className="max-w-4xl">
                            Collaborated with leading brands, delivering impactful results through innovative strategies.
                        </p>
                        <div>
                            <Marquee
                                gradientColor="#3E362F"
                                gradientWidth="40%"
                                gradient
                                pauseOnHover
                                autoFill
                            >
                                {brands.map((brand, i) => (
                                    <Link href={brand.href} key={i} target="_blank">
                                        <img
                                            src={brand.image}
                                            className="h-12 mx-8" />
                                    </Link>
                                ))}
                            </Marquee>
                        </div>
                        <p className="max-w-4xl text-xs italic">
                            *Collaborations with some of the aforementioned brands may be facilitated by Lusory Limited.
                        </p>
                    </motion.div>
                </section>
                <section className="mt-12 px-6 py-8 container mx-auto overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, translateY: 100 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ type: "easeInOut", duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="uppercase text-[#3E362F] text-5xl md:text-6xl font-bold">
                            Work
                        </h2>
                        <p className="mt-2">
                            Explore a curated collection of my professional achievements and collaborations with industry-leading brands.
                        </p>
                        <div className="mt-6 grid md:grid-cols-2 gap-4">
                            {works.map((work, i) => (
                                <div
                                    className="md:h-80 relative rounded-lg w-full bg-[#3E362F] group overflow-hidden"
                                    key={i}
                                >
                                    <div
                                        className="z-[69] absolute inset-0 flex-col items-center justify-center opacity-0 group-hover:opacity-100 flex transition ease-in-out duration-500 delay-100"
                                    >
                                        <div className="max-w-xs md:max-w-4xl">
                                            <p className="text-center text-[#e0d1cb]">
                                                {work.name}
                                            </p>
                                        </div>
                                    </div>
                                    <img
                                        className="h-full rounded-lg object-cover w-full object-center group-hover:opacity-40 transition ease-in-out duration-500 group-hover:scale-110 group-hover:blur-sm"
                                        src={work.image} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>
            </main>
        </>
    );
}
