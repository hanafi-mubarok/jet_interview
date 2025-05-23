'use client';

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCartClick = (product: Product) => {
    addToCart(product);
  };

  return (
    <Box
      sx={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Box
          onClick={() =>
            router.push(`/products/${product?.id}/product-details`)
          }
          sx={{ cursor: 'pointer' }}
        >
          <Image
            priority
            src={product?.image}
            alt={product?.title}
            width={300}
            height={300}
          />
          <Typography variant="h6">{product?.title}</Typography>
          <Typography variant="subtitle1">{product?.category}</Typography>
          <Typography variant="subtitle1">
            ${product?.price?.toFixed(2)}
          </Typography>
        </Box>
      </Box>
      <Box mt={1} display="flex" justifyContent="center">
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleAddToCartClick(product)}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
