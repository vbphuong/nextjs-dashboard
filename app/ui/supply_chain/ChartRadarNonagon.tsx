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

// Data for three different charts (April, May, June 2025)
const chartData1 = [
  { metric: "Land subsidence", value: 2 },
  { metric: "Groundwater depletion", value: 3 },
  { metric: "Saline intrusion", value: 4 },
  { metric: "Pollution", value: 5 },
  { metric: "Labor shortage", value: 2 },
  { metric: "Weak logistics", value: 4 },
  { metric: "Climate change", value: 5 },
  { metric: "Raw material exports", value: 2 },
  { metric: "Market fluctuations", value: 3 },
]

const chartData2 = [
  { metric: "Land subsidence", value: 2 },
  { metric: "Groundwater depletion", value: 4 },
  { metric: "Saline intrusion", value: 3 },
  { metric: "Pollution", value: 5 },
  { metric: "Labor shortage", value: 2 },
  { metric: "Weak logistics", value: 4 },
  { metric: "Climate change", value: 5 },
  { metric: "Raw material exports", value: 3 },
  { metric: "Market fluctuations", value: 4 },
]

const chartData3 = [
  { metric: "Land subsidence", value: 3 },
  { metric: "Groundwater depletion", value: 4 },
  { metric: "Saline intrusion", value: 3 },
  { metric: "Pollution", value: 2 },
  { metric: "Labor shortage", value: 4 },
  { metric: "Weak logistics", value: 5 },
  { metric: "Climate change", value: 5 },
  { metric: "Raw material exports", value: 3 },
  { metric: "Market fluctuations", value: 4 },
]

const chartConfig = {
  value: {
    label: "Value",
    color: "#90EE90", // Light green for radar area
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
    <Card className="w-[320px] bg-black text-white">
      <CardHeader className="items-center pb-2">
        <CardTitle className="text-sm">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[260px]"
        >
          <RadarChart data={data}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: "white" }} />
            <PolarGrid stroke="white" />
            <Radar
              dataKey="value"
              fill="#60A5FA" 
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-1 text-xs">
        <div className="flex items-center gap-1 leading-none font-medium">
          {trend} <TrendingUp className="h-3 w-3 text-white" />
        </div>
        <div className="text-gray-300 flex items-center gap-1 leading-none">
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
        title="Performance Apr 2025"
        description="Metrics for April 2025"
        footerText="April 2025"
        trend="Up by 3.2%"
      />
      <SingleRadarChart
        data={chartData2}
        title="Performance May 2025"
        description="Metrics for May 2025"
        footerText="May 2025"
        trend="Up by 4.1%"
      />
      <SingleRadarChart
        data={chartData3}
        title="Performance Jun 2025"
        description="Metrics for June 2025"
        footerText="June 2025"
        trend="Up by 4.3%"
      />
    </div>
  )
}