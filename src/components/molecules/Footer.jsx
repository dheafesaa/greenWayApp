import React from 'react';
import {
  Box, Container, Grid, Typography, Link,
} from '@mui/material';
import Colors from '../atoms/Colors';

function Footer() {
  return (
    <Box component="footer" sx={{ py: { xs: 4, md: 6 }, backgroundColor: Colors.primary.hard, color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography variant="h6" gutterBottom>
              GreenWay
            </Typography>
            <Typography variant="body1" gutterBottom>
              GreenWay is an application that supports sustainable tourism with the vision of
              tourism while preserving the ecosystem environment.
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  Features
                </Typography>
                <Box>
                  <Link href="/" color="inherit" underline="none">
                    Home
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit" underline="none">
                    Article
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit" underline="none">
                    Destination
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit" underline="none">
                    Community
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  Contact Us
                </Typography>
                <Box>
                  <Typography variant="body1" gutterBottom>
                    Contact us with our account if there are problems
                    using the GreenWay website.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  The Creator
                </Typography>
                <Box>
                  <Typography variant="body1" gutterBottom>
                    Dhea Fesa Athallah
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" gutterBottom>
                    Ria Hayati
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" gutterBottom>
                    Ajeng Alya Kartika Sari
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="inherit">
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
