'use client';

import { motion } from 'framer-motion';
import EnvironmentChart from '@/app/ui/environment/EnvironmentChart';
import TouristChart from '@/app/ui/environment/TouristChart';

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

// Animation variants for the cards (fade-in together)
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.8,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function EnvironmentPage() {
  const headingText = [
    'Analyzing',
    'Environment',
    'for',
    'Better',
    'Agricultural',
    'Insights',
    'in',
    'Mekong',
    'Delta',
  ];

  const cards = [
    {
      title: 'Climate Analysis',
      description: 'Understand seasonal temperature and rainfall patterns.',
    },
    {
      title: 'Weather Trends',
      description: 'Monitor environmental trends across Mekong Delta.',
    },
    {
      title: 'Crop Adaptation',
      description: 'Use climate data to optimize crop planning.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Introductory Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          {headingText.map((word, index) => (
            <motion.span
              key={index}
              className={
                word === 'Environment'
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
        <div className="h-[10vh]" /> {/* 10% height spacer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl w-full">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/80 backdrop-blur-md p-6 rounded-lg"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <h3 className="text-xl font-semibold text-blue-200 mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chart Section */}
      <section className="flex flex-col items-center justify-start py-10">
        <div className="w-full max-w-7xl px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-center text-blue-200 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={titleVariants}
          >
            Groups of people based on characteristics
          </motion.h2>
          <EnvironmentChart />
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-center text-blue-200 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={titleVariants}
          >
            Groups of people based on characteristics
          </motion.h2>
          <TouristChart />
        </div>
      </section>
    </div>
  );
}