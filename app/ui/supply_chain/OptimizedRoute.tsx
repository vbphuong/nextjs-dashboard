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

// Data for transport efficiency chart
const chartData = [
  { stage: "Loading", efficiency: 85 },
  { stage: "Transit", efficiency: 90 },
  { stage: "Unloading", efficiency: 80 },
]

const chartConfig = {
  efficiency: {
    label: "Efficiency (%)",
    color: "#87CEEB", // Light blue
  },
} satisfies ChartConfig

export function OptimalRouteVisualization() {
  return (
    <Card className="w-full bg-black text-white">
      <CardHeader>
        <CardTitle className="text-lg">Optimal Route Visualization</CardTitle>
        <CardDescription className="text-sm">
          Transport Route: Cái Răng to Cái Bè (June 2025)
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2470.135312798945!2d105.80139931579468!3d10.015881692718857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x31a0894d4d4d4d4d%3A0x9c2c6c6c6c6c6c6c!2sC%E1%BA%A7u%20C%E1%BA%A7i%20R%C4%83ng%2C%20Ninh%20Kieu%2C%20C%E1%BA%A7n%20Th%C6%A1%2C%20Vietnam!3m2!1d10.0158817!2d105.8013993!4m5!1s0x31a0a0a0a0a0a0a0%3A0xb0b0b0b0b0b0b0b0!2sC%E1%BA%A7u%20C%E1%BA%A7i%20B%C3%A8%2C%20T%C3%A2n%20Phong%2C%20Ch%C3%A2u%20Th%C3%A0nh%2C%20T%C3%A2n%20An%2C%20Vietnam!3m2!1d10.348589!2d106.143589!5e0!3m2!1sen!2sus!4v1623923400000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="chart-container">
          <ChartContainer config={chartConfig} className="h-[300px]">
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid stroke="#444" />
              <XAxis type="number" stroke="white" tickLine={false} axisLine={false} />
              <YAxis dataKey="stage" type="category" stroke="white" tickLine={false} axisLine={false} tickMargin={10} />
              <ChartTooltip cursor={false} />
              <Bar dataKey="efficiency" fill="#87CEEB" barSize={30} radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
        <div className="stats-container flex justify-around">
          <div className="stat-box p-4 rounded-lg bg-[#1E90FF]">
            <h3 className="text-sm">Distance</h3>
            <p className="text-lg font-bold">~150 km</p>
          </div>
          <div className="stat-box p-4 rounded-lg bg-[#1E90FF]">
            <h3 className="text-sm">Estimated Time</h3>
            <p className="text-lg font-bold">~4 hours</p>
          </div>
          <div className="stat-box p-4 rounded-lg bg-[#1E90FF]">
            <h3 className="text-sm">Cost</h3>
            <p className="text-lg font-bold">~500 USD</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Optimized route as of June 17, 2025, 10:22 PM +07
        </div>
      </CardFooter>
    </Card>
  )
}