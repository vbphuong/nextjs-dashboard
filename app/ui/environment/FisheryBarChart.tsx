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

const chartData = [
  { year: '2016', yield: 3400, value: 3200 },
  { year: '2018', yield: 3500, value: 3400 },
  { year: '2020', yield: 3700, value: 3600 },
  { year: '2022', yield: 3200, value: 3100 },
  { year: '2024', yield: 2900, value: 2900 },
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

  return (
    <Card className="py-0 bg-gray-900/80 border-gray-700">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
          <CardTitle className="text-white">Bar Chart - Interactive</CardTitle>
          <CardDescription className="text-gray-400">
            Showing fishery data for the last 9 years
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
          >
            <CartesianGrid vertical={false} stroke="#d1d5db" />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              stroke="#d1d5db"
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey={activeChart}
                  labelFormatter={(value) => value}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}