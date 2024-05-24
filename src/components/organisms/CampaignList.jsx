import * as React from 'react';
import Box from '@mui/joy/Box';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import PropTypes from 'prop-types';
import CampaignItem, { campaignItemShape } from '../atoms/CampaignItem';
import Title from '../atoms/Title';

const theme = extendTheme();

function CampaignList({ campaigns }) {
  return (
    <CssVarsProvider theme={theme}>
      <Box p={10}>
        <Title title="Campaign" />
        <Box
          component="ul"
          sx={{
            display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'space-between',
          }}
        >
          {campaigns.map((campaign) => (
            <li key={campaign.id} style={{ listStyle: 'none' }}>
              <CampaignItem
                {...campaign}
              />
            </li>
          ))}
        </Box>
      </Box>
    </CssVarsProvider>
  );
}

CampaignList.propTypes = {
  campaigns: PropTypes.arrayOf(PropTypes.shape(campaignItemShape)).isRequired,
};

export default CampaignList;
