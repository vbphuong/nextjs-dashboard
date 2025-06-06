'use client';

import * as React from 'react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
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

export const description = 'An interactive line chart for attitude frequency';

const chartData = [
  { date: '2025-01-01', frequency: 10 },
  { date: '2025-02-01', frequency: 20 },
  { date: '2025-03-01', frequency: 30 },
  { date: '2025-04-01', frequency: 40 },
  { date: '2025-05-01', frequency: 50 },
  { date: '2025-06-01', frequency: 60 },
  { date: '2025-07-01', frequency: 70 },
  { date: '2025-08-01', frequency: 65 },
  { date: '2025-09-01', frequency: 60 },
  { date: '2025-10-01', frequency: 55 },
  { date: '2025-11-01', frequency: 45 },
  { date: '2025-12-01', frequency: 30 },
];

const chartConfig = {
  frequency: {
    label: 'Frequency',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export default function AttitudeFrequency() {
  const total = React.useMemo(
    () => ({
      frequency: chartData.reduce((acc, curr) => acc + curr.frequency, 0),
    }),
    []
  );

  return (
    <Card className="py-4 sm:py-0 bg-gray-900/90 backdrop-blur-md rounded-lg relative overflow-hidden">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-3 sm:pb-0">
          <CardTitle>Attitude Frequency - January to December 2025</CardTitle>
          <CardDescription>
            Showing attitude frequency trend for the year 2025
          </CardDescription>
        </div>
        <div className="flex">
          <div className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-t-0 sm:border-l sm:px-8 sm:py-6">
            <span className="text-muted-foreground text-xs">
              {chartConfig.frequency.label}
            </span>
            <span className="text-lg leading-none font-bold sm:text-3xl">
              {total.frequency.toLocaleString()}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6 relative">
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'rgba(0, 0, 0, 0.9)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'rgba(0, 0, 0, 0.5)', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#bgGradient)" />
            <path d="M0,0 L100%,0 L100%,80% L0,100% Z" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
            <path d="M0,20% L100%,20% L100%,100% L0,80% Z" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
            <path d="M0,40% L100%,0 L100%,100% L0,60% Z" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
          </svg>
        </div>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full relative z-10"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} stroke="white" />
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
                });
              }}
              tick={{ fill: 'white' }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="frequency"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    });
                  }}
                  labelClassName="text-white"
                />
              }
            />
            <Line
              dataKey="frequency"
              type="monotone"
              stroke="white"
              strokeWidth={2}
              dot={{ r: 4, fill: 'white' }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}