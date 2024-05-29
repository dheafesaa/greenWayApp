import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function BannerImage({ src, alt }) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: '100%',
        height: 'auto',
      }}
    />
  );
}

BannerImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default BannerImage;
