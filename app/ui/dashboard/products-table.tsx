'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const products = [
  {
    product: 'Rice Seeds',
    age: '30-50',
    income: '1000-3000$',
    region: 'South',
    gender: 'Male',
  },
  {
    product: 'Fertilizers',
    age: '50-70',
    income: '0-1000$',
    region: 'South',
    gender: 'Male',
  },
  {
    product: 'Aquaculture Feed',
    age: '30-50',
    income: '3000-5000$',
    region: 'South',
    gender: 'Female',
  },
  {
    product: 'Farm Tools',
    age: '19-30',
    income: '0-1000$',
    region: 'Middle',
    gender: 'Male',
  },
  {
    product: 'Pesticides',
    age: '30-50',
    income: '1000-3000$',
    region: 'North',
    gender: 'Male',
  },
  {
    product: 'Fish Nets',
    age: '50-70',
    income: '1000-3000$',
    region: 'South',
    gender: 'Female',
  },
  {
    product: 'Irrigation Pumps',
    age: '30-50',
    income: '5000$+',
    region: 'South',
    gender: 'Male',
  },
];

export default function ProductsTable() {
  const [filters, setFilters] = useState({
    age: 'All',
    income: 'All',
    region: 'All',
    gender: 'All',
  });
  const [isVisible, setIsVisible] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

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

    if (tableRef.current) {
      observer.observe(tableRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filters.age === 'All' || product.age === filters.age) &&
      (filters.income === 'All' || product.income === filters.income) &&
      (filters.region === 'All' || product.region === filters.region) &&
      (filters.gender === 'All' || product.gender === filters.gender)
    );
  });

  return (
    <div ref={tableRef} className="bg-gray-900/90 backdrop-blur-md p-6 rounded-lg mt-6">
      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <select
          className="bg-gray-800 text-white border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filters.age}
          onChange={(e) => handleFilterChange('age', e.target.value)}
        >
          <option value="All">All Ages</option>
          <option value="0-18">0-18</option>
          <option value="19-30">19-30</option>
          <option value="30-50">30-50</option>
          <option value="50-70">50-70</option>
          <option value="70+">70+</option>
        </select>
        <select
          className="bg-gray-800 text-white border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filters.income}
          onChange={(e) => handleFilterChange('income', e.target.value)}
        >
          <option value="All">All Incomes</option>
          <option value="0-1000$">0-1000$</option>
          <option value="1000-3000$">1000-3000$</option>
          <option value="3000-5000$">3000-5000$</option>
          <option value="5000$+">5000$+</option>
        </select>
        <select
          className="bg-gray-800 text-white border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filters.region}
          onChange={(e) => handleFilterChange('region', e.target.value)}
        >
          <option value="All">All Regions</option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="Middle">Middle</option>
          <option value="Foreign">Foreign</option>
        </select>
        <select
          className="bg-gray-800 text-white border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filters.gender}
          onChange={(e) => handleFilterChange('gender', e.target.value)}
        >
          <option value="All">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Different">Different</option>
        </select>
      </div>
      <Table>
        <TableCaption className="text-gray-200">Products commonly purchased by customer groups in Mekong Delta</TableCaption>
        <TableHeader>
          <TableRow className="border-b border-gray-700">
            <TableHead className="w-[200px] text-blue-400">Product</TableHead>
            <TableHead className="text-blue-400">Age</TableHead>
            <TableHead className="text-blue-400">Income</TableHead>
            <TableHead className="text-blue-400">Region</TableHead>
            <TableHead className="text-blue-400">Gender</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProducts.map((product, index) => (
            <TableRow
              key={product.product}
              className={`border-b border-gray-700 ${isVisible ? 'animate-slideIn' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TableCell className="font-medium text-white">{product.product}</TableCell>
              <TableCell className="text-gray-200">{product.age}</TableCell>
              <TableCell className="text-gray-200">{product.income}</TableCell>
              <TableCell className="text-gray-200">{product.region}</TableCell>
              <TableCell className="text-gray-200">{product.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}