import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, useMediaQuery } from '@mui/material';
import ResponsiveFontSizes from './Typography';
import Colors from './Colors';

function Title({ title }) {
  const muiTheme = useTheme();
  const isMobileOrTablet = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <ResponsiveFontSizes
      variant={isMobileOrTablet ? 'h4' : 'h3'}
      fontWeight="600"
      color={Colors.primary.soft}
      sx={{ marginBottom: 4, textAlign: 'center' }}
    >
      {title}
    </ResponsiveFontSizes>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
