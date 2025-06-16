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
        <CardDescription className="text-gray-400">
          Decline in Natural, Rise in Farmed/Imported Products
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="bg-black">
          <BarChart data={chartData}>
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
                    color: "white",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                  }}
                  itemStyle={{ color: "white" }}
                  labelStyle={{ color: "white" }}
                />
              }
            />
            <ChartLegend
              content={<ChartLegendContent className="text-white" />}
            />
            <Bar
              dataKey="natural"
              stackId="a"
              fill="#1E40AF"
              radius={[0, 0, 4, 4]}
              isAnimationActive={true}
              animationDuration={500}
              style={{ transition: "all 0.3s ease" }}
            />
            <Bar
              dataKey="farmedImported"
              stackId="a"
              fill="#60A5FA"
              radius={[4, 4, 0, 0]}
              isAnimationActive={true}
              animationDuration={500}
              style={{ transition: "all 0.3s ease" }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>

      {/* CSS Override để fix hover trắng */}
      <style jsx global>{`
        .recharts-bar-rectangle:hover {
          fill: inherit !important;
          stroke: none !important;
        }
      `}</style>
    </Card>
  )
}
