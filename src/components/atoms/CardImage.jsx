import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function CardImage({ src, alt }) {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  const width = isMobileOrTablet ? '100%' : '50%';

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width,
        height: 'auto',
      }}
    />
  );
}

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CardImage;
