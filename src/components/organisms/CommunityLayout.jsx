import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import CardImage from '../atoms/CardImage';
import ResponsiveFontSizes from '../atoms/Typography';
import Colors from '../atoms/Colors';
import Button from '../atoms/Button';

function CommunityLayout({ title, description, imageUrl }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={10}
      py={6}
    >
      <Box textAlign="justify" paddingRight={22}>
        <ResponsiveFontSizes variant="h3" color={Colors.primary.soft} fontWeight="600">
          {title}
        </ResponsiveFontSizes>
        <ResponsiveFontSizes variant="body1">
          {description}
        </ResponsiveFontSizes>
        <Button size="large" py={1} my={2} fullWidth={false} fontWeight={600}>
          Join Now
        </Button>
      </Box>
      <CardImage src={imageUrl} />
    </Box>
  );
}

CommunityLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CommunityLayout;
