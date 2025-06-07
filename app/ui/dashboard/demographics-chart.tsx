'use client';

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const description = 'Donut charts for demographic characteristics';

const ageData = [
  { category: '0-18', count: 150, fill: 'var(--color-age1)' },
  { category: '19-30', count: 300, fill: 'var(--color-age2)' },
  { category: '30-50', count: 400, fill: 'var(--color-age3)' },
  { category: '50-70', count: 200, fill: 'var(--color-age4)' },
  { category: '70+', count: 50, fill: 'var(--color-age5)' },
];

const incomeData = [
  { category: '0-1000$', count: 250, fill: 'var(--color-income1)' },
  { category: '1000-3000$', count: 350, fill: 'var(--color-income2)' },
  { category: '3000-5000$', count: 200, fill: 'var(--color-income3)' },
  { category: '5000$+', count: 100, fill: 'var(--color-income4)' },
];

const regionData = [
  { category: 'Bắc', count: 200, fill: 'var(--color-region1)' },
  { category: 'Nam', count: 450, fill: 'var(--color-region2)' },
  { category: 'Trung', count: 250, fill: 'var(--color-region3)' },
  { category: 'Nước ngoài', count: 50, fill: 'var(--color-region4)' },
];

const genderData = [
  { category: 'Male', count: 450, fill: 'var(--color-gender1)' },
  { category: 'Female', count: 400, fill: 'var(--color-gender2)' },
  { category: 'Different', count: 50, fill: 'var(--color-gender3)' },
];

const chartConfig: ChartConfig = {
  count: {
    label: 'Count',
  },
  age1: { label: '0-18', color: 'hsl(220, 70%, 50%)' },
  age2: { label: '19-30', color: 'hsl(160, 60%, 45%)' },
  age3: { label: '30-50', color: 'hsl(340, 65%, 55%)' },
  age4: { label: '50-70', color: 'hsl(280, 55%, 50%)' },
  age5: { label: '70+', color: 'hsl(40, 70%, 50%)' },
  income1: { label: '0-1000$', color: 'hsl(200, 80%, 50%)' },
  income2: { label: '1000-3000$', color: 'hsl(140, 70%, 45%)' },
  income3: { label: '3000-5000$', color: 'hsl(320, 75%, 55%)' },
  income4: { label: '5000$+', color: 'hsl(260, 60%, 50%)' },
  region1: { label: 'Bắc', color: 'hsl(180, 65%, 50%)' },
  region2: { label: 'Nam', color: 'hsl(120, 60%, 45%)' },
  region3: { label: 'Trung', color: 'hsl(300, 70%, 55%)' },
  region4: { label: 'Nước ngoài', color: 'hsl(20, 80%, 50%)' },
  gender1: { label: 'Male', color: 'hsl(210, 75%, 50%)' },
  gender2: { label: 'Female', color: 'hsl(330, 70%, 55%)' },
  gender3: { label: 'Different', color: 'hsl(90, 65%, 50%)' },
};

export default function DemographicsCharts() {
  const [isVisible, setIsVisible] = useState(false);
  const chartsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (chartsRef.current) {
      observer.observe(chartsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const charts = [
    {
      title: 'Age Distribution',
      description: 'Customer age groups in Mekong Delta',
      data: ageData,
      dataKey: 'count',
      nameKey: 'category',
    },
    {
      title: 'Income Distribution',
      description: 'Customer income ranges in Mekong Delta',
      data: incomeData,
      dataKey: 'count',
      nameKey: 'category',
    },
    {
      title: 'Region Distribution',
      description: 'Customer regions in Mekong Delta',
      data: regionData,
      dataKey: 'count',
      nameKey: 'category',
    },
    {
      title: 'Gender Distribution',
      description: 'Customer gender in Mekong Delta',
      data: genderData,
      dataKey: 'count',
      nameKey: 'category',
    },
  ];

  return (
    <div ref={chartsRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {charts.map((chart, index) => {
        const totalCount = chart.data.reduce((acc, curr) => acc + curr.count, 0);
        return (
          <Card key={index} className={`flex flex-col bg-gray-900/90 backdrop-blur-md ${isVisible ? 'animate-fadeIn' : ''}`}>
            <CardHeader className="items-center pb-0">
              <CardTitle>{chart.title}</CardTitle>
              <CardDescription>{chart.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chart.data}
                    dataKey={chart.dataKey}
                    nameKey={chart.nameKey}
                    innerRadius={60}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {totalCount.toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                People
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 leading-none font-medium">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-muted-foreground leading-none">
                Showing demographic data for the last 6 months
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}