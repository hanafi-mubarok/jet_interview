/* eslint-disable prettier/prettier */
// /lib/cartData.ts
type CartItem = {
  id: number;
  product: string;
  quantity: number;
};

export const cart: CartItem[] = [];

export function addToCart(productId: number, quantity: number): CartItem {
  const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Keyboard' },
    { id: 3, name: 'Mouse' },
  ];

  const foundProduct = products.find(p => p.id === productId);
  if (!foundProduct) throw new Error('Product not found');

  const cartItem = {
    id: productId,
    product: foundProduct.name,
    quantity,
  };

  cart.push(cartItem);
  return cartItem;
}
