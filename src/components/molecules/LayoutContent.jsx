import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function LayoutContent({ title, description }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h2">{title}</Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: { xs: 'center', md: 'justify' },
        }}
      >
        {description}
      </Typography>
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
