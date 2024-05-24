import React from 'react';
import PropTypes from 'prop-types';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import ResponsiveFontSizes from '../atoms/Typography';
import Colors from '../atoms/Colors';

function HeroContent({ title, description }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  let width;
  let headingVariant;

  if (isMobile) {
    width = '100%';
    headingVariant = 'h2';
  } else if (isDesktop) {
    width = '90%';
    headingVariant = 'h1';
  } else {
    width = '90%';
    headingVariant = 'h3';
  }

  return (
    <Box>
      <ResponsiveFontSizes variant={headingVariant} color={Colors.primary.soft} fontWeight="600">
        {title}
      </ResponsiveFontSizes>
      <ResponsiveFontSizes
        variant="body1"
        sx={{
          width,
          textAlign: 'justify',
        }}
      >
        {description}
      </ResponsiveFontSizes>
    </Box>
  );
}

HeroContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

HeroContent.defaultProps = {
  title: '',
  description: '',
};

export default HeroContent;
