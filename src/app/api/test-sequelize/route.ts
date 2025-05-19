/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
// app/api/test-sequelize/route.ts
import { NextResponse } from 'next/server';
import sequelize from '@/lib/sequelize';

export async function GET() {
  try {
    await sequelize.authenticate();
    return NextResponse.json({ message: 'Database connected successfully' });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
  }
}
