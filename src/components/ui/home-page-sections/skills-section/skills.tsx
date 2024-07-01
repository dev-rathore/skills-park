'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import SkillCard from './skill-card';
import { SKILLS } from './skills-data';
import { ArrowRight } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const targetRef = useRef(null);
  const isMediumScreenSize = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 1024;
    }
  };
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // const transformArray = SKILLS.map((skill, i) => {
  //   const initial = i * 0.2;
  //   const translateFinal = (i + 1) * 0.2;
  //   const opacityFinal = translateFinal - 0.15;

  //   return {
  //     content: skill,
  //     initial,
  //     opacityFinal,
  //     translateFinal,
  //   }
  // });

  const translateY1 = useTransform(scrollYProgress, [0, 0.2], [400, 0]);
  const translateY2 = useTransform(scrollYProgress, [0.2, 0.4], [400, 0]);
  const translateY3 = useTransform(scrollYProgress, [0.4, 0.6], [400, 0]);
  const translateY4 = useTransform(scrollYProgress, [0.6, 0.8], [400, 0]);
  const translateY5 = useTransform(scrollYProgress, [0.8, 1], [400, 0]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.185], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.385], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.585], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.785], [0, 1]);
  const opacity5 = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <section
      className="relative h-auto lg:h-[400vh] flex flex-col gap-0 md:gap-36 py-20"
      ref={isMediumScreenSize() ? null : targetRef}
    >
      <div className="lg:sticky lg:top-0 h-auto lg:min-h-[100vh] gap-0 lg:pt-48 flex flex-col lg:flex-row lg-gap-10">
        <div className='order-1 lg:order-2 w-full lg:ml-auto lg:w-1/2 flex flex-col gap-10'>
          <h1 className="text-5xl md:text-6xl text-center font-semibold drop-shadow-primary">Why Us?</h1>
          <div className='flex flex-col gap-4 text-lg'>
            <div className='flex items-start gap-4'>
              <ArrowRight className="min-w-8 mt-1"/>
              <p>
                Our platform offers a diverse range of high-quality courses designed to help you master new skills. Whether you&apos;re looking to enhance your professional expertise or explore a new hobby, our expert instructors and flexible learning options make it easy to achieve your goals.
              </p>
            </div>
            <div className='flex items-start gap-4'>
              <ArrowRight className="min-w-8 mt-1"/>
              <p>
                We provide comprehensive and accessible online courses tailored to meet the needs of learners at all levels. From programming and digital marketing to creative arts and entrepreneurship, our platform empowers you to learn, grow, and succeed in today&apos;s competitive landscape.
              </p>
              </div>
            <div className='flex items-start gap-4'>
              <ArrowRight className="min-w-8 mt-1"/>
              <p>
                Join our vibrant learning community and unlock your potential with our expertly crafted courses. Our platform combines expert instruction, practical projects, and community support to help you develop the skills you need to thrive in your career and personal life.
              </p>
            </div>
          </div>
        </div>
        <div
          className='order-2 lg:order-1 relative hidden lg:block'
        >
          <SkillCard
            content={SKILLS[0]}
            left={'0px'}
            opacity={opacity1}
            top={'0px'}
            translateY={translateY1}
          />
          <SkillCard
            content={SKILLS[1]}
            left={'32px'}
            opacity={opacity2}
            top={'32px'}
            translateY={translateY2}
          />
          <SkillCard
            content={SKILLS[2]}
            left={'64px'}
            opacity={opacity3}
            top={'64px'}
            translateY={translateY3}
          />
          <SkillCard
            content={SKILLS[3]}
            left={'96px'}
            opacity={opacity4}
            top={'96px'}
            translateY={translateY4}
          />
          <SkillCard
            content={SKILLS[4]}
            left={'128px'}
            opacity={opacity5}
            top={'128px'}
            translateY={translateY5}
          />
        </div>
      </div>
      <div
        className='order-2 lg:order-1 block lg:hidden pt-10'
      >
        <div className='flex flex-col gap-10'>
          {SKILLS?.map((skill, i) => (
            <SkillCard
              content={skill}
              initial={{opacity: 0, x: i % 2 ? -100 : 100}}
              key={i}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              whileInView={{opacity: 1, x: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
