'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const chartData = [
  { season: 'Spring', temp: 27.5, rainfall: -40 },
  { season: 'Summer', temp: 31.8, rainfall: -120 },
  { season: 'Fall', temp: 30.2, rainfall: -100 },
  { season: 'Winter', temp: 26.3, rainfall: -60 },
];

const cardVariants = {
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

export default function EnvironmentChart() {
  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      <Card className="bg-gray-900/80 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Average Weather Trends in Mekong Delta</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart
            width={600}
            height={300}
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
            <XAxis dataKey="season" stroke="#d1d5db" />
            <YAxis yAxisId="left" orientation="left" stroke="#ff4444" domain={[26, 32]} />
            <YAxis yAxisId="right" orientation="right" stroke="#3b82f6" domain={[-140, 0]} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1f2937', color: '#d1d5db', border: '1px solid #4b5563' }}
              itemStyle={{ color: '#d1d5db' }}
            />
            <Legend wrapperStyle={{ color: '#d1d5db' }} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="temp"
              stroke="#ff4444"
              strokeWidth={2}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="rainfall"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </CardContent>
      </Card>
    </motion.div>
  );
}