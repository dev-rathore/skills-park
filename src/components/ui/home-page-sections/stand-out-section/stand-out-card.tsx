'use client';

import { motion } from "framer-motion";

interface StandOutCardProps {
  imageUrl: string;
  description: string;
  title: string;
  initialX: [number, number];
  order?: [string, string];
}

const StandOutCard: React.FC<StandOutCardProps> = ({
  imageUrl,
  initialX,
  description,
  order = ['', ''],
  title,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-center">
      <motion.div
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0, x: initialX[0] }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className={`${order[0]} md:${order[1]} min-w-full md:min-w-96 min-h-96 bg-primary shadow-secondary-2xl bg-no-repeat bg-center`}
      />
      <motion.div
        className={`${order[1]} md:${order[0]} w-full md:w-1/2 flex flex-col gap-4`}
        initial={{ opacity: 0, x: initialX[1] }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p className="text-lg">{description}</p>
      </motion.div>
    </div>
  );
};

export default StandOutCard;
