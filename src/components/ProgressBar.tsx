import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentProgress: number;
  maxProgress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentProgress, maxProgress }) => {
  // Funkcja do obliczania procentowego postępu
  const calculatePercentProgress = (current: number, max: number): number => {
    if (max === 0) return 0;
    const progress = (current / max) * 100;
    return Math.min(progress, 100); // Upewniamy się, że nie przekracza 100%
  };

  // Obliczanie procentowego postępu
  const percentProgress = calculatePercentProgress(currentProgress, maxProgress);

  const containerVariants = {
    initial: { width: 0 },
    animate: { width: `${percentProgress}%`, transition: { duration: 1 } },
  };

  return (
    <div className="bg-slate-100 h-4 md:h-4 lg:h-6 w-full relative shadow-lg shadow-cyan-400/50">
      <motion.div
        className="bg-cyan-500 h-full"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      ></motion.div>
      <div className="absolute top-0 left-4 w-full h-full flex items-center justify-left">
        <span className="text-xs md:text-xs lg:text-sm text-cyan-100 font-bold">Rating {`${percentProgress.toFixed(2)}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
