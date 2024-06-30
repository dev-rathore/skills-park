'use client';

import { Player } from "@lottiefiles/react-lottie-player";
import { Button } from "../button";
import { Input } from "../input";

import newsletterSubscribeAnimationSrc from "@/lib/assets/newsletter-subscribe.json";

const NewsletterSubscribeSection = () => {
  return (
    <section className=" pt-16 pb-4 sm:pt-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-x-8 gap-y-16">
        <div className="w-full md:w-1/2 max-w-xl lg:max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">Subscribe to our newsletter.</h2>
          <p className="mt-4 text-lg leading-8 text-primary-foreground">
            Get the latest updates and news about our platform. We promise we won't spam you.
          </p>
          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <Input id="email-address" name="email" type="email" autoComplete="email" required placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Player
            src={newsletterSubscribeAnimationSrc}
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribeSection;
