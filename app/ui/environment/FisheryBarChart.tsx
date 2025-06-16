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
  { date: '2024-04-01', yield: 3400, value: 3200 },
  { date: '2024-04-02', yield: 3450, value: 3250 },
  { date: '2024-04-03', yield: 3480, value: 3280 },
  { date: '2024-04-04', yield: 3520, value: 3320 },
  { date: '2024-04-05', yield: 3550, value: 3350 },
  { date: '2024-04-06', yield: 3580, value: 3380 },
  { date: '2024-04-07', yield: 3600, value: 3400 },
  { date: '2024-04-08', yield: 3630, value: 3430 },
  { date: '2024-04-09', yield: 3650, value: 3450 },
  { date: '2024-04-10', yield: 3680, value: 3480 },
  { date: '2024-04-11', yield: 3700, value: 3500 },
  { date: '2024-04-12', yield: 3720, value: 3520 },
  { date: '2024-04-13', yield: 3750, value: 3550 },
  { date: '2024-04-14', yield: 3780, value: 3580 },
  { date: '2024-04-15', yield: 3800, value: 3600 },
  { date: '2024-04-16', yield: 3820, value: 3620 },
  { date: '2024-04-17', yield: 3850, value: 3650 },
  { date: '2024-04-18', yield: 3880, value: 3680 },
  { date: '2024-04-19', yield: 3900, value: 3700 },
  { date: '2024-04-20', yield: 3920, value: 3720 },
  { date: '2024-04-21', yield: 3950, value: 3750 },
  { date: '2024-04-22', yield: 3980, value: 3780 },
  { date: '2024-04-23', yield: 4000, value: 3800 },
  { date: '2024-04-24', yield: 4020, value: 3820 },
  { date: '2024-04-25', yield: 4050, value: 3850 },
  { date: '2024-04-26', yield: 4080, value: 3880 },
  { date: '2024-04-27', yield: 4100, value: 3900 },
  { date: '2024-04-28', yield: 4120, value: 3920 },
  { date: '2024-04-29', yield: 4150, value: 3950 },
  { date: '2024-04-30', yield: 4180, value: 3980 },
  { date: '2024-05-01', yield: 4200, value: 4000 },
  { date: '2024-05-02', yield: 4220, value: 4020 },
  { date: '2024-05-03', yield: 4250, value: 4050 },
  { date: '2024-05-04', yield: 4280, value: 4080 },
  { date: '2024-05-05', yield: 4300, value: 4100 },
  { date: '2024-05-06', yield: 4320, value: 4120 },
  { date: '2024-05-07', yield: 4350, value: 4150 },
  { date: '2024-05-08', yield: 4380, value: 4180 },
  { date: '2024-05-09', yield: 4400, value: 4200 },
  { date: '2024-05-10', yield: 4420, value: 4220 },
  { date: '2024-05-11', yield: 4450, value: 4250 },
  { date: '2024-05-12', yield: 4480, value: 4280 },
  { date: '2024-05-13', yield: 4500, value: 4300 },
  { date: '2024-05-14', yield: 4520, value: 4320 },
  { date: '2024-05-15', yield: 4550, value: 4350 },
  { date: '2024-05-16', yield: 4580, value: 4380 },
  { date: '2024-05-17', yield: 4600, value: 4400 },
  { date: '2024-05-18', yield: 4620, value: 4420 },
  { date: '2024-05-19', yield: 4650, value: 4450 },
  { date: '2024-05-20', yield: 4680, value: 4480 },
  { date: '2024-05-21', yield: 4700, value: 4500 },
  { date: '2024-05-22', yield: 4720, value: 4520 },
  { date: '2024-05-23', yield: 4750, value: 4550 },
  { date: '2024-05-24', yield: 4780, value: 4580 },
  { date: '2024-05-25', yield: 4800, value: 4600 },
  { date: '2024-05-26', yield: 4820, value: 4620 },
  { date: '2024-05-27', yield: 4850, value: 4650 },
  { date: '2024-05-28', yield: 4880, value: 4680 },
  { date: '2024-05-29', yield: 4900, value: 4700 },
  { date: '2024-05-30', yield: 4920, value: 4720 },
  { date: '2024-05-31', yield: 4950, value: 4750 },
  { date: '2024-06-01', yield: 4980, value: 4780 },
  { date: '2024-06-02', yield: 5000, value: 4800 },
  { date: '2024-06-03', yield: 5020, value: 4820 },
  { date: '2024-06-04', yield: 5050, value: 4850 },
  { date: '2024-06-05', yield: 5080, value: 4880 },
  { date: '2024-06-06', yield: 5100, value: 4900 },
  { date: '2024-06-07', yield: 5120, value: 4920 },
  { date: '2024-06-08', yield: 5150, value: 4950 },
  { date: '2024-06-09', yield: 5180, value: 4980 },
  { date: '2024-06-10', yield: 5200, value: 5000 },
  { date: '2024-06-11', yield: 5220, value: 5020 },
  { date: '2024-06-12', yield: 5250, value: 5050 },
  { date: '2024-06-13', yield: 5280, value: 5080 },
  { date: '2024-06-14', yield: 5300, value: 5100 },
  { date: '2024-06-15', yield: 5320, value: 5120 },
  { date: '2024-06-16', yield: 5350, value: 5150 },
  { date: '2024-06-17', yield: 5380, value: 5180 },
  { date: '2024-06-18', yield: 5400, value: 5200 },
  { date: '2024-06-19', yield: 5420, value: 5220 },
  { date: '2024-06-20', yield: 5450, value: 5250 },
  { date: '2024-06-21', yield: 5480, value: 5280 },
  { date: '2024-06-22', yield: 5500, value: 5300 },
  { date: '2024-06-23', yield: 5520, value: 5320 },
  { date: '2024-06-24', yield: 5550, value: 5350 },
  { date: '2024-06-25', yield: 5580, value: 5380 },
  { date: '2024-06-26', yield: 5600, value: 5400 },
  { date: '2024-06-27', yield: 5620, value: 5420 },
  { date: '2024-06-28', yield: 5650, value: 5450 },
  { date: '2024-06-29', yield: 5680, value: 5480 },
  { date: '2024-06-30', yield: 5700, value: 5500 },
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
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}