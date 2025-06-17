"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip } from "@/components/ui/chart"

// Data for three months (April, May, June 2025)
const chartDataApril = [
  { name: "Rico", minDays: 10, maxDays: 20 },
  { name: "Sentfood", minDays: 15, maxDays: 35 },
  { name: "Fvivts", minDays: 8, maxDays: 15 },
  { name: "Siock and pevilty", minDays: 12, maxDays: 25 },
  { name: "Piebesed food", minDays: 18, maxDays: 30 },
  { name: "Aoritoitunal prodvets", minDays: 20, maxDays: 40 },
]

const chartDataMay = [
  { name: "Rico", minDays: 11, maxDays: 21 },
  { name: "Sentfood", minDays: 16, maxDays: 36 },
  { name: "Fvivts", minDays: 9, maxDays: 16 },
  { name: "Siock and pevilty", minDays: 13, maxDays: 26 },
  { name: "Piebesed food", minDays: 19, maxDays: 31 },
  { name: "Aoritoitunal prodvets", minDays: 21, maxDays: 41 },
]

const chartDataJune = [
  { name: "Rico", minDays: 12, maxDays: 22 },
  { name: "Sentfood", minDays: 17, maxDays: 37 },
  { name: "Fvivts", minDays: 10, maxDays: 17 },
  { name: "Siock and pevilty", minDays: 14, maxDays: 27 },
  { name: "Piebesed food", minDays: 20, maxDays: 32 },
  { name: "Aoritoitunal prodvets", minDays: 22, maxDays: 42 },
]

const chartConfig = {
  minDays: {
    label: "minimum days",
    color: "#87CEEB", // Light blue
  },
  maxDays: {
    label: "maximum days",
    color: "#1E90FF", // Blue
  },
} satisfies ChartConfig

interface HorizontalBarChartProps {
  data: typeof chartDataApril
  title: string
  description: string
  footerText: string
  trend: string
}

function SingleHorizontalBarChart({ data, title, description, footerText, trend }: HorizontalBarChartProps) {
  return (
    <Card className="w-[280px] bg-black text-white">
      <CardHeader className="items-center pb-2">
        <CardTitle className="text-sm">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-0 h-[200px]">
        <ChartContainer config={chartConfig} className="h-full">
          <BarChart data={data} layout="vertical">
            <CartesianGrid stroke="#444" />
            <XAxis type="number" stroke="white" fontSize={10} />
            <YAxis dataKey="name" type="category" stroke="white" fontSize={10} />
            <ChartTooltip />
            <Bar dataKey="minDays" fill="#87CEEB" barSize={20} />
            <Bar dataKey="maxDays" fill="#1E90FF" barSize={20} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-1 text-xs">
        <div className="flex items-center gap-1 leading-none font-medium">
          {trend}
        </div>
        <div className="text-gray-300 flex items-center gap-1 leading-none">
          {footerText}
        </div>
      </CardFooter>
    </Card>
  )
}

export default function ThreeHorizontalBarCharts() {
  return (
    <div className="flex flex-row gap-4 justify-center">
      <SingleHorizontalBarChart
        data={chartDataApril}
        title="Performance Apr 2025"
        description="Days for April 2025"
        footerText="April 2025"
        trend="Stable"
      />
      <SingleHorizontalBarChart
        data={chartDataMay}
        title="Performance May 2025"
        description="Days for May 2025"
        footerText="May 2025"
        trend="Up by 2%"
      />
      <SingleHorizontalBarChart
        data={chartDataJune}
        title="Performance Jun 2025"
        description="Days for June 2025"
        footerText="June 2025"
        trend="Up by 3%"
      />
    </div>
  )
}