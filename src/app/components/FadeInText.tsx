"use client"
import React, { useRef, ReactElement } from "react";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import "./SplitText.css";
import { gsap } from "gsap";

gsap.registerPlugin(SplitText);

export default function FadeInText({ 
    children, 
    delay = 0, 
    stagger = 0.5, 
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

        gsap.from(splitRef.current.words, {
            x: 100,
            opacity: 0,
            skewX: 20,
            duration: duration,
            delay: delay,
            ease: "power3.out",
            stagger: {
                each: stagger,
                from: "random"
            }
        });

        return () => splitRef.current?.revert();
    }, 
    { 
        scope: containerRef 
    });

    // eslint-disable-next-line react-hooks/refs
    return React.cloneElement(children as ReactElement<{ className?: string, ref?: React.Ref<HTMLElement> }>, {
        ref: containerRef,
        className: [children.props.className, "animated-text"].filter(Boolean).join(" "),
    });
}
