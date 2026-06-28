"use client";

import { motion } from "framer-motion";
import WeddingParticles from "@/components/Particles";

const story = [
    `He first saw her on a matrimonial site and wanted to know more. A simple Instagram search led to an unexpected message. At first, she let it pass, but eventually a small "Hey" opened the door to countless conversations.`,

    `They shared their thoughts, dreams, and ambitions, turning endless chats into an effortless connection. Though miles apart, they laughed together, supported each other, and grew closer with each passing day. One day, he flew from London to India, and soon their families met.`,

    `With love, happiness, and blessings from their loved ones, a beautiful new chapter began. What started with a matrimony profile became the journey to finding their forever person. And now, they are getting married.`,
];

export default function LoveStory() {
    return (
        <section className="relative overflow-hidden bg-[#3d1010] px-6 py-20 md:px-12 md:py-28">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_75%)]" />

            {/* Floating Particles */}
            <WeddingParticles />

            <motion.div
                className="relative z-10 mx-auto max-w-5xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                {/* Story Card */}
                <div className="rounded-[36px] border border-white/10 bg-white/[0.04] px-7 py-10 backdrop-blur-md md:px-16 md:py-16">

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-3 text-center font-body text-[11px] uppercase tracking-[0.45em] text-[#f4d8d1]/70 md:text-xs"
                    >
                        Love Story
                    </motion.p>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="font-mrs-saint-delafield text-center text-[4rem] leading-none text-[#fffaf8] md:text-[6.5rem]"
                    >
                        How it Started
                    </motion.h2>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto my-8 h-px w-24 origin-center bg-[#d8b3a8]/50"
                    />

                    {/* Story */}
                    <div className="mx-auto max-w-3xl space-y-10 md:space-y-12">
                        {story.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                    scale: 0.98,
                                    filter: "blur(8px)",
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    filter: "blur(0px)",
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.55,
                                }}
                                transition={{
                                    duration: 1.15,
                                    delay: index * 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="font-heading text-center text-[1.18rem] leading-[2.15rem] text-[#f9f1ed] md:text-[1.55rem] md:leading-[2.75rem]"
                            >
                                {index === 2 ? (
                                    <>
                                        {paragraph.replace(
                                            "And now, they are getting married.",
                                            ""
                                        )}

                                        <span className="mt-5 block font-mrs-saint-delafield text-[2.3rem] leading-none text-[#fff] md:text-[3.3rem]">
                                            And now,
                                        </span>

                                        <span className="mt-2 block text-[1.3rem] italic md:text-[1.7rem]">
                                            They are getting married.
                                        </span>
                                    </>
                                ) : (
                                    paragraph
                                )}
                            </motion.p>
                        ))}
                    </div>

                    {/* Bottom Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mx-auto mt-12 h-px w-24 origin-center bg-[#d8b3a8]/50"
                    />
                </div>
            </motion.div>
        </section>
    );
}