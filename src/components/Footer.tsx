'use client';

import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'blue200',
        //color: 'common.white',
        py: 2,
        mt: 8,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body2">
          © 2025 Hanafi Mubarok. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
