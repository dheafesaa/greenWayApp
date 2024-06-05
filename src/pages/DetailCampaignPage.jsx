import { Box, Container } from '@mui/material';
import React from 'react';
import DetailCampaign from '../components/organisms/DetailCampaign';

function DetailCampaignPage() {
  return (
    <Box sx={{ pt: 2, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <DetailCampaign src="/src/assets/Rectangle 85.png" alt="example" />
      </Container>
    </Box>
  );
}

export default DetailCampaignPage;
