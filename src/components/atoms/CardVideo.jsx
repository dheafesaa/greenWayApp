import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';

function CardVideo({ src, alt }) {
  return (
    <Card
      component="video"
      autoPlay
      loop
      controls
      src={src}
      alt={alt}
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
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
