"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);

    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-[#3d1010]"
        initial={{ opacity: 1 }}
        animate={{
          opacity: opening ? 0 : 1,
          scale: opening ? 1.05 : 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="text-center px-6"
          animate={{
            opacity: opening ? 0 : 1,
            y: opening ? -40 : 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Image
              src="/images/ar.png"
              alt="Ashmitha & Rahul"
              width={800}
              height={800}
              priority
              className="
        w-[250px]
      h-auto
      object-contain
    "
    sizes="(max-width: 768px) 100vw, 800px"
            />
          </motion.div>

          <motion.button
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            onClick={handleOpen}
            className="
              mt-10
              px-8
              py-3
              rounded-full
              border
              border-white/30
              bg-white/10
              backdrop-blur-md
              text-white
              uppercase
              tracking-[0.25em]
              text-sm
              hover:bg-white
              hover:text-[#3d1010]
              transition-all
              duration-500
            "
          >
            View Invitation
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}