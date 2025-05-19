/* eslint-disable prettier/prettier */
// app/api/cart/route.ts
import { NextRequest, NextResponse } from 'next/server';

const cart: { id: number; product: string; quantity: number }[] = [];

const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Keyboard' },
  { id: 3, name: 'Mouse' }
];

export async function POST(request: NextRequest) {
  const { productId, quantity } = await request.json();

  const product = products.find((p) => p.id === productId);
  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  const newItem = {
    id: cart.length + 1,
    product: product.name,
    quantity
  };

  cart.push(newItem);
  return NextResponse.json(newItem, { status: 201 });
}
