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
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
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
    color: 'var(--chart-1)',
  },
  rainfall: {
    label: 'Rainfall (mm)',
    color: 'var(--chart-2)',
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
          <CardTitle>Line Chart - Multiple</CardTitle>
          <CardDescription>Seasons 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{ left: 12, right: 12 }}
              width={600}
              height={300}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="season"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="temp"
                type="monotone"
                stroke="var(--color-temp)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="rainfall"
                type="monotone"
                stroke="var(--color-rainfall)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none font-medium">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-muted-foreground flex items-center gap-2 leading-none">
                Showing weather trends for the last year
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}