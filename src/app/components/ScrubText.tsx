"use client"
import React, { useRef, ReactElement } from "react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./SplitText.css";
import { gsap } from "gsap";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function ScrubText({ 
    children, 
    stagger = 0.05
}: { 
    children: ReactElement<{ className?: string }>, 
    stagger?: number
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

        // The newest trick in GSAP! Advanced staggers tied natively to ScrollTrigger
        gsap.from(splitRef.current.chars, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
                end: "top 45%",
                scrub: true,
                markers: true
            },
            x: 100,
            opacity: 0,
            skewX: 20,
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
