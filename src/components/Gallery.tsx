"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import RosePetals from "@/components/Roses";

interface GalleryImage {
  src: string;
  alt: string;
  note?: string;
  featured?: boolean;
}

const GALLERY_IMAGES = [
  // {
  //   src: "/images/firstmeet.png",
  //   alt: "First Meet",
  //   note: "The day everything changed",
  //   featured: true,
  // },
  // {
  //   src: "/images/pennukanal1.png",
  //   alt: "Pennukanal",
  //   note: "Families met, hearts smiled",
  //   featured: true,
  // },
  // {
  //   src: "/images/pennukanal2.png",
  //   alt: "Pennukanal",
  //   note: "A beautiful beginning",
  //   featured: true,
  // },
  // {
  //   src: "/images/temple.png",
  //   alt: "Temple Visit",
  //   note: "Blessed together",
  //   featured: true,
  // },
  // {
  //   src: "/images/mirror.png",
  //   alt: "Mirror",
  //   note: "Moments of Us",
  //   featured: true,
  // },

  {
    src: "/images/gallery1.png",
    alt: "Memory 1",
  },
  {
    src: "/images/gallery3.png",
    alt: "Memory 2",
  },
  {
    src: "/images/gallery4.png",
    alt: "Memory 3",
  },
  {
    src: "/images/gallery10.png",
    alt: "Memory 4",
  },
  {
    src: "/images/gallery9.png",
    alt: "Memory 5",
  },
  {
    src: "/images/gallery7.png",
    alt: "Memory 6",
  },
  {
    src: "/images/gallery6.png",
    alt: "Memory 7",
  },
  {
    src: "/images/gallery5.png",
    alt: "Memory 8",
  },
  {
    src: "/images/gallery8.png",
    alt: "Memory 9",
  },
];

function GalleryItem({
  src,
  alt,
  index,
  note,
  featured,
}: {
  src: string;
  alt: string;
  index: number;
  note?: string;
  featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["-6%", "6%"]
  );

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl
      ${featured
          ? "border border-[#d7b8b0]/40 shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
          : ""
        }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
      }}
    >
      <motion.div
        style={{ y }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-[4/5] overflow-hidden"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700"
          sizes="(max-width:768px) 50vw, 33vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {note && (
        <motion.div
          initial={{
            opacity: 0,
            rotate: -6,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            rotate: -3,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-4 left-4"
        >
          <div className="rounded-lg bg-[#fffaf6]/90 px-4 py-2 shadow-xl backdrop-blur-sm">
            <p className="font-mrs-saint-delafield text-2xl text-[#814a45] md:text-3xl">
              {note}
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-accent-light">
      <RosePetals />

      <div className="relative z-10 bg-white/5 backdrop-blur-[6px] px-4 py-24 md:px-8 md:py-32">
        <motion.p
          className="mb-3 text-center text-xs uppercase tracking-[0.45em] text-primary/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Chapters Of Our Journey
        </motion.p>

        <motion.h2
          className="font-mrs-saint-delafield mb-16 text-center text-6xl text-primary md:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Moments of Us
        </motion.h2>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryItem
              key={image.src}
              src={image.src}
              alt={image.alt}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}