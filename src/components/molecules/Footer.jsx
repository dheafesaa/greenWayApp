import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Colors from '../atoms/Colors';

function Footer() {
  return (
    <Box component="footer" sx={{ py: { xs: 4, md: 6 }, backgroundColor: Colors.primary.hard, color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography variant="h6" color="inherit">
              GreenWay
            </Typography>
            <Typography variant="body1" color="inherit">
              GreenWay is an application that supports sustainable tourism with the vision of
              tourism while preserving the ecosystem environment.
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" color="inherit">Navigation</Typography>
                <Stack spacing={1}>
                  <Typography component={Link} to="/" variant="body1" color="inherit" sx={{ textDecoration: 'none' }}>Destination</Typography>
                  <Typography component={Link} to="/" variant="body1" color="inherit" sx={{ textDecoration: 'none' }}>Campaign</Typography>
                  <Typography component={Link} to="/" variant="body1" color="inherit" sx={{ textDecoration: 'none' }}>Community</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" color="inherit">Contact Us</Typography>
                <Typography variant="body1" color="inherit">
                  Contact us with our account if there are problems using the GreenWay website.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" color="inherit">The Creator</Typography>
                <Stack spacing={1}>
                  <Typography variant="body1" color="inherit">Dhea Fesa Athallah</Typography>
                  <Typography variant="body1" color="inherit">Ria Hayati</Typography>
                  <Typography variant="body1" color="inherit">Ajeng Alya Kartika Sari</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body1" color="inherit">
            {'© '}
            {new Date().getFullYear()}
            {' GreenWay. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
