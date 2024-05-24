import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import CardImage from '../atoms/CardImage';
import ResponsiveFontSizes from '../atoms/Typography';
import Colors from '../atoms/Colors';

function SubContent({ title, description, imageUrl }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={10}
      py={6}
    >
      <CardImage src={imageUrl} />
      <Box textAlign="justify" paddingLeft={22}>
        <ResponsiveFontSizes variant="h3" color={Colors.primary.soft} fontWeight="600">
          {title}
        </ResponsiveFontSizes>
        <ResponsiveFontSizes variant="body1">
          {description}
        </ResponsiveFontSizes>
      </Box>
    </Box>
  );
}

SubContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default SubContent;
