/* eslint-disable prettier/prettier */
// app/api/products/route.ts
import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Keyboard' },
  { id: 3, name: 'Mouse' }
];

export async function GET() {
  return NextResponse.json(products);
}
