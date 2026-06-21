"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const LINES = ["ASHMITHA", "WEDS", "RAHUL"];

export default function Loader({ onComplete }: LoaderProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const completedRef = useRef(false);

  const finish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
  };

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3000);
    const fallbackTimer = setTimeout(finish, 4000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(fallbackTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (fadeOut) finish();
      }}
    >
      <div className="flex flex-col items-center gap-1 md:gap-2">
        {LINES.map((line) => (
          <span
            key={line}
            className="loader-fill-text font-body text-4xl font-light tracking-[0.35em] md:text-6xl lg:text-7xl"
            data-text={line}
          >
            {line}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
