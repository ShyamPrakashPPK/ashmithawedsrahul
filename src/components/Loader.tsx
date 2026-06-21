"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              font-[var(--font-yesteryear)]
              text-white
              text-6xl
              md:text-8xl
              lg:text-[8rem]
              leading-none
            "
          >
            Ashmitha
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
              font-[var(--font-yesteryear)]
              text-white/80
              text-lg
              md:text-xl
              tracking-[0.5em]
              my-3
            "
          >
            WEDS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="
              font-[var(--font-yesteryear)]
              text-white
              text-6xl
              md:text-8xl
              lg:text-[8rem]
              leading-none
            "
          >
            Rahul
          </motion.h1>

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