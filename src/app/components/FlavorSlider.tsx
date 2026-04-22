import Image from "next/image";
import { flavorlists } from "../constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

export default function FlavorSlider() {
    const sliderRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        const scrollAmount = sliderRef?.current?.scrollWidth || 0 - window?.innerWidth;


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "2% top",
                end: `+=${scrollAmount}px`,
                scrub: true,
                pin: true,
            },
        });

        tl.to(".flavor-section", {
            x: `-${scrollAmount}px`,
            ease: "power1.inOut"
        })
    })

    return (
        <div className="slider-wrapper" ref={sliderRef}>
            <div className="flavors">
                {
                    flavorlists.map((flavor) => (
                        <div key={flavor.name} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}>
                            <Image
                                src={`/images/${flavor.color}-bg.svg`}
                                alt={flavor.name}
                                width={1024}
                                height={677}
                                className="absolute bottom-0"
                            />

                            <img
                                src={`/images/${flavor.color}-drink.webp`}
                                alt={flavor.name}
                                className="drinks"
                            />

                            <img
                                src={`/images/${flavor.color}-elements.webp`}
                                alt={flavor.name}
                                className="elements"
                            />

                            <h1>
                                {flavor.name}
                            </h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}