'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { CartProvider } from '@/contexts/CartContext';
import ResponsiveAppBar from '@/components/Navbar';
import { Box, Container } from '@mui/material';
import { SearchProvider } from '../contexts/SearchContext';
import { SidebarProvider } from '../contexts/SidebarContext';
import Sidebar from './Sidebar';

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouterCacheProvider>
        <CartProvider>
          <SearchProvider>
            <SidebarProvider> {/* Tambahkan ini */}
              <ResponsiveAppBar />
              <Box sx={{ display: 'flex', marginTop: 10 }}>
                <Sidebar />
                <Container sx={{ flex: 1 }}>{children}</Container>
              </Box>
            </SidebarProvider>
          </SearchProvider>
        </CartProvider>
      </AppRouterCacheProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
