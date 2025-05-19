/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { NextRequest, NextResponse } from 'next/server';
import sequelize from '@/lib/sequelize';
import User from '@/models/User';
import Order from '@/models/Order';

export async function GET(req: NextRequest) {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // ⬅️ Auto-create tables jika belum ada

    // Insert dummy user & order jika kosong
    const [user, created] = await User.findOrCreate({
      where: { email: 'test@example.com' },
      defaults: { name: 'Test User', email: 'test@example.com' }
    });

    const order = await Order.create({
      user_id: user.id,
      total: 2000000,
      status: 'pending',
    });

    return NextResponse.json({
      message: 'Sequelize works!',
      user,
      order,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to connect to DB' }, { status: 500 });
  }
}
