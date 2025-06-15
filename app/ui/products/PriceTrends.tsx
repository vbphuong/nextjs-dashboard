'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { CartesianGrid, Dot, Line, LineChart, XAxis, YAxis } from 'recharts';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type PriceData = { date: string; price: number; fill: string }[];
const productData: Record<string, PriceData> = {
  'Mekong Rice': [
    { date: '2025-06-01', price: 50, fill: '#93c5fd' },
    { date: '2025-06-02', price: 52, fill: '#93c5fd' },
    { date: '2025-06-03', price: 51, fill: '#93c5fd' },
    { date: '2025-06-04', price: 53, fill: '#93c5fd' },
    { date: '2025-06-05', price: 54, fill: '#93c5fd' },
    { date: '2025-06-06', price: 53, fill: '#93c5fd' },
    { date: '2025-06-07', price: 55, fill: '#93c5fd' },
  ],
  'Delta Shrimp': [
    { date: '2025-06-01', price: 120, fill: '#93c5fd' },
    { date: '2025-06-02', price: 122, fill: '#93c5fd' },
    { date: '2025-06-03', price: 121, fill: '#93c5fd' },
    { date: '2025-06-04', price: 123, fill: '#93c5fd' },
    { date: '2025-06-05', price: 125, fill: '#93c5fd' },
    { date: '2025-06-06', price: 124, fill: '#93c5fd' },
    { date: '2025-06-07', price: 126, fill: '#93c5fd' },
  ],
  'Floating Market Fish': [
    { date: '2025-06-01', price: 80, fill: '#93c5fd' },
    { date: '2025-06-02', price: 82, fill: '#93c5fd' },
    { date: '2025-06-03', price: 81, fill: '#93c5fd' },
    { date: '2025-06-04', price: 83, fill: '#93c5fd' },
    { date: '2025-06-05', price: 85, fill: '#93c5fd' },
    { date: '2025-06-06', price: 84, fill: '#93c5fd' },
    { date: '2025-06-07', price: 86, fill: '#93c5fd' },
  ],
};

const chartConfig = {
  price: {
    label: 'Price',
    color: '#93c5fd',
  },
  'Mekong Rice': {
    label: 'Mekong Rice',
    color: '#93c5fd',
  },
  'Delta Shrimp': {
    label: 'Delta Shrimp',
    color: '#93c5fd',
  },
  'Floating Market Fish': {
    label: 'Floating Market Fish',
    color: '#93c5fd',
  },
} satisfies ChartConfig;

export default function PriceTrends() {
  const [selectedProduct, setSelectedProduct] = useState('Mekong Rice');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = Object.keys(productData).filter(product =>
    product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="flex flex-col items-center justify-start py-10 w-full max-w-7xl px-4 bg-black text-white">
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-center text-gray-200 mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        }}
      >
        Current price of popular products
      </motion.h2>
      <div className="mb-4 flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <Input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-800 text-white border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Select value={selectedProduct} onValueChange={setSelectedProduct}>
          <SelectTrigger className="bg-gray-800 text-white border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <SelectValue placeholder="Select a product" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-white border border-gray-700 rounded-md">
            {filteredProducts.map(product => (
              <SelectItem key={product} value={product} className="hover:bg-gray-700">
                {product}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Card className="w-full bg-gray-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Price Trend - {selectedProduct}</CardTitle>
          <CardDescription className="text-gray-400">June 1 - June 7, 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={productData[selectedProduct]}
              margin={{ top: 24, left: 24, right: 24 }}
            >
              <CartesianGrid vertical={false} stroke="#d1d5db" />
              <XAxis dataKey="date" stroke="#d1d5db" />
              <YAxis stroke="#d1d5db" />
              <ChartTooltip
                cursor={{ stroke: '#93c5fd', strokeWidth: 1 }}
                content={<ChartTooltipContent indicator="line" nameKey="price" hideLabel />}
              />
              <Line
                dataKey="price"
                type="natural"
                stroke="#93c5fd"
                strokeWidth={2}
                dot={({ payload, ...props }) => (
                  <Dot
                    key={payload.date}
                    r={5}
                    cx={props.cx}
                    cy={props.cy}
                    fill={payload.fill}
                    stroke={payload.fill}
                  />
                )}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium text-gray-200">
            Trending up by 5.2% this week <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div className="text-gray-400 leading-none">
            Showing price trends for the last 7 days
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}