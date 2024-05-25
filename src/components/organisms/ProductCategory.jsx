import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import CardWithText from '../atoms/CardWithText';
import Colors from '../atoms/Colors';

function ProductCategory({ productCards }) {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  const getCardWidth = () => {
    if (isMobileOrTablet) return 'calc(50% - 16px)';
    return 'calc(25% - 16px)';
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      py={6}
      px={isMobileOrTablet ? 4 : 10}
      gap={isMobileOrTablet ? 4 : 0}
      sx={{ backgroundColor: Colors.secondary.hard }}
      mb={6}
    >
      {productCards.map((productCard) => (
        <Box key={productCard.title} flexBasis={getCardWidth()}>
          <CardWithText title={productCard.title} description={productCard.description} />
        </Box>
      ))}
    </Box>
  );
}

ProductCategory.propTypes = {
  productCards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductCategory;
