"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { id: 0, left: "8%", delay: "0s", duration: "14s", size: "3px" },
  { id: 1, left: "15%", delay: "1.2s", duration: "18s", size: "4px" },
  { id: 2, left: "22%", delay: "2.5s", duration: "12s", size: "2px" },
  { id: 3, left: "31%", delay: "0.8s", duration: "16s", size: "5px" },
  { id: 4, left: "38%", delay: "3.1s", duration: "20s", size: "3px" },
  { id: 5, left: "45%", delay: "1.7s", duration: "11s", size: "4px" },
  { id: 6, left: "52%", delay: "4.2s", duration: "15s", size: "2px" },
  { id: 7, left: "58%", delay: "0.3s", duration: "19s", size: "3px" },
  { id: 8, left: "64%", delay: "2.9s", duration: "13s", size: "5px" },
  { id: 9, left: "71%", delay: "1.1s", duration: "17s", size: "4px" },
  { id: 10, left: "77%", delay: "3.6s", duration: "14s", size: "2px" },
  { id: 11, left: "83%", delay: "0.6s", duration: "21s", size: "3px" },
  { id: 12, left: "90%", delay: "2.2s", duration: "12s", size: "4px" },
  { id: 13, left: "5%", delay: "4.8s", duration: "16s", size: "3px" },
  { id: 14, left: "27%", delay: "3.3s", duration: "18s", size: "2px" },
  { id: 15, left: "48%", delay: "1.9s", duration: "15s", size: "5px" },
  { id: 16, left: "68%", delay: "0.1s", duration: "13s", size: "3px" },
  { id: 17, left: "86%", delay: "2.7s", duration: "20s", size: "4px" },
  { id: 18, left: "12%", delay: "5.1s", duration: "11s", size: "2px" },
  { id: 19, left: "35%", delay: "4.4s", duration: "17s", size: "3px" },
  { id: 20, left: "55%", delay: "1.4s", duration: "19s", size: "4px" },
  { id: 21, left: "74%", delay: "3.8s", duration: "14s", size: "2px" },
  { id: 22, left: "42%", delay: "0.9s", duration: "16s", size: "5px" },
  { id: 23, left: "61%", delay: "2.4s", duration: "12s", size: "3px" },
  { id: 24, left: "95%", delay: "4.1s", duration: "18s", size: "4px" },
];

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

export default function Closing() {
  return (
    <section className="relative overflow-hidden bg-[#3d1010] px-6 py-28 md:py-36">
      <Particles />

      <motion.div
        className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 text-center text-accent-light"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="font-body text-xs font-light uppercase tracking-[0.35em] text-accent-rose/80">
          Together with their families
        </p>

        <h2 className="font-heading text-5xl font-light tracking-wide md:text-7xl">
          Ashmitha &amp; Rahul
        </h2>

        <div className="h-px w-16 bg-accent-rose/40" />

        <p className="font-heading text-lg font-light italic leading-relaxed text-accent-rose md:text-xl">
          request the pleasure
          <br />
          of your presence
        </p>

        <p className="font-heading mt-4 text-2xl font-light tracking-wider md:text-3xl">
          12 July 2026
        </p>
      </motion.div>
    </section>
  );
}
