import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function ImgBackground({ imgSrc }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${imgSrc})`,
        height: '100vh',
        width: '100%',
      }}
    />
  );
}

ImgBackground.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default ImgBackground;
