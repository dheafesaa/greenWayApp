import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function CardImage({
  src, alt, borderRadius, maxHeight,
}) {
  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        width: '100%',
        height: '100%',
        borderRadius: borderRadius ? '16px' : 0,
        maxHeight,
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
  maxHeight: PropTypes.string,
};

CardImage.defaultProps = {
  borderRadius: false,
  maxHeight: '100%',
};

export default CardImage;
