import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const gradientVariants: Variants = {
    hover: {
      backgroundPosition: ["0%", "100%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse", // This is valid
      },
    },
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-black text-white p-4 md:p-6 overflow-hidden">
      <div className="hidden md:block absolute right-[-40px] top-1/2 -translate-y-1/2">
        <motion.div
          className="text-[100px] md:text-[150px] font-bold rotate-90 select-none"
          style={{
            fontFamily: 'Calibre, sans-serif',
            color: '#4A4A4A',
          }}
          whileHover={{
            color: '#FFFFFF',
            transition: { duration: 0.3 },
          }}
        >
          DEV
        </motion.div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto pl-4 md:pl-8 pt-24 md:pt-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="max-w-xl" variants={itemVariants}>
          <motion.h1 className="text-2xl md:text-4xl font-bold mb-2" variants={itemVariants}>
            Hi there, I'm 👋
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={gradientVariants}
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{
              background: "linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6, #ec4899)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            ALOK WALUNJ.
          </motion.h2>

          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h3 className="text-base md:text-lg text-green-400" variants={itemVariants}>
              DESIGNER+DEVELOPER
            </motion.h3>

            <motion.p className="text-white/70 text-sm md:text-base" variants={itemVariants}>
              I'm a frontend developer based in New Jersey, USA.
            </motion.p>

            <motion.button
              onClick={scrollToFooter}
              className="group relative bg-green-400/20 text-green-400 px-4 md:px-6 py-2 rounded-full hover:bg-green-400/30 transition-colors text-xs md:text-sm cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <span className="flex items-center gap-2">
                HIRE ME
                <Sparkles
                  className=" opacity-50 group-hover:opacity-100 transition-opacity font-normal group-hover:font-bold"
                  size={14}
                />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
