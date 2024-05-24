import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Content from './Content';
import CardImage from '../atoms/CardImage';
import Button from '../atoms/Button';

function SplitLayout({ title, description, imageUrl }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={10}
    >
      <Box>
        <Content title={title} description={description} />
        <Button size="large" py={1} my={2} fullWidth={false} fontWeight={600}>
          Go Travel
        </Button>
      </Box>
      <CardImage src={imageUrl} />
    </Box>
  );
}

SplitLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default SplitLayout;
