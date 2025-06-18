"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet"
import { useState } from "react"

// Định nghĩa icon tùy chỉnh
const customIcon = new Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

interface ProductLocation {
  id: string;
  name: string;
  category: string;
  lat: number;
  lng: number;
  density: number;
}

const productLocations: ProductLocation[] = [
  { id: "COMP001", name: "Electronics", category: "Tech", lat: 10.7769, lng: 106.7009, density: 8 },
  { id: "COMP002", name: "Clothing", category: "Fashion", lat: 10.8231, lng: 106.6297, density: 6 },
  { id: "COMP003", name: "Groceries", category: "Food", lat: 10.8500, lng: 106.7700, density: 10 },
  { id: "COMP004", name: "Furniture", category: "Home", lat: 10.8000, lng: 106.7200, density: 4 },
  { id: "COMP005", name: "Books", category: "Education", lat: 10.7800, lng: 106.6800, density: 7 },
  { id: "COMP006", name: "Toys", category: "Kids", lat: 10.8300, lng: 106.6500, density: 9 },
]

export function CompetitiveProductsMap() {
  const [selectedProduct, setSelectedProduct] = useState<ProductLocation | null>(null)

  return (
    <div className="bg-black p-4 rounded-lg shadow-lg">
      <h2 className="text-white text-2xl font-bold mb-4">
        Highly Competitive Products Map
      </h2>
      <p className="text-gray-300 mb-4">
        Analyze products with many sellers in the same category to understand competitive pressures. If any scale has high density of some types of goods, suggestion for changing location or products is needed.
      </p>
      <div className="h-[400px] w-full">
        <MapContainer center={[10.7769, 106.7009]} zoom={12} style={{ height: "100%", width: "100%", borderRadius: "8px" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {productLocations.map((location) => (
            <Marker
              key={location.id}
              position={[location.lat, location.lng]}
              icon={customIcon}
              eventHandlers={{
                click: () => setSelectedProduct(location),
              }}
            >
              <Popup>
                <div className="text-black">
                  <h3 className="font-bold">{location.name}</h3>
                  <p>Category: {location.category}</p>
                  <p>Density: {location.density} sellers</p>
                  {location.density > 7 && <p className="text-red-500">High competition - Consider relocation!</p>}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
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