"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

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

export const description = "A nonagon radar chart"

const chartData = [
  { metric: "Metric 1", value: 186 },
  { metric: "Metric 2", value: 305 },
  { metric: "Metric 3", value: 237 },
  { metric: "Metric 4", value: 273 },
  { metric: "Metric 5", value: 209 },
  { metric: "Metric 6", value: 214 },
  { metric: "Metric 7", value: 250 },
  { metric: "Metric 8", value: 280 },
  { metric: "Metric 9", value: 195 },
]

const chartConfig = {
  value: {
    label: "Value",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartRadarNonagon() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Nonagon Radar Chart</CardTitle>
        <CardDescription>
          Showing performance metrics across 9 categories
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="metric" />
            <PolarGrid />
            <Radar
              dataKey="value"
              fill="var(--color-value)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Performance up by 4.8% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground flex items-center gap-2 leading-none">
          Q1 - Q3 2025
        </div>
      </CardFooter>
    </Card>
  )
}