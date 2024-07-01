import { motion, MotionValue } from "framer-motion";
import React from "react";
import { Button } from "../../button";
import { ArrowRight } from "lucide-react";

type Content = {
  description: string[];
  title: string;
}

type Props = {
  content: Content;
  initial?: { opacity: number; x: number };
  left?: string;
  opacity?: MotionValue<number>;
  top?: string;
  transition?: { duration: number; ease: string };
  translateY?: MotionValue<number>;
  whileInView?: { opacity: number; x: number };
};

const SkillCard: React.FC<Props> = ({
  content,
  left,
  opacity,
  top,
  translateY,
  ...whileInViewAnimation
}) => {
  return (
    <motion.div
      className={`lg:absolute w-full lg:w-88 bg-background border-2 border-secondary shadow-secondary p-8 flex flex-col gap-4`}
      style={{
        top: top || '',
        left: left || '',
        y: translateY || 0,
        opacity: opacity,
      }}
      {...whileInViewAnimation}
    >
      <h3 className="text-2xl font-semibold">{content.title}</h3>
      <div>
        {content.description.map((desc) => (
          <div className='flex items-start gap-2 text-base'>
            <ArrowRight className="min-w-8 mt-1"/>
            <p>
              {desc}
            </p>
          </div>
        ))}
      </div>

      <Button
        variant="outline-primary"
      >
        Expore Course
      </Button>
    </motion.div>
  );
};

export default SkillCard;
