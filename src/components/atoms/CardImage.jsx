import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

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
