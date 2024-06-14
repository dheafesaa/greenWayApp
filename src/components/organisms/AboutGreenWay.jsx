import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import LayoutContent from '../molecules/LayoutContent';
import CardImage from '../atoms/CardImage';

function AboutGreenWay({ imageUrl, description }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      textAlign={{ xs: 'center', md: 'left' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      py={6}
      gap={6}
    >
      <Box flex={{ xs: '1 1 100%', md: '1 1 50%' }}>
        <CardImage src={imageUrl} alt={imageUrl} />
      </Box>
      <Box flex={{ xs: '1 1 100%', md: '1 1 50%' }}>
        <LayoutContent description={description} />
      </Box>
    </Box>
  );
}

AboutGreenWay.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutGreenWay;
