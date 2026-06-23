"use client";

import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 70 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 1 + Math.random() * 5,
    duration: 10 + Math.random() * 5,
    delay: Math.random() * 5,
}));

export default function WeddingParticles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {PARTICLES.map((p) => (
                <motion.span
                    key={p.id}
                    className="absolute rounded-full bg-[#f3d0ca]"
                    style={{
                        left: `${p.left}%`,
                        width: p.size,
                        height: p.size,
                        top: -50,
                        opacity: 0.6,
                    }}
                    animate={{
                        y: [0, 1800],
                        x: [0, 20, -20, 10, 0],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}