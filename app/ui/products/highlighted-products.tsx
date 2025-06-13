'use client';

import { motion } from 'framer-motion';

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

export default function HighlightedProducts() {
  // Podium data for top 3
  const topThree = [
    { rank: 1, name: 'Product A', score: 2043, color: 'bg-yellow-500' },
    { rank: 2, name: 'Product B', score: 1800, color: 'bg-gray-400' },
    { rank: 3, name: 'Product C', score: 1500, color: 'bg-orange-600' },
  ];

  // Table data for top 7 to 10
  const topSevenToTen = [
    { rank: 7, name: 'Product G', sales: 1200, priceChange: '+5%', rating: 4.2 },
    { rank: 8, name: 'Product H', sales: 1100, priceChange: '-2%', rating: 4.0 },
    { rank: 9, name: 'Product I', sales: 1050, priceChange: '+3%', rating: 4.1 },
    { rank: 10, name: 'Product J', sales: 1000, priceChange: '+1%', rating: 3.9 },
  ];

  return (
    <section className="flex flex-col items-center justify-start py-10 w-full max-w-7xl px-4">
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-center text-blue-200 mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
      >
        Những sản phẩm nổi bật mùa này
      </motion.h2>
      {/* Podium for Top 3 */}
      <div className="flex justify-center gap-6 mb-10">
        {topThree.map((item, index) => (
          <motion.div
            key={index}
            className={`w-32 h-48 flex flex-col items-center justify-end bg-purple-800 rounded-lg p-4 ${index === 1 ? 'h-64' : ''}`} // Middle (1st) is taller
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mb-2`}>
              <span className="text-white font-bold text-xl">{item.rank}</span>
            </div>
            <p className="text-white text-center">{item.name}</p>
            <p className="text-white text-center">{item.score} out of 3</p>
          </motion.div>
        ))}
      </div>
      {/* Table for Top 7 to 10 */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-white bg-gray-900/80 border border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2 border-b border-gray-700">Rank</th>
              <th className="px-4 py-2 border-b border-gray-700">Name</th>
              <th className="px-4 py-2 border-b border-gray-700">Sales</th>
              <th className="px-4 py-2 border-b border-gray-700">Price Change</th>
              <th className="px-4 py-2 border-b border-gray-700">Rating</th>
            </tr>
          </thead>
          <tbody>
            {topSevenToTen.map((item, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="px-4 py-2 border-b border-gray-700 text-center">{item.rank}</td>
                <td className="px-4 py-2 border-b border-gray-700">{item.name}</td>
                <td className="px-4 py-2 border-b border-gray-700 text-center">{item.sales}</td>
                <td className="px-4 py-2 border-b border-gray-700 text-center">{item.priceChange}</td>
                <td className="px-4 py-2 border-b border-gray-700 text-center">{item.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}