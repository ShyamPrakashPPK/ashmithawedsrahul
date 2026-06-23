"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import RosePetals from "@/components/Roses";

const GALLERY_IMAGES = [
  { src: "/images/gallery1.png", alt: "Ashmitha and Rahul moment 1" },
  { src: "/images/gallery2.png", alt: "Ashmitha and Rahul moment 2" },
  { src: "/images/gallery3.png", alt: "Ashmitha and Rahul moment 3" },
  { src: "/images/gallery4.png", alt: "Ashmitha and Rahul moment 4" },
  { src: "/images/gallery5.png", alt: "Ashmitha and Rahul moment 5" },
  { src: "/images/gallery6.png", alt: "Ashmitha and Rahul moment 6" },
];

function GalleryItem({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <motion.div
      ref={ref}
      className="mb-3 break-inside-avoid overflow-hidden rounded-sm md:mb-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div style={{ y }} className="overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={800}
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-accent-light ">

      <RosePetals />

      <div className="relative z-10 bg-white/1 backdrop-blur-[5px]  px-4 py-20 md:px-8 md:py-28">

        <motion.h2
          className="font-heading mb-12 text-center text-4xl font-light tracking-wide text-primary md:mb-16 md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Moments of Us
        </motion.h2>

        <div className="mx-auto max-w-6xl columns-2 gap-3 md:columns-3 md:gap-4">
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
