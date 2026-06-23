"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RosePetals from "@/components/Roses";

export default function Countdown() {
    const weddingDate = new Date("2026-07-12T09:30:00");

    const calculateTimeLeft = () => {
        const difference = weddingDate.getTime() - new Date().getTime();

        if (difference <= 0) {
            return null;
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),
            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),
            seconds: Math.floor(
                (difference / 1000) % 60
            ),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) {
        return (
            <div className="text-center">
                <h2 className="font-heading text-3xl text-primary">
                    The Celebration Has Begun ✨
                </h2>
            </div>
        );
    }

    const items = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
    ];

    return (
        <section className="py-16 relative overflow-hidden">
            <RosePetals />
            <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
                <p className="uppercase tracking-[0.3em] text-sm text-primary/70 mb-3">
                    Counting Down To Forever
                </p>

                <h2 className="font-heading text-4xl md:text-5xl text-primary mb-10">
                    July 12, 2026
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {items.map((item) => (
                        <motion.div
                            key={item.label}
                            whileHover={{ y: -5 }}
                            className="
                            glass-card 
                            rounded-3xl
                            bg-white/5     
                            backdrop-blur-[10px]
                            border border-white/10
                            p-6"
                        >
                            <div className="font-heading text-4xl md:text-6xl text-primary">
                                {String(item.value).padStart(2, "0")}
                            </div>

                            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-primary/70">
                                {item.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}