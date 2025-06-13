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
    { rank: 1, name: 'Mekong Rice', score: 2043, color: 'bg-green-900' },
    { rank: 2, name: 'Delta Shrimp', score: 1800, color: 'bg-green-900' },
    { rank: 3, name: 'Floating Market Fish', score: 1500, color: 'bg-green-900' },
  ];

  // Table data for top 4 to 10
  const topFourToTen = [
    { rank: 4, name: 'Coconut Candy', sales: 900, priceChange: '+2%', rating: 4.0 },
    { rank: 5, name: 'Mekong Mango', sales: 850, priceChange: '+1%', rating: 4.1 },
    { rank: 6, name: 'Rice Noodles', sales: 800, priceChange: '-1%', rating: 3.9 },
    { rank: 7, name: 'Aquatic Herbs', sales: 750, priceChange: '+3%', rating: 4.2 },
    { rank: 8, name: 'Delta Lotus', sales: 700, priceChange: '-2%', rating: 4.0 },
    { rank: 9, name: 'Fish Sauce', sales: 650, priceChange: '+4%', rating: 4.1 },
    { rank: 10, name: 'Paddy Straw', sales: 600, priceChange: '+1%', rating: 3.8 },
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
      <div className="flex justify-center gap-8 mb-10">
        {topThree.map((item, index) => (
          <motion.div
            key={index}
            className={`w-40 h-64 flex flex-col items-center justify-end bg-green-900 rounded-lg p-4 ${index === 1 ? 'order-2' : index === 0 ? 'order-1' : 'order-3'}`} // Center top 1, adjust width
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mb-2`}>
              <span className="text-white font-bold text-2xl">{item.rank}</span>
            </div>
            <p className="text-white text-center text-lg">{item.name}</p>
            <p className="text-white text-center">{item.score} out of 3</p>
          </motion.div>
        ))}
      </div>
      {/* Table for Top 4 to 10 */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-white bg-gray-900/80 border border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2 border-b border-gray-700 text-blue-400">Rank</th>
              <th className="px-4 py-2 border-b border-gray-700 text-blue-400">Name</th>
              <th className="px-4 py-2 border-b border-gray-700 text-blue-400">Sales</th>
              <th className="px-4 py-2 border-b border-gray-700 text-blue-400">Price Change</th>
              <th className="px-4 py-2 border-b border-gray-700 text-blue-400">Rating</th>
            </tr>
          </thead>
          <tbody>
            {topFourToTen.map((item, index) => (
              <tr key={index} className="hover:bg-gray-700 border-b border-gray-700">
                <td className="px-4 py-2 text-center font-medium text-white">{item.rank}</td>
                <td className="px-4 py-2 text-gray-200">{item.name}</td>
                <td className="px-4 py-2 text-center text-gray-200">{item.sales}</td>
                <td className="px-4 py-2 text-center text-gray-200">{item.priceChange}</td>
                <td className="px-4 py-2 text-center text-gray-200">{item.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}