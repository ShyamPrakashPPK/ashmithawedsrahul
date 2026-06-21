"use client";

import { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";

import Hero from "@/components/Hero";
import SaveTheDate from "@/components/SaveTheDate";
import Gallery from "@/components/Gallery";
import Closing from "@/components/Closing";

import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [playMusic, setPlayMusic] = useState(false);

  useEffect(() => {
    if (loading) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [loading]);

  const handleOpenInvitation = () => {
    setPlayMusic(true);

    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  const sections = (
    <>
      <Hero />
      <SaveTheDate />
      <Gallery />
      <Closing />
    </>
  );

  return (
    <>
      {loading && (
        <Loader
          onComplete={handleOpenInvitation}
        />
      )}

      <MusicPlayer shouldPlay={playMusic} />

      <main className={loading ? "h-screen overflow-hidden" : undefined}>
        {loading ? sections : <SmoothScroll>{sections}</SmoothScroll>}
      </main>
    </>
  );
}