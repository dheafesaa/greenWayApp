import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia } from '@mui/material';

function CardImage({ src, alt, borderRadius }) {
  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        width: '100%',
        height: '100%',
        borderRadius: borderRadius ? '16px' : 0,
      }}
    >
      <CardMedia
        component="img"
        src={src}
        alt={alt}
      />
    </Card>
  );
}

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  borderRadius: PropTypes.bool,
};

CardImage.defaultProps = {
  borderRadius: false,
};

export default CardImage;
