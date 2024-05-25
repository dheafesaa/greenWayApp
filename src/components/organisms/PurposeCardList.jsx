import React from 'react';
import PropTypes from 'prop-types';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import PurposeCardItem, { purposeCardItemShape } from '../atoms/PurposeCardItem';

function PurposeCardList({ purposeCards }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      py={6}
      px={isTablet ? 4 : 10}
      gap={isMobile ? 4 : 0}
    >
      {purposeCards.map((purposeCard) => (
        <Box
          key={purposeCard.id}
          flexBasis={isMobile ? '100%' : 'calc(33.33% - 16px)'}
        >
          <PurposeCardItem {...purposeCard} />
        </Box>
      ))}
    </Box>
  );
}

PurposeCardList.propTypes = {
  purposeCards: PropTypes.arrayOf(
    PropTypes.shape(purposeCardItemShape),
  ).isRequired,
};

export default PurposeCardList;
