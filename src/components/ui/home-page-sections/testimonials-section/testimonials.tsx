'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TESTIMONIALS } from './testimonials-data';
import TestimonialCard from './testimonial-card';

const TestimonialsSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const isMediumScreenSize = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 1024;
    }
  };

  const x = useTransform(scrollYProgress, [0, 1], ["1%", isMediumScreenSize() ? "-90%" : "-80%"]);

  return (
    <section
      className='relative h-[420vh]'
      ref={targetRef}
    >
      <div
        className='sticky top-0 h-screen overflow-hidden pt-20 md:pt-36'
      >
        <h1 className="text-5xl md:text-6xl text-center font-semibold drop-shadow-primary">Testimonials</h1>
        <div
          className='flex h-[80vh] items-center overflow-hidden'
        >
        <motion.div className='flex gap-4' style={{ x }}>
          {TESTIMONIALS.slice(0,6).map((testimonial, i) => (
            <TestimonialCard
              key={i}
              testimonial={testimonial}
            />
          ))}
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
