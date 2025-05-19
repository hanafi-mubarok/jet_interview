import { Suspense } from 'react';
import { Metadata } from 'next';
import { Box, Typography } from '@mui/material';
import ProductsCategories from '@/components/ProductsCategories';
import LoadingSpinner from '@/components/LoadingSpinner';
import AllProducts from '@/components/AllProducts';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hanafi E-Commerce',
};

export default async function HomePage() {
  return (
    <>
      <Box component="section">
        <Typography variant="h2" gutterBottom>
          Daftar Produk
        </Typography>

        <Suspense fallback={<LoadingSpinner />}>
          <ProductsCategories />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <AllProducts />
        </Suspense>
      </Box>
      <Footer />
    </>
  );
}
