"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const completedRef = useRef(false);

  const finish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
  };

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3500);
    const fallbackTimer = setTimeout(finish, 4500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#3d1010]"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 1 }}
      onAnimationComplete={() => {
        if (fadeOut) finish();
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center"
      >
        <h1
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
        </h1>

        <p
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
        </p>

        <h1
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
        </h1>
      </motion.div>
    </motion.div>
  );
}