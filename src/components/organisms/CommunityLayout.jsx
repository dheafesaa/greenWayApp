import React from 'react';
import PropTypes from 'prop-types';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import CardImage from '../atoms/CardImage';
import Button from '../atoms/Button';
import LayoutContent from '../molecules/LayoutContent';

function CommunityLayout({ title, description, imageUrl }) {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  const flexDirection = isMobileOrTablet ? 'column' : 'row';
  const paddingX = isMobileOrTablet ? 4 : 10;
  const textAlign = isMobileOrTablet ? 'center' : 'left';
  const marginBottom = isMobileOrTablet ? 2 : 0;
  const marginTopBottom = isMobileOrTablet ? 2 : 4;

  return (
    <Box
      display="flex"
      flexDirection={flexDirection}
      justifyContent="space-between"
      alignItems="center"
      px={paddingX}
      py={6}
      textAlign={textAlign}
    >
      <Box mb={marginBottom}>
        <LayoutContent title={title} description={description} />
        <Button size="large" py={1} my={marginTopBottom} fullWidth={false} fontWeight={600}>
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
