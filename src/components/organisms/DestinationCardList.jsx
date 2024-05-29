import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/joy/Box';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Title from '../atoms/Title';
import SeeAllButton from '../atoms/SeeAllButton';
import DestinationCardItem, { destinationCardItemShape } from '../atoms/DestinationCardItem';

const theme = extendTheme();

function DestinationCardList({ destinationCards }) {
  const muiTheme = useTheme();
  const isMobileOrTablet = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <CssVarsProvider theme={theme}>
      <Box py={6} px={isMobileOrTablet ? 4 : 10}>
        <Title title="Wonderful Destination" />
        <SeeAllButton to="/destination" />
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap={isMobileOrTablet ? 4 : 0}
        >
          {destinationCards.map((destinationCard) => (
            <DestinationCardItem
              key={destinationCard.id}
              {...destinationCard}
            />
          ))}
        </Box>
      </Box>
    </CssVarsProvider>
  );
}

DestinationCardList.propTypes = {
  destinationCards: PropTypes.arrayOf(
    PropTypes.shape(destinationCardItemShape),
  ).isRequired,
};

export default DestinationCardList;
