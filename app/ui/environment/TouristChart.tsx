'use client';

import { TrendingUp } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
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
import { motion } from 'framer-motion';

const chartData = [
  { month: 'Jan', tourists: 15500 },
  { month: 'Feb', tourists: 16000 },
  { month: 'Mar', tourists: 18000 },
  { month: 'Apr', tourists: 20000 },
  { month: 'May', tourists: 22000 },
  { month: 'Jun', tourists: 23500 },
  { month: 'Jul', tourists: 22500 },
  { month: 'Aug', tourists: 21000 },
  { month: 'Sep', tourists: 19500 },
  { month: 'Oct', tourists: 18000 },
  { month: 'Nov', tourists: 16500 },
  { month: 'Dec', tourists: 15500 },
];

const chartConfig = {
  tourists: {
    label: 'Tourists',
    color: '#22c55e',
  },
} satisfies ChartConfig;

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

export default function TouristChart() {
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
          <CardTitle>Line Chart</CardTitle>
          <CardDescription>Monthly Tourists in Mekong Delta (2025)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 10, right: 12, left: 12, bottom: 10 }}  
            width={600}
            height={150}  
          >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="tourists"
                type="natural"
                stroke="#22c55e"
                strokeWidth={2}
                dot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground leading-none">
            Showing tourists for the last year 
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}