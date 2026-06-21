"use client";

import { motion } from "framer-motion";

export default function SaveTheDate() {
  return (
    <section className="relative overflow-hidden bg-[#3d1010] px-6 py-24 md:py-32">
   
      <motion.div
        className="glass-card relative z-10 mx-auto max-w-lg rounded-2xl px-8 py-12 text-center text-accent-light md:px-12 md:py-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="font-body text-xs font-medium uppercase tracking-[0.45em] text-accent-rose">
          Save The Date
        </p>

        <h2 className="font-heading mt-6 text-4xl font-light tracking-wider md:text-5xl">
          12 &bull; 07 &bull; 2026
        </h2>

        <p className="font-heading mt-3 text-xl font-light italic text-accent-rose md:text-2xl">
          Sunday
        </p>

        <div className="mx-auto my-8 h-px w-20 bg-accent-rose/40" />

        <div className="space-y-1">
          <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-accent-rose/80">
            Muhurtham
          </p>
          <p className="font-heading text-xl font-light md:text-2xl">
            9:30 AM &ndash; 10:40 AM
          </p>
        </div>

        <div className="mt-8 space-y-1">
          <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-accent-rose/80">
            Venue
          </p>
          <p className="font-heading text-xl font-light md:text-2xl">
            Vasava Cliff House
          </p>
        </div>
      </motion.div>
    </section>
  );
}
