"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "30%"]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0%", "-15%"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Desktop / Tablet Image */}
      <motion.div
        className="absolute -top-[100px] left-0 hidden h-[150vh] w-full md:block"
        style={{ y: imageY }}
      >
        <Image
          src="/images/heromain.png"
          alt="Ashmitha and Rahul"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 767px) 0vw, 100vw"
        />
      </motion.div>

      {/* Mobile Image */}
      <motion.div
        className="absolute  left-0 h-[100vh] w-full md:hidden"
        style={{ y: imageY }}
      >
        <Image
          src="/images/heromainmobile.png"
          alt="Ashmitha and Rahul"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.p
            variants={itemVariants}
            className="font-heading text-5xl font-light tracking-wide md:text-7xl lg:text-8xl"
          >
            Ashmitha
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="my-2 font-heading text-3xl font-light text-accent-rose md:text-5xl"
          >
            &
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-heading text-5xl font-light tracking-wide md:text-7xl lg:text-8xl"
          >
            Rahul
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <div className="h-px w-16 bg-accent-rose/60" />

            <p className="font-body text-xs font-light uppercase tracking-[0.4em] text-accent-light/90 md:text-sm">
              Forever Begins
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}