'use client';
import React, { useEffect, useState } from 'react';
import { ProductList } from './ProductList';
import { useSearch } from '../contexts/SearchContext';
import { Product } from '../types';

export default function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const { search } = useSearch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return <ProductList products={filteredProducts} />;
}
