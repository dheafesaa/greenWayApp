import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PopularCardItem from '../molecules/PopularCardItem';

function PopularCardList({ categories }) {
  return (
    <Box sx={{ flexGrow: 1, pt: 2 }}>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item xs="auto" key={category}>
            <PopularCardItem category={category} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

PopularCardList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PopularCardList;
