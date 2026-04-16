"use client"
import gsap from "gsap";
import { useRef } from "react"
import { useGSAP } from "@gsap/react";


export default function Home() {

  const container = useRef(null);



  useGSAP(() => {
    gsap.fromTo('.box', {
      y: 0,
    }, {
      y: -100,
      duration: 3,
      repeat: -1,
      yoyo: true,
    })
  }, {
    scope: container
  })

  return (
    <main className="w-screen min-h-screen bg-slate-800 flex items-center justify-center">
      <section ref={container} className="flex items-center justify-center gap-10">
        <div className="rounded-full box bg-slate-400 w-24 h-24 relative">
            <h1 className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl">
              Ball 1
            </h1>
        </div>
      </section>
    </main>
  );
}
