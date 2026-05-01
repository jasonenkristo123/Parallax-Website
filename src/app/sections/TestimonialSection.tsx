"use client";

import { useRef } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";


export default function TestimonialSection() {
    const vdRef = useRef<HTMLVideoElement[]>([]);


    const handlePlay = (index: number) => {
        const video = vdRef.current[index];
        video.play();

    };

    const handlePause = (index: number) => {
        const video = vdRef.current[index];
        video.pause();
    };

    useGSAP(() => {
        gsap.set(".testimonial-section", {
            marginTop: "-140vh"
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonial-section",
                start: "top bottom",
                end: "200% top",
                scrub: true
            }
        });

        tl.to(".testimonial-section .first-title", {
            xPercent: 70,
        }, "<").to(".testimonial-section .second-title", {
            xPercent: 25,
        }, "<").to(".testimonial-section .third-title", {
            xPercent: -50,
        }, "<");

        const pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: "testimonial-section",
                start: "10% top",
                end: "200% top",
                scrub: 1.5,
                pin: true,
            }
        });

        pinTl.from(".vd-card", {
            yPercent: 150,
            stagger: 0.2,
            ease: "power1.inOut",
        })
    })

    return (
        <section className="testimonial-section">
            <div className="absolute size-full flex flex-col items-center pt-[15vw]">
                <h1 className="text-black first-title">
                    What&apos;s
                </h1>
                <h1 className="text-light-brown second-title">
                    Everyone
                </h1>
                <h1 className="text-black third-title">
                    Saying
                </h1>

                <div className="pin-box">
                    {
                        cards.map((card, index) => (
                            <div key={index} className={`vd-card ${card.translation} ${card.rotation}`}>
                                <video 
                                    src={card.src} 
                                    playsInline 
                                    muted 
                                    loop 
                                    ref={(el) => {
                                        if(el) vdRef.current[index] = el;
                                    }}
                                    className="size-full object-cover" 
                                    onMouseEnter={() => handlePlay(index)}
                                    onMouseLeave={() => handlePause(index)}
                                />
                                

                            </div>
                        ))
                    }
                </div>
            </div>
            
        </section>
    )
}