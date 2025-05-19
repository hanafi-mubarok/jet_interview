/* eslint-disable prettier/prettier */
'use client';

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Rating,
  Button,
} from '@mui/material';
import { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { useCart } from '../contexts/CartContext';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [showProducts, setShowProducts] = useState(false);
  const [mounted, setMounted] = useState(false); // Add this line
  const { addToCart } = useCart();

  useEffect(() => {
    setMounted(true); // Set mounted to true on client
  }, []);

  useEffect(() => {
    if (!products || products.length === 0) return;

    let loaded = 0;

    products.forEach((product) => {
      const img = new window.Image();
      img.src = product.image;

      if (img.complete) {
        loaded++;
        if (loaded === products.length) {
          setImagesLoaded(loaded);
        }
      } else {
        img.onload = () => {
          loaded++;
          if (loaded === products.length) {
            setImagesLoaded(loaded);
          }
        };
        img.onerror = () => {
          loaded++; // tetap hitung error untuk menghindari infinite loading
          if (loaded === products.length) {
            setImagesLoaded(loaded);
          }
        };
      }
    });
  }, [products]);

  useEffect(() => {
    if (imagesLoaded === products.length && products.length > 0) {
      const timer = setTimeout(() => setShowProducts(true), 100);
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded, products.length]);

  // SSR-safety: Only render on client after mount
  if (!mounted || !showProducts) {
    return <LoadingSpinner LoadingText="Loading product..." />;
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': {
                boxShadow: 6,
              },
            }}
          >
            <Box sx={{ position: 'relative', width: '100%', pt: '100%' }}>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: 16,
                }}
              />
            </Box>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Typography
                gutterBottom
                variant="h6"
                component="h2"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  height: '3em',
                  lineHeight: '1.5em',
                  fontSize: '1rem',
                }}
              >
                {product.title}
              </Typography>

              <Typography
                variant="h6"
                color="primary"
                sx={{ fontWeight: 'bold', mt: 1 }}
              >
                ${product.price.toFixed(2)}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Rating
                  value={product.rating?.rate || 0}
                  precision={0.1}
                  readOnly
                  size="small"
                />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  ({product.rating?.count || 0})
                </Typography>
              </Box>

              <Box sx={{ mt: 'auto', pt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
