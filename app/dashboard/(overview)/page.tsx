'use client';

import { motion } from 'framer-motion';
import AttitudeChart from '@/app/ui/dashboard/attitude-chart';
import AttitudeFrequency from '@/app/ui/dashboard/attitude-frequency';

// Animation variants for the heading (word-by-word)
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

// Animation variants for the paragraph (all at once)
const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.8, // Delay after heading animation
    },
  },
};

// Animation variants for the chart (scroll-based)
const chartVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function DashboardPage() {
  // Split the heading into words for animation
  const headingText = [
    'Focusing',
    'on',
    'Customer',
    'is',
    'really',
    'important',
    'for',
    'Mekong',
    'Delta',
  ];

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Introductory Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          {headingText.map((word, index) => (
            <motion.span
              key={index}
              className={
                word === 'Customer'
                  ? 'bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent inline-block mr-2'
                  : 'inline-block mr-2'
              }
              initial="hidden"
              animate="visible"
              custom={index}
              variants={headingVariants}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="text-lg md:text-xl text-center max-w-2xl text-gray-200"
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
        >
          Understanding customer attitudes in the Mekong Delta is crucial for
          building stronger connections and driving sustainable growth in the
          region.
        </motion.p>
      </section>

      {/* Chart Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          className="w-full max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={chartVariants}
        >
          <AttitudeChart />
        </motion.div>
      </section>

      {/* Frequency Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          className="w-full max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={chartVariants}
        >
          <AttitudeFrequency />
        </motion.div>
      </section>
    </div>
  );
}