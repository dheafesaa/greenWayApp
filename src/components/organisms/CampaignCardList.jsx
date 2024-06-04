import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import CampaignCardItem, { campaignCardItemShape } from '../molecules/CampaignCardItem';

function CampaignCardList({ campaignCards }) {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid container spacing={4}>
        {campaignCards.map((campaignCard) => (
          <Grid item xs={12} sm={6} md={3} key={campaignCard.id}>
            <CampaignCardItem {...campaignCard} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

CampaignCardList.propTypes = {
  campaignCards: PropTypes.arrayOf(
    PropTypes.shape(campaignCardItemShape),
  ).isRequired,
};

export default CampaignCardList;
