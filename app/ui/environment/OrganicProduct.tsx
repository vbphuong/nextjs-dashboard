"use client"

import { TrendingDown } from "lucide-react"
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
  { month: "May 2025", natural: 60, farmedImported: 40 },
  { month: "June 2025", natural: 45, farmedImported: 55 },
  { month: "July 2025", natural: 30, farmedImported: 70 },
  { month: "August 2025", natural: 20, farmedImported: 80 },
]

const chartConfig = {
  natural: {
    label: "Natural Products",
    color: "#1E40AF", // Dark blue
  },
  farmedImported: {
    label: "Farmed/Imported Products",
    color: "#60A5FA", // Light blue
  },
} satisfies ChartConfig

export function ChartBarStacked() {
  return (
    <Card className="bg-black border-none">
      <CardHeader>
        <CardTitle className="text-white">Bar Chart - Stacked + Legend</CardTitle>
        <CardDescription className="text-gray-400">Decline in Natural, Rise in Farmed/Imported Products</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="bg-black">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} stroke="#4B5563" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{ fill: "white" }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  style={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #4B5563",
                    borderRadius: "8px",
                    padding: "10px",
                    color: "#FFFFFF",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                  }}
                  itemStyle={{ color: "#FFFFFF" }}
                  labelStyle={{ color: "#FFFFFF" }}
                />
              }
            />
            <ChartLegend
              content={
                <ChartLegendContent
                  className="text-white"
                />
              }
            />
            <Bar
              dataKey="natural"
              stackId="a"
              fill="var(--color-natural)"
              radius={[0, 0, 4, 4]}
              isAnimationActive={true}
              animationDuration={500}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              style={{
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.filter = "brightness(1.2) drop-shadow(0 0 10px rgba(30, 64, 175, 0.5))";
              }}
              onMouseOut={(e) => {
                e.target.style.filter = "none";
              }}
            />
            <Bar
              dataKey="farmedImported"
              stackId="a"
              fill="var(--color-farmedImported)"
              radius={[4, 4, 0, 0]}
              isAnimationActive={true}
              animationDuration={500}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              style={{
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.filter = "brightness(1.2) drop-shadow(0 0 10px rgba(96, 165, 250, 0.5))";
              }}
              onMouseOut={(e) => {
                e.target.style.filter = "none";
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}