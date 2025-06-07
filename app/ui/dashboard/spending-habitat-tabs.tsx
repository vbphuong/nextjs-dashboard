'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };
  

const tabsData = [
  {
    category: 'Top-Selling Products Running Low',
    items: [
      {
        title: 'Rice Seeds',
        metric: '$1,200.00',
        change: '+12.5%',
        icon: <ArrowUp className="h-4 w-4 text-green-500" />,
        description: 'High demand for premium rice seeds in the Mekong Delta, stock low due to seasonal harvest.',
      },
      {
        title: 'Fertilizers',
        metric: '450 Units',
        change: '-8.2%',
        icon: <ArrowDown className="h-4 w-4 text-red-500" />,
        description: 'Organic fertilizers running low, popular among South region farmers.',
      },
      {
        title: 'Aquaculture Feed',
        metric: '$750.00',
        change: '+5.3%',
        icon: <ArrowUp className="h-4 w-4 text-green-500" />,
        description: 'Feed for shrimp farming in the Delta, limited supply due to supplier delays.',
      },
      {
        title: 'Farm Tools',
        metric: '300 Units',
        change: '-3.5%',
        icon: <ArrowDown className="h-4 w-4 text-red-500" />,
        description: 'Hand tools for rice paddies, stock depleting in Middle region.',
      },
    ],
  },
  {
    category: 'Discounted Products with High Demand',
    items: [
      {
        title: 'Pesticides',
        metric: '$500.00',
        change: '+15.2%',
        icon: <ArrowUp className="h-4 w-4 text-green-500" />,
        description: 'Discounted pest control for rice fields, highly purchased in North region.',
      },
      {
        title: 'Fish Nets',
        metric: '600 Units',
        change: '+10.8%',
        icon: <ArrowUp className="h-4 w-4 text-green-500" />,
        description: 'Affordable nets for aquaculture, popular among South female buyers.',
      },
      {
        title: 'Irrigation Pumps',
        metric: '$1,000.00',
        change: '+7.9%',
        icon: <ArrowUp className="h-4 w-4 text-green-500" />,
        description: 'Discounted pumps for flood-prone Delta areas, high demand from 30-50 age group.',
      },
      {
        title: 'Rice Bags',
        metric: '800 Units',
        change: '+6.4%',
        icon: <ArrowUp className="h-4 w-4 text-green-500" />,
        description: 'Bulk rice packaging on sale, widely bought by middle-income farmers.',
      },
    ],
  },
];

export default function SpendingHabitatTabs() {
  const [isVisible, setIsVisible] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (tabsRef.current) {
      observer.observe(tabsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={tabsRef} className="bg-gray-900/90 backdrop-blur-md p-6 rounded-lg">
      {tabsData.map((category, categoryIndex) => (
        <div key={category.category} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">{category.category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {category.items.map((item, itemIndex) => (
              <motion.div
                key={item.title}
                className="bg-gray-800/80 backdrop-blur-md p-4 rounded-lg shadow-md text-white"
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                custom={categoryIndex * 4 + itemIndex}
                variants={tabVariants}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium">{item.title}</h4>
                  <span className="text-sm text-gray-200">{item.change}</span>
                </div>
                <div className="text-2xl font-bold mb-2">{item.metric}</div>
                <div className="flex items-center text-sm text-gray-300">
                  {item.icon}
                  <span className="ml-1">{item.description}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}