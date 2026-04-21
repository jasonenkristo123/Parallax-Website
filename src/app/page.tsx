"use client"

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { gsap } from "gsap";
import MessageSection from "./sections/MessageSection";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
    </main>
  );
}