/* eslint-disable prettier/prettier */
import { Product } from '@/types';

export const API_URL = 'https://fakestoreapi.com';


export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`, {
    next: {
      revalidate: 3600, 
    },
  });
  const data: Product[] = await res.json();
  return data;
};


export const getCategories = async () => {
  const res = await fetch(`${API_URL}/products/categories`, {
    cache: 'force-cache', 
  });
  const data: string[] = await res.json();
  return data;
};


export const getCategoryProducts = async (categoryName: string) => {
  const res = await fetch(`${API_URL}/products/category/${categoryName}`, {
    next: {
      revalidate: 3600, 
    },
  });
  const data: Product[] = await res.json();
  return data;
};


export const getProduct = async (id: string) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    next: {
      revalidate: 3600, 
    },
  });
  const data: Product = await res.json();
  return data;
};
