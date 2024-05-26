import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/joy/Box';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import CampaignCardItem, { campaignCardItemShape } from '../atoms/CampaignCardItem';
import Title from '../atoms/Title';
import SeeAllButton from '../atoms/SeeAllButton';

const theme = extendTheme();

function CampaignCardList({ campaignCards }) {
  const muiTheme = useTheme();
  const isMobileOrTablet = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <CssVarsProvider theme={theme}>
      <Box py={6} px={isMobileOrTablet ? 4 : 10}>
        <Title title="Campaign" />
        <SeeAllButton to="/campaigns" />
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap={isMobileOrTablet ? 4 : 0}
        >
          {campaignCards.map((campaignCard) => (
            <CampaignCardItem
              key={campaignCard.id}
              {...campaignCard}
            />
          ))}
        </Box>
      </Box>
    </CssVarsProvider>
  );
}

CampaignCardList.propTypes = {
  campaignCards: PropTypes.arrayOf(
    PropTypes.shape(campaignCardItemShape),
  ).isRequired,
};

export default CampaignCardList;
