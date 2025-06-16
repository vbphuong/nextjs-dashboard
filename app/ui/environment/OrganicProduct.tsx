"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { year: "2010", natural: 60, farmedImported: 40 },
  { year: "2015", natural: 45, farmedImported: 55 },
  { year: "2020", natural: 30, farmedImported: 70 },
  { year: "2025", natural: 20, farmedImported: 80 },
]

const chartConfig = {
  natural: {
    label: "Natural Products",
    color: "var(--chart-1)",
  },
  farmedImported: {
    label: "Farmed/Imported Products",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartBarStacked() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Stacked + Legend</CardTitle>
        <CardDescription>Decline in Natural, Rise in Farmed/Imported Products</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="natural"
              stackId="a"
              fill="var(--color-natural)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="farmedImported"
              stackId="a"
              fill="var(--color-farmedImported)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}