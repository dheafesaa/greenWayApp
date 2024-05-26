import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function CardVideo({ src, alt }) {
  return (
    <Box
      component="video"
      autoPlay
      loop
      controls
      src={src}
      alt={alt}
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '16px',
      }}
    />
  );
}

CardVideo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CardVideo;
