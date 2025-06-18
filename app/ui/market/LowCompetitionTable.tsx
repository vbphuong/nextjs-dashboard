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

const products = [
  { id: "PROD001", name: "Handcrafted Pottery", demand: "High", frequency: "Rare", difficulty: "High" },
  { id: "PROD002", name: "Organic Herbal Tea", demand: "High", frequency: "Low", difficulty: "Medium" },
  { id: "PROD003", name: "Artisanal Cheese", demand: "High", frequency: "Rare", difficulty: "High" },
  { id: "PROD004", name: "Handwoven Baskets", demand: "Medium", frequency: "Low", difficulty: "Medium" },
  { id: "PROD005", name: "Specialty Spices", demand: "High", frequency: "Rare", difficulty: "High" },
]

export function LowCompetitionTable() {
  return (
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
          <TableRow key={product.id}>
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
  )
}