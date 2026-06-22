"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TOTAL_PETALS = 40;

export default function RosePetals() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const width = container.offsetWidth;
        const height = container.offsetHeight;

        const random = (min: number, max: number) =>
            min + Math.random() * (max - min);

        const petals: HTMLDivElement[] = [];

        gsap.set(container, {
            perspective: 800,
        });

        for (let i = 0; i < TOTAL_PETALS; i++) {
            const petal = document.createElement("div");

            petal.className = "rose-petal";

            const size = random(18, 40);

            gsap.set(petal, {
                width: size,
                height: size,
                opacity: random(0.4, 1),
                x: random(0, width),
                y: random(-300, -50),
                rotation: random(0, 360),
            });

            container.appendChild(petal);
            petals.push(petal);

            animatePetal(petal, width, height);
        }

        function animatePetal(
            petal: HTMLDivElement,
            width: number,
            height: number
        ) {
            gsap.to(petal, {
                y: height + 200,
                duration: random(8, 16),
                ease: "none",
                repeat: -1,
                delay: random(-15, 0),
            });

            gsap.to(petal, {
                x: `+=${random(-120, 120)}`,
                rotation: random(180, 720),
                duration: random(4, 8),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(petal, {
                rotationX: random(0, 360),
                rotationY: random(0, 360),
                duration: random(3, 8),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }

        return () => {
            petals.forEach((petal) => petal.remove());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        />
    );
}