"use client"
import React, { useRef, ReactElement } from "react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./SplitText.css";
import { gsap } from "gsap";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function ScrollFadeText({
    children,
    delay = 0,
    stagger = 0.05,
    duration = 0.65
}: {
    children: ReactElement<{ className?: string }>,
    delay?: number,
    stagger?: number,
    duration?: number
}) {
    const containerRef = useRef<HTMLElement>(null);
    const splitRef = useRef<SplitText | null>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        splitRef.current = SplitText.create(containerRef.current, {
            type: "lines, words, chars",
            linesClass: "line",
            wordsClass: "word",
            charsClass: "char",
        });

        gsap.from(splitRef.current.chars, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                markers: true,
                toggleActions: "restart pause reverse pause" // Plays when entering, reverses when leaving
            },
            x: 100,
            opacity: 0,
            skewX: 30,
            duration: duration,
            delay: delay,
            ease: "power3.out",
            stagger: {
                each: stagger,
                from: "start"
            }
        });

        return () => splitRef.current?.revert();
    }, { scope: containerRef });

    // eslint-disable-next-line react-hooks/refs
    return React.cloneElement(children as ReactElement<{ className?: string, ref?: React.Ref<HTMLElement> }>, {
        ref: containerRef,
        className: [children.props.className, "animated-text"].filter(Boolean).join(" "),
    });
}
