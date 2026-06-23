"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin, Heart } from "lucide-react";
import Link from "next/link";
import WeddingParticles from "@/components/Particles";


export default function WeddingDetails() {
  return (
    <section className="relative overflow-hidden bg-[#3d1010] px-6 py-24 md:py-32">
      <WeddingParticles />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/[0.04] px-6 py-14 backdrop-blur-sm md:px-16"
      >
        {/* Heading */}
        <p className="text-center text-xs uppercase tracking-[0.45em] text-white/60">
          Together With Their Families
        </p>

        {/* Names */}
        {/* Couple Details */}
        <div className="mt-12 flex flex-col items-center text-center">
          {/* Bride */}
          <div>
            <h2
              className="font-ephesis text-5xl text-white md:text-7xl"
            >
              Ashmitha Purushothaman
            </h2>

            <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#f3d0ca]">
              Daughter of
            </p>

            <p className="mt-2 text-sm font-medium text-white md:text-xl">
              Purushothaman M &amp; <br /> Sheeba Purushothaman
            </p>
          </div>

          {/* Weds Divider */}
          <div className="my-10 flex flex-col items-center">
            <div className="h-px w-24 bg-white/20" />

            <p className="my-4 text-sm font-medium uppercase tracking-[0.6em] text-[#f3d0ca]">
              Weds
            </p>

            <div className="h-px w-24 bg-white/20" />
          </div>

          {/* Groom */}
          <div>
            <h2
              className="font-ephesis text-5xl text-white md:text-7xl"
            >
              Rahul Sujathan
            </h2>

            <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#f3d0ca]">
              Son of
            </p>

            <p className="mt-2 text-sm font-medium text-white md:text-xl">
              Sujathan NG &amp; <br /> Prasanna Kumary Sujathan
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto my-12 h-px w-32 bg-white/15" />

        {/* Event Details */}
        <div className="grid gap-10 text-center md:grid-cols-3">
          {/* Date */}
          <div>
            <CalendarDays
              size={28}
              className="mx-auto mb-4 text-[#f3d0ca]"
            />

            <p className="text-xs uppercase tracking-[0.3em] text-[#f3d0ca]">
              Wedding
            </p>

            <h3 className="mt-2 text-2xl text-white">
              12 July 2026
            </h3>

            <p className="mt-1 text-white/70">
              Sunday
            </p>
          </div>

          {/* Time */}
          <div>
            <Clock3
              size={28}
              className="mx-auto mb-4 text-[#f3d0ca]"
            />

            <p className="text-xs uppercase tracking-[0.3em] text-[#f3d0ca]">
              Muhurtham
            </p>

            <h3 className="mt-2 text-2xl text-white">
              9:30 AM – 10:40 AM
            </h3>
          </div>

          {/* Venue */}
          <div className="cursor-pointer">
            <Link href="https://maps.app.goo.gl/Miy8vWVxRXZ5kd3t9" target="_blank">
            <MapPin
              size={28}
              className="mx-auto mb-4 text-[#f3d0ca]"
            />

            <p className="text-xs uppercase tracking-[0.3em] text-[#f3d0ca]">
              Venue
            </p>

            <h3 className="mt-2 text-2xl text-white">
              Wasava Cliff House
              </h3>
            </Link>
          </div>
          
        </div>
        
      </motion.div>
    </section>
  );
}