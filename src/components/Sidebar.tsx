'use client';

import NextLink from 'next/link';
import {
  Box,
  Typography,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  Drawer,
} from '@mui/material';
import { useSidebar } from '../contexts/SidebarContext';

const categories = [
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Jewelery', slug: 'jewelery' },
  { name: 'Mens Clothing', slug: "men's-clothing" },
  { name: 'Womens Clothing', slug: "women's-clothing" },
];

const SidebarContent = ({ onClick }: { onClick?: () => void }) => (
  <Box
    sx={{
      width: 250,
      height: '100%',
      bgcolor: '#ffffff',
      p: 2,
      minHeight: '50vh',
      color: 'black',
      boxShadow: 3,
      borderRadius: { xs: 5, md: 2 },
    }}
    role="presentation"
    onClick={onClick}
  >
    <Typography
      variant="h6"
      sx={{
        mb: 2,
        fontFamily: 'var(--font-roboto)',
        letterSpacing: 2,
        fontWeight: 800,
        textAlign: 'center',
        color: 'black',
      }}
    >
      Categories
    </Typography>
    <List>
      {categories.map((category) => (
        <ListItem key={category.slug} disablePadding>
          <MuiLink
            component={NextLink}
            href={`/categories/${category.slug}/products`}
            sx={{
              textDecoration: 'none',
              color: 'black',
              width: '100%',
            }}
          >
            <ListItemButton
              sx={{
                borderRadius: 1,
                my: 0.5,
                px: 2,
                py: 1.5,
                transition: 'background 0.2s',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.1)',
                  color: 'black',
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'var(--font-roboto)',
                  fontWeight: 500,
                  fontSize: '1rem',
                }}
              >
                {category.name}
              </Typography>
            </ListItemButton>
          </MuiLink>
        </ListItem>
      ))}
    </List>
  </Box>
);

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <Drawer
      anchor="left"
      open={isSidebarOpen}
      onClose={closeSidebar}
      ModalProps={{ keepMounted: true }}
    >
      <SidebarContent onClick={closeSidebar} />
    </Drawer>
  );
};

export default Sidebar;
