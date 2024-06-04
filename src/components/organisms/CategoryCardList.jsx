import React from 'react';
import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import CategoryCardItem from '../molecules/CategoryCardItem';
import Colors from '../atoms/Colors';

function CategoryCardList({ categoryCards }) {
  return (
    <Box sx={{ flexGrow: 1, p: 6, background: Colors.secondary.hard }}>
      <Grid container spacing={4}>
        {categoryCards.map((categoryCard) => (
          <Grid item xs={12} sm={6} md={3} key={categoryCard.id}>
            <CategoryCardItem {...categoryCard} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

CategoryCardList.propTypes = {
  categoryCards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CategoryCardList;
