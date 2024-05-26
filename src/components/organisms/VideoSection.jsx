import React from 'react';
import PropTypes from 'prop-types';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Title from '../atoms/Title';
import CardVideo from '../atoms/CardVideo';

function VideoSection({ src, alt }) {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box py={6} px={isMobileOrTablet ? 4 : 10}>
      <Title title="Nature of Indonesia" />
      <CardVideo src={src} alt={alt} />
    </Box>
  );
}

VideoSection.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default VideoSection;
