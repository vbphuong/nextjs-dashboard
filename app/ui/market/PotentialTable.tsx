"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { motion } from "framer-motion"

// Animation variants
const tableVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren", // Chạy animation con sau khi animation cha hoàn tất
      staggerChildren: 0.1, // Tạo hiệu ứng tuần tự cho các hàng
    },
  },
}

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

const potentialProducts = [
  { name: "Electric Vehicles (EVs)", hotRegions: "Hà Nội, TP. Hồ Chí Minh", trend: "Eco-friendly transport, rising EV adoption", potential: "High - Urban demand growing" },
  { name: "Handcrafted Wood Furniture", hotRegions: "Đà Nẵng, Hải Phòng", trend: "Artisanal home decor, export demand", potential: "Medium - Local craftsmanship potential" },
  { name: "Specialty Coffee", hotRegions: "Đà Lạt, TP. Hồ Chí Minh", trend: "Premium coffee culture, cafe boom", potential: "High - Emerging market" },
  { name: "Fashion Swimwear", hotRegions: "Nha Trang, Đà Nẵng", trend: "Beach tourism, trendy apparel", potential: "Medium - Tourism growth opportunity" },
  { name: "Smart Home Devices", hotRegions: "Hà Nội, Hải Phòng", trend: "Tech-savvy households, smart living", potential: "High - Urbanization influence" },
]

export function PotentialProductsTable() {
  return (
    <motion.div
      className="bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={tableVariants}
    >
      <Table>
        <TableCaption className="text-white">A list of potential products not yet present in Mekong Delta.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] text-white">Product Name</TableHead>
            <TableHead className="text-white">Hot Regions</TableHead>
            <TableHead className="text-white">Consumption Trend</TableHead>
            <TableHead className="text-white text-right">Potential</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {potentialProducts.map((product, index) => (
            <motion.tr key={index} variants={rowVariants}>
              <TableCell className="font-medium text-white">{product.name}</TableCell>
              <TableCell className="text-gray-300">{product.hotRegions}</TableCell>
              <TableCell className="text-gray-300">{product.trend}</TableCell>
              <TableCell className="text-right text-gray-300">{product.potential}</TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  )
}