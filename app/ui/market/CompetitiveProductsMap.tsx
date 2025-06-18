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

export function CompetitiveProductsMap() {
  const [selectedProduct] = useState<ProductLocation | null>(null)

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
        src="https://www.google.com/maps/d/embed?mid=1IOkkGG0sjErCIIAiCkdwneYmAbXd1-k&ehbc=2E312F"
        width="640"
        height="480"
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