"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

// Định nghĩa kiểu dữ liệu cho product
interface Product {
  id: string;
  name: string;
  demand: string;
  frequency: string;
  difficulty: string;
  trendData: { month: string; value: number }[];
}

const products: Product[] = [
  { id: "PROD001", name: "Handcrafted Pottery", demand: "High", frequency: "Rare", difficulty: "High", trendData: [
    { month: "Jan", value: 50 }, { month: "Feb", value: 60 }, { month: "Mar", value: 70 }, { month: "Apr", value: 65 },
    { month: "May", value: 80 }, { month: "Jun", value: 75 }
  ] },
  { id: "PROD002", name: "Organic Herbal Tea", demand: "High", frequency: "Low", difficulty: "Medium", trendData: [
    { month: "Jan", value: 30 }, { month: "Feb", value: 40 }, { month: "Mar", value: 45 }, { month: "Apr", value: 50 },
    { month: "May", value: 55 }, { month: "Jun", value: 60 }
  ] },
  { id: "PROD003", name: "Artisanal Cheese", demand: "High", frequency: "Rare", difficulty: "High", trendData: [
    { month: "Jan", value: 70 }, { month: "Feb", value: 80 }, { month: "Mar", value: 90 }, { month: "Apr", value: 85 },
    { month: "May", value: 100 }, { month: "Jun", value: 95 }
  ] },
  { id: "PROD004", name: "Handwoven Baskets", demand: "Medium", frequency: "Low", difficulty: "Medium", trendData: [
    { month: "Jan", value: 20 }, { month: "Feb", value: 25 }, { month: "Mar", value: 30 }, { month: "Apr", value: 35 },
    { month: "May", value: 40 }, { month: "Jun", value: 45 }
  ] },
  { id: "PROD005", name: "Specialty Spices", demand: "High", frequency: "Rare", difficulty: "High", trendData: [
    { month: "Jan", value: 90 }, { month: "Feb", value: 100 }, { month: "Mar", value: 110 }, { month: "Apr", value: 105 },
    { month: "May", value: 120 }, { month: "Jun", value: 115 }
  ] },
]

export function LowCompetitionTable() {
  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null)

  return (
    <div className="relative">
      <Table className="bg-black">
        <TableCaption className="text-white">A list of low-competition products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-white">ID</TableHead>
            <TableHead className="text-white">Product Name</TableHead>
            <TableHead className="text-white">Demand</TableHead>
            <TableHead className="text-white">Trade Frequency</TableHead>
            <TableHead className="text-white text-right">Difficulty</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              onMouseEnter={() => setHoveredProduct(product)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <TableCell className="font-medium text-white">{product.id}</TableCell>
              <TableCell className="text-gray-300">{product.name}</TableCell>
              <TableCell className="text-gray-300">{product.demand}</TableCell>
              <TableCell className="text-gray-300">{product.frequency}</TableCell>
              <TableCell className="text-right text-gray-300">{product.difficulty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="text-white">Total Unique Products</TableCell>
            <TableCell className="text-right text-white">5</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      {hoveredProduct && (
        <div className="absolute top-0 left-full ml-4 bg-black p-2 rounded shadow-lg z-10">
          <LineChart width={200} height={100} data={hoveredProduct.trendData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
            <CartesianGrid stroke="#4B5563" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: "#E5E7EB" }} tickLine={false} axisLine={false} interval="preserveStartEnd" />
            <YAxis tick={{ fill: "#E5E7EB" }} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="value" stroke="#93C5FD" strokeWidth={2} dot={false} />
          </LineChart>
          <p className="text-gray-300 text-xs mt-2">Recent Trend (Jan-Jun 2025)</p>
        </div>
      )}
    </div>
  )
}

// Định nghĩa kiểu cho Tooltip
interface TooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; payload: { month: string; value: number } }>;
}

function CustomTooltip({ active, payload }: TooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white p-1 border border-gray-700 rounded">
        <p>{`Value: ${payload[0].value}`}</p>
        <p>{`Month: ${payload[0].payload.month}`}</p>
      </div>
    )
  }
  return null
}