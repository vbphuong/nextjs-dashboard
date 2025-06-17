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

// Data for June 2025 (single month)
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

function SingleHorizontalBarChart() {
  return (
    <Card className="w-full bg-black text-white">
      <CardHeader className="items-center pb-2">
        <CardTitle className="text-lg">Performance Jun 2025</CardTitle>
        <CardDescription className="text-sm">Days for June 2025</CardDescription>
      </CardHeader>
      <CardContent className="pb-0 h-[400px]">
        <ChartContainer config={chartConfig} className="h-full">
          <BarChart data={chartDataJune} layout="vertical">
            <CartesianGrid stroke="#444" />
            <XAxis type="number" stroke="white" fontSize={12} />
            <YAxis dataKey="name" type="category" stroke="white" fontSize={12} />
            <ChartTooltip />
            <Bar dataKey="minDays" fill="#87CEEB" barSize={30} />
            <Bar dataKey="maxDays" fill="#1E90FF" barSize={30} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Up by 3%
        </div>
        <div className="text-gray-300 flex items-center gap-2 leading-none">
          June 2025
        </div>
      </CardFooter>
    </Card>
  )
}

export default function OneHorizontalBarCharts() {
  return (
    <div className="w-full">
      <SingleHorizontalBarChart />
    </div>
  )
}