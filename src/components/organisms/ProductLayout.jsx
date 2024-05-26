import React from 'react';
import PropTypes from 'prop-types';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import CardImage from '../atoms/CardImage';
import LayoutContent from '../molecules/LayoutContent';

function ProductLayout({ title, description, imageUrl }) {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  const flexDirection = isMobileOrTablet ? 'column' : 'row';
  const paddingX = isMobileOrTablet ? 4 : 10;
  const textAlign = isMobileOrTablet ? 'center' : 'left';
  const marginTop = isMobileOrTablet ? 4 : 0;

  return (
    <Box
      display="flex"
      flexDirection={flexDirection}
      justifyContent="space-between"
      alignItems="center"
      px={paddingX}
      py={6}
      textAlign={textAlign}
    >
      <CardImage src={imageUrl} />
      <Box display="flex" justifyContent="end" mt={marginTop}>
        <LayoutContent title={title} description={description} />
      </Box>
    </Box>
  );
}

ProductLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProductLayout;
