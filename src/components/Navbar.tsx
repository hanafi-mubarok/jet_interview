/* eslint-disable prettier/prettier */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useRouter } from 'next/navigation';
import { useCart } from '../contexts/CartContext';
import TextField from '@mui/material/TextField';
import { useSearch } from '../contexts/SearchContext'; // You'll create this context
import { useSidebar } from '../contexts/SidebarContext'; // You'll create this context
import Image from 'next/image';

const pages = ['Home', 'Categories'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const router = useRouter();

  const { cartCount } = useCart();
  const { search, setSearch } = useSearch();
  const { openSidebar } = useSidebar(); // Get openSidebar from context

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
{pages.map((page) =>
  page === 'Categories' ? (
    <MenuItem
      key={page}
      onClick={() => {
        handleCloseNavMenu();
        openSidebar();
      }}
    >
      <Typography textAlign="center">{page}</Typography>
    </MenuItem>
  ) : (
    <MenuItem
      key={page}
      onClick={() => {
        handleCloseNavMenu();
        router.push('/');
      }}
    >
      <Typography textAlign="center">{page}</Typography>
    </MenuItem>
  )
)}

            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0.5, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) =>
  page === 'Categories' ? (
    <Button
      key={page}
      onClick={() => {
        handleCloseNavMenu();
        openSidebar();
      }}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      {page}
    </Button>
  ) : (
    <Link
      key={page}
      style={{ textDecoration: 'none', color: '#fff' }}
      href="/"
    >
      <Button
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        {page}
      </Button>
    </Link>
  )
)}

          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', mr: 1 }}>
            <Image
              src="/images/logo/shopping.png"
              alt="Logo"
              width={36}
              height={36}
              style={{ marginRight: 8 }}
              priority
              unoptimized
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontWeight: 500,
                color: 'inherit',
                textDecoration: 'none',
              }}
              onClick={() => {
                router.push('/');
              }}
              style={{ cursor: 'pointer' }}
            >
              Hanafi Mubarok
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 5, mx: 2 }}>
            <TextField
              size="small"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                background: 'white',
                borderRadius: 1,
                minWidth: { xs: 120, sm: 200, md: 350 },
                width: { xs: 140, sm: 220, md: 400 },
              }}
              InputProps={{
                style: { padding: 0, height: 36 },
              }}
            />
          </Box>
          <Box
            sx={{ flexGrow: 0 }}
            onClick={() => {
              router.push('/cart');
            }}
          >
            <Tooltip title="Shopping Cart">
              <IconButton sx={{ p: 0 }}>
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingBagOutlinedIcon style={{ color: 'white' }} />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
