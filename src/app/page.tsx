"use client"

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { gsap } from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true
    })
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
        </div>
      </div>
    </main>
  );
}