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

// Data for three different charts
const chartData1 = [
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

const chartData2 = [
  { metric: "Metric 1", value: 200 },
  { metric: "Metric 2", value: 280 },
  { metric: "Metric 3", value: 250 },
  { metric: "Metric 4", value: 260 },
  { metric: "Metric 5", value: 220 },
  { metric: "Metric 6", value: 230 },
  { metric: "Metric 7", value: 270 },
  { metric: "Metric 8", value: 290 },
  { metric: "Metric 9", value: 210 },
]

const chartData3 = [
  { metric: "Metric 1", value: 170 },
  { metric: "Metric 2", value: 320 },
  { metric: "Metric 3", value: 240 },
  { metric: "Metric 4", value: 280 },
  { metric: "Metric 5", value: 200 },
  { metric: "Metric 6", value: 220 },
  { metric: "Metric 7", value: 260 },
  { metric: "Metric 8", value: 270 },
  { metric: "Metric 9", value: 180 },
]

const chartConfig = {
  value: {
    label: "Value",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

interface RadarChartProps {
  data: typeof chartData1
  title: string
  description: string
  footerText: string
  trend: string
}

function SingleRadarChart({ data, title, description, footerText, trend }: RadarChartProps) {
  return (
    <Card className="w-[320px]">
      <CardHeader className="items-center pb-2">
        <CardTitle className="text-sm">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[240px]"
        >
          <RadarChart data={data}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10 }} />
            <PolarGrid />
            <Radar
              dataKey="value"
              fill="var(--color-value)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-1 text-xs">
        <div className="flex items-center gap-1 leading-none font-medium">
          {trend} <TrendingUp className="h-3 w-3" />
        </div>
        <div className="text-muted-foreground flex items-center gap-1 leading-none">
          {footerText}
        </div>
      </CardFooter>
    </Card>
  )
}

export default function ThreeRadarCharts() {
  return (
    <div className="flex flex-row gap-4 justify-center">
      <SingleRadarChart
        data={chartData1}
        title="Performance Q1"
        description="Metrics for Q1 2025"
        footerText="Jan - Mar 2025"
        trend="Up by 4.8%"
      />
      <SingleRadarChart
        data={chartData2}
        title="Performance Q2"
        description="Metrics for Q2 2025"
        footerText="Apr - Jun 2025"
        trend="Up by 5.1%"
      />
      <SingleRadarChart
        data={chartData3}
        title="Performance Q3"
        description="Metrics for Q3 2025"
        footerText="Jul - Sep 2025"
        trend="Up by 4.5%"
      />
    </div>
  )
}