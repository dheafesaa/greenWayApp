import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import ResponsiveFontSizes from '../atoms/Typography';
import Colors from '../atoms/Colors';

function Content({ title, description }) {
  return (
    <Box>
      <ResponsiveFontSizes variant="h1" color={Colors.primary.soft} fontWeight="600">
        {title}
      </ResponsiveFontSizes>
      <ResponsiveFontSizes variant="body1" sx={{ width: '90%' }}>
        {description}
      </ResponsiveFontSizes>
    </Box>
  );
}

Content.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Content.defaultProps = {
  title: '',
  description: '',
};

export default Content;
