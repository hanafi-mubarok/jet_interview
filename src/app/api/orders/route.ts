/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import sequelize from '@/lib/sequelize';
import User from '@/models/User';
import Order from '@/models/Order';

export async function GET(req: NextRequest) {
  await sequelize.sync();

  const orders = await Order.findAll({
    include: [{ model: User }],
  });

  return NextResponse.json(orders);
}
