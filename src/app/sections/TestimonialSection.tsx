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
        gsap.set(".testimonials-section", {
            marginTop: "-140vh",
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "top bottom",
                end: "200% top",
                scrub: true,
            },
        });

        tl.to(".testimonials-section .first-title", {
            xPercent: 70,
        })
            .to(
                ".testimonials-section .sec-title",
                {
                    xPercent: 25,
                },
                "<"
            )
            .to(
                ".testimonials-section .third-title",
                {
                    xPercent: -50,
                },
                "<"
            );

        const pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "10% top",
                end: "200% top",
                scrub: 1.5,
                pin: true,
            },
        });

        pinTl.from(".vd-card", {
            yPercent: 150,
            stagger: 0.2,
            ease: "power1.inOut",
        });
    });

    return (
        <section className="testimonials-section">
            <div className="absolute size-full flex flex-col items-center pt-[5vw]">
                <h1 className="text-[#f1f5f9] first-title">What&apos;s</h1>
                <h1 className="text-[#cbd5e1] sec-title">Everyone</h1>
                <h1 className="text-[#f1f5f9] third-title">Talking</h1>
            </div>

            <div className="pin-box">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`vd-card ${card.translation} ${card.rotation}`}
                        onMouseEnter={() => handlePlay(index)}
                        onMouseLeave={() => handlePause(index)}
                    >
                        <video
                            ref={(el) => {
                                if (el) vdRef.current[index] = el;
                            }}
                            src={card.src}
                            playsInline
                            muted
                            loop
                            className="size-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}