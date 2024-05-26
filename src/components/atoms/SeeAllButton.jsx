import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import ResponsiveFontSizes from './Typography';
import Colors from './Colors';

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
      <ResponsiveFontSizes variant="h6" fontWeight="600" color={Colors.primary.soft} sx={{ mb: 0 }}>
        see all
      </ResponsiveFontSizes>
      <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
    </Box>
  );
}

SeeAllButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default SeeAllButton;
