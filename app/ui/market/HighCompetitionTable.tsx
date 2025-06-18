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
  { id: "COMP001", name: "Electronics", category: "Tech", density: 8, suggestion: "Consider relocation" },
  { id: "COMP002", name: "Clothing", category: "Fashion", density: 6, suggestion: "Monitor competition" },
  { id: "COMP003", name: "Groceries", category: "Food", density: 10, suggestion: "Change product or location" },
  { id: "COMP004", name: "Furniture", category: "Home", density: 4, suggestion: "No action needed" },
  { id: "COMP005", name: "Books", category: "Education", density: 7, suggestion: "Monitor competition" },
]

export function HighCompetitionTable() {
  return (
    <Table className="bg-black">
      <TableCaption className="text-white">A list of highly competitive products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-white">ID</TableHead>
          <TableHead className="text-white">Product Name</TableHead>
          <TableHead className="text-white">Category</TableHead>
          <TableHead className="text-white text-right">Density</TableHead>
          <TableHead className="text-white">Suggestion</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium text-white">{product.id}</TableCell>
            <TableCell className="text-gray-300">{product.name}</TableCell>
            <TableCell className="text-gray-300">{product.category}</TableCell>
            <TableCell className="text-right text-gray-300">{product.density} sellers</TableCell>
            <TableCell className="text-gray-300">
              {product.density > 7 ? <span className="text-red-500">{product.suggestion}</span> : product.suggestion}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3} className="text-white">Total Competitive Products</TableCell>
          <TableCell className="text-right text-white">5</TableCell>
          <TableCell className="text-white"></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}