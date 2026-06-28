"use client";

import { motion } from "framer-motion";
import WeddingParticles from "@/components/Particles";

export default function LoveStory() {
    return (
        <section className="relative overflow-hidden bg-[#3d1010] px-6 py-16 md:py-24">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_75%)]" />

            <WeddingParticles />

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 mx-auto max-w-4xl"
            >
                <div className="rounded-[40px] border border-white/10 bg-white/[0.03] px-7 py-10 backdrop-blur-md md:px-16 md:py-16">

                    {/* Small Heading */}

                    <p className="mb-2 text-center font-body uppercase tracking-[0.45em] text-[#f0d8d2]/70 text-[11px] md:text-xs">
                        Our Journey
                    </p>

                    {/* Main Heading */}

                    <h2 className="font-mrs-saint-delafield text-center text-[4rem] leading-none text-[#fdf7f4] md:text-[6.5rem]">
                        Our Love Story
                    </h2>

                    <div className="mx-auto my-8 h-px w-24 bg-[#d9b5ab]/40" />

                    <div className="space-y-8 text-center">

                        <p className="font-heading text-[1.15rem] leading-[2.1rem] text-[#f7ece8] md:text-[1.55rem] md:leading-[2.7rem]">
                            He first saw her on a matrimonial site and wanted to know more.
                            A simple Instagram search led to an unexpected message. At first,
                            she let it pass, but eventually a small <span className="italic">"Hey"</span>
                            {" "}opened the door to countless conversations.
                        </p>

                        <p className="font-heading text-[1.15rem] leading-[2.1rem] text-[#f7ece8] md:text-[1.55rem] md:leading-[2.7rem]">
                            They shared their thoughts, dreams, and ambitions, turning endless
                            chats into an effortless connection. Though miles apart, they laughed
                            together, supported each other, and grew closer with each passing
                            day. One day, he flew from London to India, and soon their families
                            met.
                        </p>

                        <p className="font-heading text-[1.15rem] leading-[2.1rem] text-[#f7ece8] md:text-[1.55rem] md:leading-[2.7rem]">
                            With love, happiness, and blessings from their loved ones, a
                            beautiful new chapter began. What started with a matrimony profile
                            became the journey to finding their forever person.
                            <br />
                            <span className="mt-3 inline-block text-[1.35rem] italic md:text-[1.75rem]">
                                And now, they are getting married.
                            </span>
                        </p>

                    </div>

                    <div className="mx-auto mt-10 h-px w-24 bg-[#d9b5ab]/40" />

                </div>
            </motion.div>
        </section>
    );
}