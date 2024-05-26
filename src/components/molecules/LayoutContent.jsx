import React from 'react';
import PropTypes from 'prop-types';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import ResponsiveFontSizes from '../atoms/Typography';
import Colors from '../atoms/Colors';

function LayoutContent({ title, description }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const width = isMobile ? '100%' : '90%';
  const headingVariant = isMobile ? 'h4' : 'h3';

  return (
    <Box width={width}>
      <ResponsiveFontSizes variant={headingVariant} color={Colors.primary.soft} fontWeight="600">
        {title}
      </ResponsiveFontSizes>
      <ResponsiveFontSizes
        variant="body1"
        sx={{
          textAlign: 'justify',
        }}
      >
        {description}
      </ResponsiveFontSizes>
    </Box>
  );
}

LayoutContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

LayoutContent.defaultProps = {
  title: '',
  description: '',
};

export default LayoutContent;
