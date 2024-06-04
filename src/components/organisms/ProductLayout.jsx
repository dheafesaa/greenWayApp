import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import CardImage from '../atoms/CardImage';
import LayoutContent from '../molecules/LayoutContent';

function ProductLayout({ title, description, imageUrl }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      textAlign={{ xs: 'center', md: 'left' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      gap={6}
    >
      <Box flex={{ xs: '1 1 100%', md: '1 1 50%' }}>
        <CardImage src={imageUrl} alt={imageUrl} />
      </Box>
      <Box flex={{ xs: '1 1 100%', md: '1 1 50%' }}>
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
