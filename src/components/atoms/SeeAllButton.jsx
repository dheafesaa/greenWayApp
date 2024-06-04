import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

function SeeAllButton({ to }) {
  return (
    <Box
      component={Link}
      to={to}
      display="flex"
      justifyContent="end"
      alignItems="center"
      mb={2}
      sx={{ cursor: 'pointer', textDecoration: 'none' }}
    >
      <Typography variant="body1" sx={{ mb: 0 }}>
        see all
      </Typography>
      <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
    </Box>
  );
}

SeeAllButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default SeeAllButton;
