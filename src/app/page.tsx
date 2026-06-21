"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import SaveTheDate from "@/components/SaveTheDate";
import Gallery from "@/components/Gallery";
import Closing from "@/components/Closing";

export default function Home() {
  const [loading, setLoading] = useState(true);

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
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <main className={loading ? "h-screen overflow-hidden" : undefined}>
        {loading ? sections : <SmoothScroll>{sections}</SmoothScroll>}
      </main>
    </>
  );
}
