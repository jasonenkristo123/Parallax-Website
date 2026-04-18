"use client"
import FadeInText from "./components/FadeInText";
import ScrollFadeText from "./components/ScrollFadeText";
import ScrubText from "./components/ScrubText";

export default function Home() {



  return (
    <main className="w-screen min-h-screen ">
      <section className="flex items-center justify-center h-screen bg-base-100 overflow-hidden">
        <FadeInText delay={0.2}>
          <h1 className="text-center text-base-200 text1">
            Lorem ipsum dolor sit
          </h1>
        </FadeInText>
      </section>
      <section className="flex items-center justify-center h-screen bg-base-300 overflow-hidden">
        <ScrollFadeText>
          <h1 className="text-center text-base-400 text2">
            Lorem ipsum dolor sit
          </h1>
        </ScrollFadeText>
      </section>
      <section className="flex items-center justify-center h-screen bg-base-500 overflow-hidden">
        <ScrubText>
          <h1 className="text-center text-base-600 text3">
            Lorem ipsum dolor sit
          </h1>
        </ScrubText>
      </section>
    </main>
  );
}