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
  { id: "POT001", name: "Electric Vehicles (EVs)", hotRegions: "Hà Nội, TP. Hồ Chí Minh", trend: "Eco-friendly transport, rising EV adoption", potential: "High - Urban demand growing" },
  { id: "POT002", name: "Handcrafted Wood Furniture", hotRegions: "Đà Nẵng, Hải Phòng", trend: "Artisanal home decor, export demand", potential: "Medium - Local craftsmanship potential" },
  { id: "POT003", name: "Specialty Coffee", hotRegions: "Đà Lạt, TP. Hồ Chí Minh", trend: "Premium coffee culture, cafe boom", potential: "High - Emerging market" },
  { id: "POT004", name: "Fashion Swimwear", hotRegions: "Nha Trang, Đà Nẵng", trend: "Beach tourism, trendy apparel", potential: "Medium - Tourism growth opportunity" },
  { id: "POT005", name: "Smart Home Devices", hotRegions: "Hà Nội, Hải Phòng", trend: "Tech-savvy households, smart living", potential: "High - Urbanization influence" },
]

export function PotentialProductsTable() {
  return (
    <Table className="bg-black">
      <TableCaption className="text-white">A list of potential products not yet present in Mekong Delta.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-white">ID</TableHead>
          <TableHead className="text-white">Product Name</TableHead>
          <TableHead className="text-white">Hot Regions</TableHead>
          <TableHead className="text-white">Consumption Trend</TableHead>
          <TableHead className="text-white text-right">Potential</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium text-white">{product.id}</TableCell>
            <TableCell className="text-gray-300">{product.name}</TableCell>
            <TableCell className="text-gray-300">{product.hotRegions}</TableCell>
            <TableCell className="text-gray-300">{product.trend}</TableCell>
            <TableCell className="text-right text-gray-300">{product.potential}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4} className="text-white">Total Potential Products</TableCell>
          <TableCell className="text-right text-white">5</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}