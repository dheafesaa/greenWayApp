import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia } from '@mui/material';

function CardImage({ src, alt }) {
  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        width: '100%',
        height: '100%',
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
};

export default CardImage;
