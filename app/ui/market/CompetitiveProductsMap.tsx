"use client"

import { useState } from "react"

interface ProductLocation {
  id: string;
  name: string;
  category: string;
  lat: number;
  lng: number;
  density: number;
}

const productLocations: ProductLocation[] = [
  { id: "COMP001", name: "Electronics", category: "Tech", lat: 10.0304, lng: 105.7823, density: 8 }, // Cần Thơ
  { id: "COMP002", name: "Clothing", category: "Fashion", lat: 10.3811, lng: 105.4378, density: 6 }, // Long Xuyên
  { id: "COMP003", name: "Groceries", category: "Food", lat: 10.2533, lng: 105.9733, density: 10 }, // Vĩnh Long
  { id: "COMP004", name: "Furniture", category: "Home", lat: 10.0126, lng: 105.0829, density: 4 }, // Rạch Giá
  { id: "COMP005", name: "Books", category: "Education", lat: 9.1767, lng: 105.1500, density: 7 }, // Cà Mau
  { id: "COMP006", name: "Toys", category: "Kids", lat: 9.6000, lng: 105.9833, density: 9 }, // Sóc Trăng
]

export function CompetitiveProductsMap() {
  const [selectedProduct, setSelectedProduct] = useState<ProductLocation | null>(null)

  const mapIframeUrl = "https://www.google.com/maps/d/edit?mid=1IOkkGG0sjErCIIAiCkdwneYmAbXd1-k&usp=sharing"; 

  return (
    <div className="bg-black p-4 rounded-lg shadow-lg">
      <h2 className="text-white text-2xl font-bold mb-4">
        Highly Competitive Products Map
      </h2>
      <p className="text-gray-300 mb-4">
        Analyze products with many sellers in the same category to understand competitive pressures. If any scale has high density of some types of goods, suggestion for changing location or products is needed.
      </p>
      <div className="h-[400px] w-full relative">
        <iframe
          src={mapIframeUrl}
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen
          loading="lazy"
          title="Competitive Products Map"
        ></iframe>
      </div>
      {selectedProduct && (
        <div className="mt-4 text-gray-300">
          <p>Selected Product: {selectedProduct.name}</p>
          <p>Category: {selectedProduct.category}</p>
          <p>Density: {selectedProduct.density} sellers</p>
          {selectedProduct.density > 7 && <p className="text-red-500">High competition - Consider relocation!</p>}
        </div>
      )}
    </div>
  )
}