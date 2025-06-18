"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ReferenceLine } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", units: 120 },
  { month: "February", units: 150 },
  { month: "March", units: 170 },
  { month: "April", units: 140 },
  { month: "May", units: 180 },
  { month: "June", units: 160 },
  { month: "July", units: 190 },
  { month: "August", units: 200 },
  { month: "September", units: 180 },
  { month: "October", units: 160 },
  { month: "November", units: 140 },
  { month: "December", units: 130 },
]

const average = chartData.reduce((sum, d) => sum + d.units, 0) / chartData.length;

export function CustomAreaChart() {
  return (
    <Card className="bg-black">
      <CardHeader>
        <CardTitle className="text-white">Monthly Goods Trade Overview (2024)</CardTitle>
        <CardDescription className="text-gray-300">
          Understanding the rise and fall of goods throughout the year to help local vendors make informed decisions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
            height={200}
          >
            <CartesianGrid vertical={false} stroke="#4B5563" />
            <XAxis
              dataKey="month"
              tick={{ fill: "#E5E7EB" }}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tick={{ fill: "#E5E7EB" }}
              axisLine={false}
              tickLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="units"
              type="natural"
              fill="#93C5FD"
              fillOpacity={0.3}
              stroke="#93C5FD"
              strokeWidth={2}
            />
            <ReferenceLine
              y={average}
              stroke="#4B5563"
              strokeDasharray="3 3"
              label={{
                value: `AVG: ${average.toFixed(0)} units/month`,
                position: "insideTopLeft",
                fill: "#E5E7EB",
              }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium text-white">
              Trending up by 5.2% this month{" "}
              <TrendingUp className="h-4 w-4 text-blue-400" />
            </div>
            <div className="text-gray-300 flex items-center gap-2 leading-none">
              January - December 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}