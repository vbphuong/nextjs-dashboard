"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { name: "Rice", minDays: 24, maxDays: 44 },
  { name: "Seafood", minDays: 34, maxDays: 64},
  { name: "Fruits", minDays: 20, maxDays: 34 },
  { name: "Stock and poultry", minDays: 28, maxDays: 54 },
  { name: "Processed food", minDays: 40, maxDays: 64 },
  { name: "Agricultural products", minDays: 44, maxDays: 76 },
]

const chartConfig = {
  minDays: {
    label: "Minimum Days",
    color: "#87CEEB",
  },
  maxDays: {
    label: "Maximum Days",
    color: "#1E90FF",
  },
} satisfies ChartConfig

export function SingleHorizontalBarChart() {
  return (
    <Card className="w-full bg-black text-white">
      <CardHeader>
        <CardTitle>Performance Jun 2025</CardTitle>
        <CardDescription>Days for June 2025</CardDescription>
      </CardHeader>
      <CardContent className="h-[400px]">
        <ChartContainer config={chartConfig} className="h-full" style={{ marginLeft: '50px' }}>
          <BarChart data={chartData} layout="vertical" >
            <CartesianGrid horizontal={false} className="#text-grey" />
            <YAxis
              dataKey="name"
              type="category"
              stroke="white"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <XAxis
              type="number"
              stroke="white"
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
            <Bar dataKey="minDays" fill="#87CEEB" radius={4} />
            <Bar dataKey="maxDays" fill="#1E90FF" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Up by 3% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          June 2025
        </div>
      </CardFooter>
    </Card>
  )
}