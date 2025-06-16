'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
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
  { date: '2024-04-01', yield: 3400, value: 3200 },
  { date: '2024-04-02', yield: 4500, value: 2800 },
  { date: '2024-04-03', yield: 2800, value: 3600 },
  { date: '2024-04-04', yield: 5200, value: 3000 },
  { date: '2024-04-05', yield: 3100, value: 4200 },
  { date: '2024-04-06', yield: 6000, value: 2500 },
  { date: '2024-04-07', yield: 2900, value: 3800 },
  { date: '2024-04-08', yield: 4800, value: 2900 },
  { date: '2024-04-09', yield: 7000, value: 3500 },
  { date: '2024-04-10', yield: 3200, value: 4100 },
  { date: '2024-04-11', yield: 5500, value: 2700 },
  { date: '2024-04-12', yield: 3600, value: 3900 },
  { date: '2024-04-13', yield: 6500, value: 3000 },
  { date: '2024-04-14', yield: 2800, value: 4300 },
  { date: '2024-04-15', yield: 5000, value: 2600 },
  { date: '2024-04-16', yield: 3400, value: 3700 },
  { date: '2024-04-17', yield: 6200, value: 3100 },
  { date: '2024-04-18', yield: 3000, value: 4000 },
  { date: '2024-04-19', yield: 5800, value: 2800 },
  { date: '2024-04-20', yield: 3500, value: 3600 },
  { date: '2024-04-21', yield: 7000, value: 3200 },
  { date: '2024-04-22', yield: 2900, value: 4200 },
  { date: '2024-04-23', yield: 4600, value: 3000 },
  { date: '2024-04-24', yield: 6300, value: 3800 },
  { date: '2024-04-25', yield: 3100, value: 3500 },
  { date: '2024-04-26', yield: 5400, value: 2900 },
  { date: '2024-04-27', yield: 3600, value: 4100 },
  { date: '2024-04-28', yield: 6800, value: 2700 },
  { date: '2024-04-29', yield: 3000, value: 3700 },
  { date: '2024-04-30', yield: 5200, value: 3200 },
  { date: '2024-05-01', yield: 4500, value: 4000 },
  { date: '2024-05-02', yield: 3300, value: 2800 },
  { date: '2024-05-03', yield: 6000, value: 3500 },
  { date: '2024-05-04', yield: 2800, value: 4200 },
  { date: '2024-05-05', yield: 5500, value: 3000 },
  { date: '2024-05-06', yield: 3600, value: 3800 },
  { date: '2024-05-07', yield: 7000, value: 2900 },
  { date: '2024-05-08', yield: 3100, value: 4100 },
  { date: '2024-05-09', yield: 4800, value: 2600 },
  { date: '2024-05-10', yield: 6500, value: 3700 },
  { date: '2024-05-11', yield: 2900, value: 3200 },
  { date: '2024-05-12', yield: 5400, value: 4000 },
  { date: '2024-05-13', yield: 3700, value: 2800 },
  { date: '2024-05-14', yield: 6200, value: 3500 },
  { date: '2024-05-15', yield: 3000, value: 4200 },
  { date: '2024-05-16', yield: 5800, value: 3000 },
  { date: '2024-05-17', yield: 3400, value: 3800 },
  { date: '2024-05-18', yield: 6900, value: 2900 },
  { date: '2024-05-19', yield: 3200, value: 4100 },
  { date: '2024-05-20', yield: 5100, value: 2600 },
  { date: '2024-05-21', yield: 3700, value: 3700 },
  { date: '2024-05-22', yield: 6300, value: 3200 },
  { date: '2024-05-23', yield: 2800, value: 4000 },
  { date: '2024-05-24', yield: 5500, value: 2800 },
  { date: '2024-05-25', yield: 3600, value: 3500 },
  { date: '2024-05-26', yield: 7000, value: 4200 },
  { date: '2024-05-27', yield: 3100, value: 3000 },
  { date: '2024-05-28', yield: 4800, value: 3800 },
  { date: '2024-05-29', yield: 6500, value: 2900 },
  { date: '2024-05-30', yield: 2900, value: 4100 },
  { date: '2024-05-31', yield: 5400, value: 2600 },
  { date: '2024-06-01', yield: 3700, value: 3700 },
  { date: '2024-06-02', yield: 6800, value: 3200 },
  { date: '2024-06-03', yield: 3000, value: 4000 },
  { date: '2024-06-04', yield: 5500, value: 2800 },
  { date: '2024-06-05', yield: 3600, value: 3500 },
  { date: '2024-06-06', yield: 7000, value: 4200 },
  { date: '2024-06-07', yield: 3100, value: 3000 },
  { date: '2024-06-08', yield: 4800, value: 3800 },
  { date: '2024-06-09', yield: 6500, value: 2900 },
  { date: '2024-06-10', yield: 2900, value: 4100 },
  { date: '2024-06-11', yield: 5400, value: 2600 },
  { date: '2024-06-12', yield: 3700, value: 3700 },
  { date: '2024-06-13', yield: 6800, value: 3200 },
  { date: '2024-06-14', yield: 3000, value: 4000 },
  { date: '2024-06-15', yield: 5500, value: 2800 },
  { date: '2024-06-16', yield: 3600, value: 3500 },
  { date: '2024-06-17', yield: 7000, value: 4200 },
  { date: '2024-06-18', yield: 3100, value: 3000 },
  { date: '2024-06-19', yield: 4800, value: 3800 },
  { date: '2024-06-20', yield: 6500, value: 2900 },
  { date: '2024-06-21', yield: 2900, value: 4100 },
  { date: '2024-06-22', yield: 5400, value: 2600 },
  { date: '2024-06-23', yield: 3700, value: 3700 },
  { date: '2024-06-24', yield: 6800, value: 3200 },
  { date: '2024-06-25', yield: 3000, value: 4000 },
  { date: '2024-06-26', yield: 5500, value: 2800 },
  { date: '2024-06-27', yield: 3600, value: 3500 },
  { date: '2024-06-28', yield: 7000, value: 4200 },
  { date: '2024-06-29', yield: 3100, value: 3000 },
  { date: '2024-06-30', yield: 4800, value: 3800 },
];

const chartConfig = {
  yield: {
    label: 'Aquaculture Yield (tons)',
    color: '#93c5fd',
  },
  value: {
    label: 'Economic Value (billion USD)',
    color: '#3b82f6',
  },
} satisfies ChartConfig;

export function FisheryBarChart() {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>('yield');

  const total = React.useMemo(
    () => ({
      yield: chartData.reduce((acc, curr) => acc + curr.yield, 0),
      value: chartData.reduce((acc, curr) => acc + curr.value, 0),
    }),
    []
  );

  // Animation variants for bars
  const barVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (i: number) => ({
      width: '100%',
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  // Custom bar shape to apply animation
  const CustomBar = (props: { x?: number; y?: number; width?: number; height?: number; fill?: string; index?: number }) => {
    const { x, y, width, height, fill } = props;
    return (
      <motion.rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        initial="hidden"
        animate="visible"
        variants={barVariants}
        custom={props.index}
      />
    );
  };

  return (
    <Card className="py-0 bg-gray-900/80 border-gray-700">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
          <CardTitle className="text-white">Bar Chart - Interactive</CardTitle>
          <CardDescription className="text-gray-400">
            Showing fishery data for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {['yield', 'value'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6 text-white"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-gray-400 text-xs">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
            width={600}
            height={300}
            barSize={20} // Adjust bar width
            barGap={5} // Add gap between bars
          >
            <CartesianGrid vertical={false} stroke="#d1d5db" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey={activeChart}
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    });
                  }}
                />
              }
            />
            <Bar
              dataKey={activeChart}
              fill={`var(--color-${activeChart})`}
              shape={<CustomBar />}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}