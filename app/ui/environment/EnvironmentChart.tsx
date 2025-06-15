'use client';

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
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { motion } from 'framer-motion';

const chartData = [
  { season: 'Spring', temp: 27.5, rainfall: 40 },
  { season: 'Summer', temp: 31.8, rainfall: 120 },
  { season: 'Fall', temp: 30.2, rainfall: 100 },
  { season: 'Winter', temp: 26.3, rainfall: 60 },
];

const chartConfig = {
  temp: {
    label: 'Temperature (°C)',
    color: '#ff4444',
  },
  rainfall: {
    label: 'Rainfall (mm)',
    color: '#93c5fd',
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
          <CardTitle className="text-white">Line Chart - Multiple</CardTitle>
          <CardDescription className="text-white">Seasons 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              width={600}
              height={300}
            >
              <CartesianGrid vertical={false} stroke="#d1d5db" />
              <XAxis dataKey="season" tickLine={false} axisLine={false} tickMargin={8} stroke="#d1d5db" />
              <YAxis yAxisId="left" orientation="left" stroke="#ff4444" domain={[26, 32]} />
              <YAxis yAxisId="right" orientation="right" stroke="#93c5fd" domain={[0, 140]} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                yAxisId="left"
                dataKey="temp"
                type="monotone"
                stroke="#ff4444"
                strokeWidth={2}
                dot={{ r: 6 }}
              />
              <Line
                yAxisId="right"
                dataKey="rainfall"
                type="monotone"
                stroke="#93c5fd"
                strokeWidth={2}
                dot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none font-medium text-white">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <div className="text-muted-foreground flex items-center gap-2 leading-none text-white">
                Showing weather trends for the last year
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}