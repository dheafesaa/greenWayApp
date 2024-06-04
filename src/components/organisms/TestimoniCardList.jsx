import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import TestimoniCardItem, { testimoniCardItemShape } from '../molecules/TestimoniCardItem';

function TestimoniCardList({ testimoniCards }) {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid container spacing={4}>
        {testimoniCards.map((testimoniCard) => (
          <Grid item xs={12} sm={6} md={4} key={testimoniCard.id}>
            <TestimoniCardItem {...testimoniCard} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

TestimoniCardList.propTypes = {
  testimoniCards: PropTypes.arrayOf(
    PropTypes.shape(testimoniCardItemShape),
  ).isRequired,
};

export default TestimoniCardList;
