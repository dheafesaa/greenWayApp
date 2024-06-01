import React from 'react';
import PropTypes from 'prop-types';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import CampaignCardItem, { campaignCardItemShape } from '../atoms/CampaignCardItem';

function CampaignCardList({ campaignCards }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  let gridTemplateColumns;
  if (isMobile) {
    gridTemplateColumns = '1fr';
  } else if (isMobileOrTablet) {
    gridTemplateColumns = '1fr 1fr';
  } else {
    gridTemplateColumns = 'repeat(4, 1fr)';
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns={gridTemplateColumns}
      gap={isMobileOrTablet ? 4 : 3}
    >
      {campaignCards.map((campaignCard) => (
        <CampaignCardItem
          key={campaignCard.id}
          {...campaignCard}
        />
      ))}
    </Box>
  );
}

CampaignCardList.propTypes = {
  campaignCards: PropTypes.arrayOf(
    PropTypes.shape(campaignCardItemShape),
  ).isRequired,
};

export default CampaignCardList;
