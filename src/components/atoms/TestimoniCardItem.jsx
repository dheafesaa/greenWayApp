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
  avatarSrc, name, bio, job,
}) {
  const muiTheme = useTheme();
  const isMobileOrTablet = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <Box flexBasis={isMobileOrTablet ? '100%' : 'calc(33.33% - 16px)'}>
      <Card sx={{ border: `2px solid ${Colors.secondary.hard}` }}>
        <CardContent>
          <Avatar src={avatarSrc} sx={{ '--Avatar-size': '4rem' }} />
          <ResponsiveFontSizes variant="body1" sx={{ py: 2 }}>{bio}</ResponsiveFontSizes>
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
  avatarSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};

TestimoniCardItem.propTypes = {
  ...testimoniCardItemShape,
};

export { testimoniCardItemShape };

export default TestimoniCardItem;
