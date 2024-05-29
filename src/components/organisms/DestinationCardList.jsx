import React from 'react';
import PropTypes from 'prop-types';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';
import Search from '../atoms/Search';
import DestinationCardItem, { destinationCardItemShape } from '../atoms/DestinationCardItem';

function DestinationCardList({ destinationCards }) {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isMobileOrTablet = useMediaQuery(muiTheme.breakpoints.down('md'));
  const isTabletOrDesktop = useMediaQuery(muiTheme.breakpoints.up('sm'));

  let gridTemplateColumns;
  if (isMobile) {
    gridTemplateColumns = '1fr';
  } else if (isMobileOrTablet) {
    gridTemplateColumns = '1fr 1fr';
  } else {
    gridTemplateColumns = 'repeat(4, 1fr)';
  }

  return (
    <Box py={6} px={isMobileOrTablet ? 4 : 10}>
      <Title title={(
        <>
          Find The Next Places to Explore
          {' '}
          {isTabletOrDesktop && <br />}
          The Beauty of The Indonesia
        </>
        )}
      />
      <Subtitle subtitle="Your journey to find beautiful places starts here!" />
      <Box mb={6}>
        <Search />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={gridTemplateColumns}
        gap={isMobileOrTablet ? 4 : 3}
      >
        {destinationCards.map((destinationCard) => (
          <DestinationCardItem
            key={destinationCard.id}
            {...destinationCard}
          />
        ))}
      </Box>
    </Box>
  );
}

DestinationCardList.propTypes = {
  destinationCards: PropTypes.arrayOf(
    PropTypes.shape(destinationCardItemShape),
  ).isRequired,
};

export default DestinationCardList;
