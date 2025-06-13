'use client';

import { motion } from 'framer-motion';
import { FeedbackChart } from '@/app/ui/products/feedback-chart';

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

// Animation variants for the chart title
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

export default function FeedbackDashboardPage() {
  const headingText = [
    'Analyzing',
    'Feedback',
    'for',
    'Better',
    'Product',
    'Insights',
    'in',
    'Mekong',
    'Delta',
  ];

  const cards = [
    {
      title: 'Feedback Analysis',
      description: 'Understand provider and consumer sentiments to improve product offerings.',
    },
    {
      title: 'Market Trends',
      description: 'Monitor feedback trends across Mekong Delta to optimize strategies.',
    },
    {
      title: 'Product Improvement',
      description: 'Use feedback data to drive innovation and customer satisfaction.',
    },
  ];

  // Placeholder for nav bar (replace with your actual nav component)
  const NavBar = () => (
    <div className="w-64 bg-gray-800 h-screen p-4 text-white fixed left-0 top-0">
      {/* Add your nav content here */}
      Navigation
    </div>
  );

  return (
    <div className="flex w-full min-h-screen bg-black text-white">
      {/* Nav Bar */}
      <NavBar />

      {/* Main Content with offset for nav bar */}
      <div className="flex-1 ml-64"> {/* ml-64 matches the nav bar width (256px) */}
        {/* Introductory Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {headingText.map((word, index) => (
              <motion.span
                key={index}
                className={
                  word === 'Feedback'
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
        <section className="flex flex-col items-center justify-start">
          <div className="w-full max-w-7xl">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-center text-blue-200 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={titleVariants}
            >
              Feedback score from provider and consumer toward products
            </motion.h2>
            <FeedbackChart />
          </div>
        </section>
      </div>
    </div>
  );
}