import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, useMediaQuery } from '@mui/material';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { Box } from '@mui/joy';
import ResponsiveFontSizes from './Typography';
import Colors from './Colors';

function TestimoniCardItem({
  photo, name, review, job,
}) {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('lg'));

  let flexBasis;
  if (isMobile) {
    flexBasis = '100%';
  } else if (isTablet) {
    flexBasis = 'calc(50% - 16px)';
  } else {
    flexBasis = 'calc(33.33% - 16px)';
  }

  return (
    <Box flexBasis={flexBasis} mb={isMobile ? 0 : 4}>
      <Card sx={{ border: `2px solid ${Colors.secondary.hard}`, borderRadius: '16px' }}>
        <CardContent>
          <Avatar src={photo} sx={{ '--Avatar-size': '4rem' }} />
          <ResponsiveFontSizes variant="body1" sx={{ py: 2 }}>{review}</ResponsiveFontSizes>
          <Box>
            <ResponsiveFontSizes variant="body1" fontWeight="600">{name}</ResponsiveFontSizes>
            <ResponsiveFontSizes variant="body1">{job}</ResponsiveFontSizes>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

const testimoniCardItemShape = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};

TestimoniCardItem.propTypes = {
  ...testimoniCardItemShape,
};

export { testimoniCardItemShape };

export default TestimoniCardItem;
