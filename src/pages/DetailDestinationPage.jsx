import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DetailDestination from '../components/organisms/DetailDestination';

function DetailDestinationPage() {
  return (
    <Box sx={{ pt: 2, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <DetailDestination src="/src/assets/Rectangle 85.png" alt="example" />
      </Container>
    </Box>
  );
}

export default DetailDestinationPage;
