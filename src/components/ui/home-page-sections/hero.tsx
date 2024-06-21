'use client';

import { Player } from "@lottiefiles/react-lottie-player";
import { Button } from "../button";
import heroSectionAnimationSrc from "@/lib/assets/hero-section-animation.json";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 flex flex-col gap-6 items-center justify-center min-h-[40vh]">
        <h1 className="text-4xl lg:text-6xl text-center lg:text-left font-bold text-primary-foreground">
          Skill Spark
        </h1>
        <p className="text-2xl text-center lg:text-left font-medium text-primary-foreground">
          The Best Place to Learn and Grow
        </p>
        <div className="flex gap-4 mt-8">
          <Button variant="outline">Get Started</Button>
          <Button variant="outline-primary">Learn More</Button>
        </div>
      </div>
      <div
        className="w-full lg:w-2/3 lg:px-14"
      >
        <Player
          src={heroSectionAnimationSrc}
          loop
          autoplay
        />
      </div>
    </section>
  );
};

export default HeroSection;
