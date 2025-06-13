'use client';

import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Chart data for feedback scores
const chartData = [
  { date: "2024-04-01", provider: 4.2, consumer: 3.8 },
  { date: "2024-04-02", provider: 4.0, consumer: 3.9 },
  { date: "2024-04-03", provider: 4.5, consumer: 4.1 },
  { date: "2024-04-04", provider: 4.3, consumer: 4.0 },
  { date: "2024-04-05", provider: 4.7, consumer: 4.2 },
  { date: "2024-04-06", provider: 4.4, consumer: 4.3 },
  { date: "2024-04-07", provider: 4.1, consumer: 3.7 },
  { date: "2024-04-08", provider: 4.6, consumer: 4.4 },
  { date: "2024-04-09", provider: 3.9, consumer: 3.6 },
  { date: "2024-04-10", provider: 4.2, consumer: 4.0 },
  { date: "2024-04-11", provider: 4.5, consumer: 4.3 },
  { date: "2024-04-12", provider: 4.3, consumer: 4.1 },
  { date: "2024-04-13", provider: 4.8, consumer: 4.5 },
  { date: "2024-04-14", provider: 4.0, consumer: 3.8 },
  { date: "2024-04-15", provider: 4.1, consumer: 3.9 },
  { date: "2024-04-16", provider: 4.2, consumer: 4.0 },
  { date: "2024-04-17", provider: 4.7, consumer: 4.4 },
  { date: "2024-04-18", provider: 4.6, consumer: 4.5 },
  { date: "2024-04-19", provider: 4.3, consumer: 4.0 },
  { date: "2024-04-20", provider: 3.8, consumer: 3.7 },
  { date: "2024-04-21", provider: 4.0, consumer: 3.9 },
  { date: "2024-04-22", provider: 4.2, consumer: 4.0 },
  { date: "2024-04-23", provider: 4.1, consumer: 4.2 },
  { date: "2024-04-24", provider: 4.5, consumer: 4.3 },
  { date: "2024-04-25", provider: 4.4, consumer: 4.1 },
  { date: "2024-04-26", provider: 3.9, consumer: 3.8 },
  { date: "2024-04-27", provider: 4.7, consumer: 4.5 },
  { date: "2024-04-28", provider: 4.0, consumer: 3.9 },
  { date: "2024-04-29", provider: 4.3, consumer: 4.1 },
  { date: "2024-04-30", provider: 4.8, consumer: 4.4 },
  { date: "2024-05-01", provider: 4.2, consumer: 4.0 },
  { date: "2024-05-02", provider: 4.4, consumer: 4.2 },
  { date: "2024-05-03", provider: 4.3, consumer: 4.0 },
  { date: "2024-05-04", provider: 4.7, consumer: 4.5 },
  { date: "2024-05-05", provider: 4.9, consumer: 4.6 },
  { date: "2024-05-06", provider: 4.8, consumer: 4.7 },
  { date: "2024-05-07", provider: 4.4, consumer: 4.2 },
  { date: "2024-05-08", provider: 4.1, consumer: 3.9 },
  { date: "2024-05-09", provider: 4.3, consumer: 4.0 },
  { date: "2024-05-10", provider: 4.5, consumer: 4.3 },
  { date: "2024-05-11", provider: 4.4, consumer: 4.1 },
  { date: "2024-05-12", provider: 4.2, consumer: 4.0 },
  { date: "2024-05-13", provider: 4.0, consumer: 3.8 },
  { date: "2024-05-14", provider: 4.8, consumer: 4.6 },
  { date: "2024-05-15", provider: 4.7, consumer: 4.4 },
  { date: "2024-05-16", provider: 4.5, consumer: 4.3 },
  { date: "2024-05-17", provider: 4.9, consumer: 4.6 },
  { date: "2024-05-18", provider: 4.4, consumer: 4.2 },
  { date: "2024-05-19", provider: 4.2, consumer: 3.9 },
  { date: "2024-05-20", provider: 4.0, consumer: 3.8 },
  { date: "2024-05-21", provider: 3.9, consumer: 3.7 },
  { date: "2024-05-22", provider: 3.8, consumer: 3.6 },
  { date: "2024-05-23", provider: 4.3, consumer: 4.1 },
  { date: "2024-05-24", provider: 4.4, consumer: 4.0 },
  { date: "2024-05-25", provider: 4.2, consumer: 4.1 },
  { date: "2024-05-26", provider: 4.1, consumer: 3.9 },
  { date: "2024-05-27", provider: 4.8, consumer: 4.6 },
  { date: "2024-05-28", provider: 4.2, consumer: 4.0 },
  { date: "2024-05-29", provider: 3.9, consumer: 3.7 },
  { date: "2024-05-30", provider: 4.5, consumer: 4.3 },
  { date: "2024-05-31", provider: 4.0, consumer: 3.8 },
  { date: "2024-06-01", provider: 4.1, consumer: 3.9 },
  { date: "2024-06-02", provider: 4.7, consumer: 4.5 },
  { date: "2024-06-03", provider: 3.9, consumer: 3.7 },
  { date: "2024-06-04", provider: 4.6, consumer: 4.4 },
  { date: "2024-06-05", provider: 3.8, consumer: 3.6 },
  { date: "2024-06-06", provider: 4.4, consumer: 4.2 },
  { date: "2024-06-07", provider: 4.5, consumer: 4.3 },
  { date: "2024-06-08", provider: 4.6, consumer: 4.4 },
  { date: "2024-06-09", provider: 4.8, consumer: 4.7 },
  { date: "2024-06-10", provider: 4.0, consumer: 3.9 },
  { date: "2024-06-11", provider: 3.9, consumer: 3.7 },
  { date: "2024-06-12", provider: 4.9, consumer: 4.6 },
  { date: "2024-06-13", provider: 3.8, consumer: 3.6 },
  { date: "2024-06-14", provider: 4.5, consumer: 4.3 },
  { date: "2024-06-15", provider: 4.4, consumer: 4.2 },
  { date: "2024-06-16", provider: 4.6, consumer: 4.4 },
  { date: "2024-06-17", provider: 4.8, consumer: 4.6 },
  { date: "2024-06-18", provider: 3.9, consumer: 3.7 },
  { date: "2024-06-19", provider: 4.5, consumer: 4.3 },
  { date: "2024-06-20", provider: 4.7, consumer: 4.5 },
  { date: "2024-06-21", provider: 4.0, consumer: 3.8 },
  { date: "2024-06-22", provider: 4.4, consumer: 4.2 },
  { date: "2024-06-23", provider: 4.9, consumer: 4.7 },
  { date: "2024-06-24", provider: 3.9, consumer: 3.7 },
  { date: "2024-06-25", provider: 4.0, consumer: 3.8 },
  { date: "2024-06-26", provider: 4.6, consumer: 4.4 },
  { date: "2024-06-27", provider: 4.8, consumer: 4.6 },
  { date: "2024-06-28", provider: 4.0, consumer: 3.9 },
  { date: "2024-06-29", provider: 3.9, consumer: 3.7 },
  { date: "2024-06-30", provider: 4.7, consumer: 4.5 },
];

export function FeedbackChart() {
  const [timeRange, setTimeRange] = React.useState("90d");
  const [chartWidth, setChartWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => setChartWidth(window.innerWidth - 256); // Subtract nav bar width (256px)
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0 bg-gray-900/80 text-white border-gray-700 w-full">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b border-gray-700 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle className="text-blue-200">Feedback Score - Interactive</CardTitle>
          <CardDescription className="text-gray-300">
            Showing feedback scores for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex bg-gray-800 text-white border-gray-700"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl bg-gray-800 text-white border-gray-700">
            <SelectItem value="90d" className="rounded-lg hover:bg-gray-700">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg hover:bg-gray-700">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg hover:bg-gray-700">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <div style={{ width: '100%', height: '250px' }}>
          <AreaChart
            height={250}
            width={chartWidth || 500} // Fallback width if chartWidth is 0
            data={filteredData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="fillProvider" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillConsumer" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#60A5FA" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
              stroke="#D1D5DB"
              interval="preserveStartEnd"
            />
            <YAxis
              tickFormatter={(value) => value.toFixed(1)}
              stroke="#D1D5DB"
              domain={[3, 5]}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#1F2937', color: '#fff', border: '1px solid #4B5563' }}
              formatter={(value: number) => value.toFixed(1)}
              labelFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <Legend wrapperStyle={{ color: '#BFDBFE' }} />
            <Area
              type="natural"
              dataKey="consumer"
              stackId="a"
              stroke="#60A5FA"
              fill="url(#fillConsumer)"
            />
            <Area
              type="natural"
              dataKey="provider"
              stackId="a"
              stroke="#22C55E"
              fill="url(#fillProvider)"
            />
          </AreaChart>
        </div>
      </CardContent>
    </Card>
  );
}