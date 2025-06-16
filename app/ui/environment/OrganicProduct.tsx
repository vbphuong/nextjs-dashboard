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
                const rect = e.target as SVGRectElement;
                rect.style.filter = "brightness(1.2)";
                const shadow = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                shadow.setAttribute("x", rect.getAttribute("x") || "0");
                shadow.setAttribute("y", rect.getAttribute("y") || "0");
                shadow.setAttribute("width", rect.getAttribute("width") || "0");
                shadow.setAttribute("height", rect.getAttribute("height") || "0");
                shadow.setAttribute("fill", "#4B5563"); // Dark gray, nearly black
                shadow.setAttribute("opacity", "0");
                shadow.style.transition = "opacity 0.3s ease";
                rect.parentNode?.insertBefore(shadow, rect);
                setTimeout(() => {
                  shadow.setAttribute("opacity", "0.5");
                }, 10);
                rect.dataset.shadowId = shadow.getAttribute("id") || "";
              }}
              onMouseOut={(e) => {
                const rect = e.target as SVGRectElement;
                rect.style.filter = "none";
                const shadowId = rect.dataset.shadowId;
                if (shadowId) {
                  const shadow = rect.parentNode?.querySelector(`#${shadowId}`) as SVGRectElement;
                  if (shadow) shadow.remove();
                }
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
                const rect = e.target as SVGRectElement;
                rect.style.filter = "brightness(1.2)";
                const shadow = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                shadow.setAttribute("x", rect.getAttribute("x") || "0");
                shadow.setAttribute("y", rect.getAttribute("y") || "0");
                shadow.setAttribute("width", rect.getAttribute("width") || "0");
                shadow.setAttribute("height", rect.getAttribute("height") || "0");
                shadow.setAttribute("fill", "#4B5563"); // Dark gray, nearly black
                shadow.setAttribute("opacity", "0");
                shadow.style.transition = "opacity 0.3s ease";
                rect.parentNode?.insertBefore(shadow, rect);
                setTimeout(() => {
                  shadow.setAttribute("opacity", "0.5");
                }, 10);
                rect.dataset.shadowId = shadow.getAttribute("id") || "";
              }}
              onMouseOut={(e) => {
                const rect = e.target as SVGRectElement;
                rect.style.filter = "none";
                const shadowId = rect.dataset.shadowId;
                if (shadowId) {
                  const shadow = rect.parentNode?.querySelector(`#${shadowId}`) as SVGRectElement;
                  if (shadow) shadow.remove();
                }
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}