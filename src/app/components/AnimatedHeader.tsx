"use client"
import React, { useRef, ReactElement, ElementType } from "react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./AnimatedHeader.css";
export default function AnimatedHeader({ children }: { children: ReactElement<{ className?: string }> }) {
    const containerRef = useRef<HTMLElement>(null);

    const Tag = children.type as ElementType;
    const { className: childClassName, ...restProps } = children.props;

    return (
        <Tag
            {...restProps}
            ref={containerRef}
            className={`${childClassName || ""} animated-header`.trim()}
        />
    );
}

