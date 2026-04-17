"use client"
import { useRef } from "react"
import AnimatedHeader from "./components/AnimatedHeader";

export default function Home() {

  const container = useRef(null);

  return (
    <main className="w-screen min-h-screen ">
      <section className="flex items-center justify-center h-screen bg-base-100">
        <AnimatedHeader>
          <h1 className="text-center text-base-200 ">
            Lorem ipsum dolor sit
          </h1>
        </AnimatedHeader>
      </section>
      <section className="flex items-center justify-center h-screen bg-base-300">
        <AnimatedHeader>
          <h1 className="text-center text-base-400 ">
            Lorem ipsum dolor sit
          </h1>
        </AnimatedHeader>
      </section>
      <section className="flex items-center justify-center h-screen bg-base-500">
        <AnimatedHeader>
          <h1 className="text-center text-base-600 ">
            Lorem ipsum dolor sit
          </h1>
        </AnimatedHeader>
      </section>
    </main>
  );
}