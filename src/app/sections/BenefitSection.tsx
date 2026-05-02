import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import { gsap } from "gsap";
import VideoPin from "../components/VideoPin";


export default function BenefitSection() {

    useGSAP(() => {
        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger:".benefit-section",
                start: "top 60%",
                end: "top top",
                scrub: 1.5,                 
            }
        })

        revealTl.to(".benefit-section .first-title", {
            duration: 1,
            opacity: 100,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        });
        
        revealTl.to(".benefit-section .second-title", {
            duration: 1,
            opacity: 100,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        });

        revealTl.to(".benefit-section .third-title", {
            duration: 1,
            opacity: 100,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        });

        revealTl.to(".benefit-section .fourth-title", {
            duration: 1,
            opacity: 100,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        });
    })
    return (
        <section className="benefit-section">
            <div className="container mx-auto pt-20">
                <div className="col-center">
                    <p>
                        Unlock the Advantages:<br />
                        Explore the Key Benefits of Choosing SPYLT
                    </p>

                    <div className="mt-20 col-center">
                        <ClipPathTitle 
                            title="Shelf Stable" 
                            color="#f1f5f9" 
                            bg="#334155" 
                            className="first-title" 
                            borderColor="#020617" 
                        />
                        <ClipPathTitle 
                            title="Protein + Caffeine" 
                            color="#020617" 
                            bg="#94a3b8" 
                            className="second-title" 
                            borderColor="#020617" 
                        />
                        <ClipPathTitle 
                            title="Infinitely recyclable" 
                            color="#f1f5f9" 
                            bg="#1e293b" 
                            className="third-title" 
                            borderColor="#020617" 
                        />
                        <ClipPathTitle 
                            title="Lactose Free" 
                            color="#020617" 
                            bg="#cbd5e1" 
                            className="fourth-title" 
                            borderColor="#020617" 
                        />
                    </div>

                    <div className="md:mt-0 mt-10">
                        <p>
                            And much more... 
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative overlay-box">
                <VideoPin />
            </div>
        </section>
    )
}