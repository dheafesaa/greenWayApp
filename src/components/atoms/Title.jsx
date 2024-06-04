import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function Title({ title }) {
  return (
    <Typography
      variant="h2"
      sx={{ textAlign: 'center' }}
    >
      {title}
    </Typography>
  );
}

Title.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Title;
