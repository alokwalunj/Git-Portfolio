import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function DevText() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const sentences = [
    "I build exceptional digital experiences.",
    "I create scalable frontend applications.",
    "I develop responsive web solutions.",
    "I craft intuitive user interfaces.",
    "I transform ideas into code."
  ];

  return (
    <motion.div 
      ref={ref}
      className="py-20 md:py-32 bg-black overflow-hidden"
      style={{ opacity }}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 md:px-6"
        style={{ y }}
      >
        <div className="flex flex-col items-center gap-6">
          {sentences.map((sentence, index) => (
            <motion.div
              key={index}
              className="group relative cursor-default"
              whileHover="hover"
            >
              <motion.p 
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/30 transition-colors duration-300 group-hover:text-white"
                variants={{
                  hover: {
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }
                }}
              >
                {sentence}
              </motion.p>
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-green-400 origin-left"
                initial={{ scaleX: 0 }}
                variants={{
                  hover: {
                    scaleX: 1,
                    transition: { duration: 0.3 }
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}