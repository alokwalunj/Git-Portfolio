import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onLoadingComplete: () => void;
}

export function Loader({ onLoadingComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const getBackgroundColor = (progress: number) => {
    if (progress <= 10) return '#1a0f0f';
    if (progress <= 20) return '#0f1a1a';
    if (progress <= 30) return '#0f151a';
    if (progress <= 40) return '#151a0f';
    if (progress <= 50) return '#1a1a0f';
    if (progress <= 60) return '#1a0f1a';
    if (progress <= 70) return '#150f1a';
    if (progress <= 80) return '#0f151a';
    if (progress <= 90) return '#0f1a15';
    return '#0f1a0f';
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center z-50"
          style={{ backgroundColor: getBackgroundColor(progress) }}
          animate={{ backgroundColor: getBackgroundColor(progress) }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <div className="h-[3em] relative overflow-hidden w-[200px] mb-8">
            <motion.div
              className="absolute w-full text-center font-bold text-white uppercase tracking-[-0.02em] "
              initial={{ y: 0 }}
              animate={{ y: progress === 100 ? '100%' : 0 }}
              transition={{ duration: 0.5 }}
            >
              Loading
            </motion.div>
            <motion.div
              className="absolute w-full text-center font-light text-white uppercase tracking-[-0.02em]"
              initial={{ y: '-100%' }}
              animate={{ y: progress === 100 ? 0 : '-100%' }}
              transition={{ duration: 0.5 }}
            >
              Complete
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="w-[300px] h-[2px] bg-white/10 mb-12 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <motion.div
            className="fixed bottom-8 right-8 text-[12rem] leading-[0.8] font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Calibre, sans-serif' }}
          >
            {progress.toString().padStart(2, '0')}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}