"use client"
import React, { useRef, ReactElement } from "react";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import "./SplitText.css";
import { gsap } from "gsap";

gsap.registerPlugin(SplitText);

export default function FadeIntText({
    children,
    delay,
    stagger = 0.05,
    duration = 1,
}: {
    children: ReactElement<{className?: string}>,
    delay?: number,
    stagger?: number,
    duration?: number
}) {
    const containerRef = useRef<HTMLElement>(null);
    const splitRef = useRef<SplitText | null>(null);

    useGSAP(() => {
        if (!containerRef) return;

        splitRef.current = SplitText.create(containerRef.current, {
            type: "lines, words, chars",
            linesClass: "line",
            wordsClass: "word",
            charsClass: "char",
        });

        gsap.from(splitRef.current.words, {
            scrollTrigger: {
                trigger: containerRef.current,
                markers: true,
            },
            x: 100,
            skewX: 30,
            opacity: 0,
            duration: 2,
            delay: 0,
            ease: "power3.out",
            stagger: {
                each: stagger,
                from: "start",
            }
        })

        return () => splitRef.current?.revert();
    })
    
    return React.cloneElement(children as ReactElement<{className?: string, ref?: React.Ref<HTMLElement>}>,
        // eslint-disable-next-line react-hooks/refs
        {
            ref: containerRef,
            className: [children.props.className, "animated-text"].filter(Boolean).join(" "),
        });
}
