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
  { name: "Rico", minDays: 12, maxDays: 22 },
  { name: "Sentfood", minDays: 17, maxDays: 37 },
  { name: "Fvivts", minDays: 10, maxDays: 17 },
  { name: "Siock and pevilty", minDays: 14, maxDays: 27 },
  { name: "Piebesed food", minDays: 20, maxDays: 32 },
  { name: "Aoritoitunal prodvets", minDays: 22, maxDays: 42 },
]

const chartConfig = {
  minDays: {
    label: "Minimum Days",
    color: "var(--chart-1)",
  },
  maxDays: {
    label: "Maximum Days",
    color: "var(--chart-2)",
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
        <ChartContainer config={chartConfig} className="h-full">
          <BarChart data={chartData} layout="vertical">
            <CartesianGrid horizontal={false} stroke="#444" />
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
            <Bar dataKey="minDays" fill="var(--color-minDays)" radius={4} />
            <Bar dataKey="maxDays" fill="var(--color-maxDays)" radius={4} />
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