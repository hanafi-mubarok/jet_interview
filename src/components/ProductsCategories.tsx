import NextLink from 'next/link';
import { Grid, Link as MuiLink, Box, Typography } from '@mui/material';
import Image from 'next/image';

const categories = [
  {
    name: 'Elektronik',
    slug: 'electronics',
    image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
  },
  {
    name: 'Jewelery',
    slug: 'jewelery',
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    name: 'Mens Clothing',
    slug: "men's-clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    name: 'Womens Clothing',
    slug: "women's-clothing",
    image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
  },
];

const ProductsCategories = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 4 }}>
      {categories.map((category) => (
        <Grid item xs={6} sm={3} key={category.slug}>
          <MuiLink
            component={NextLink}
            href={`/categories/${category.slug}/products`}
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                borderRadius: 1,
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  position: 'relative',
                  marginBottom: 1,
                }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'var(--font-roboto)',
                  textAlign: 'center',
                  mt: 1,
                  fontSize: '0.875rem',
                }}
              >
                {category.name}
              </Typography>
            </Box>
          </MuiLink>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsCategories;
