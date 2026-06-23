"use client";

import { motion } from "framer-motion";
import WeddingParticles from "@/components/Particles";


const story = [
    "He came across this girl",
    "And wanted to know more.",

    "One Instagram search.",
    "To an unexpected message.",

    "At first, she let it pass.",
    "Then a 'Hey'.",

    "Sharing their thoughts,",
    "Dreams and ambitions.",

    "From endless conversations.",
    "To an effortless connection.",

    "Laughing together.",
    "Miles apart, yet closer every day.",

    "One day,",
    "He flew from London to India.",

    "What started online.",
    "Became beautifully real.",

    "Soon, our families met.",
    "And their happiness meant everything.",

    "With love and blessings,",
    "A new chapter began.",

    "From a matrimony profile.",
    "To finding my forever person.",

    "And now,",
    "We're getting married.",
];

export default function LoveStory() {
    return (
        <section className="relative overflow-hidden bg-[#3d1010] px-6 py-28 md:px-12 md:py-40">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]" />

            {/* Particles */}

            <WeddingParticles />

            <motion.div
                className="relative z-10 mx-auto max-w-4xl text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 text-xs uppercase tracking-[0.45em] text-[#f3d0ca]/70"
                >
                    Our Journey
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="font-great-vibes mb-16 text-6xl text-white md:text-8xl"
                >
                    Our Love Story
                </motion.h2>

                <div className="space-y-8 bg-white/1 backdrop-blur-[5px]  p-6 rounded-3xl" >

                    {story.map((line, index) => (
                        <motion.p
                            key={index}
                            className="font-medium text-base leading-relaxed text-[#fdf4f1] md:text-2xl"
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.7 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.05,
                            }}
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>

                <motion.div
                    className="mt-20 flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="h-px w-32 bg-[#f3d0ca]/30" />
                </motion.div>
            </motion.div>
        </section>
    );
}