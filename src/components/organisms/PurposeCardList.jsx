import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PurposeCardItem, { purposeCardItemShape } from '../molecules/PurposeCardItem';

function PurposeCardList({ purposeCards }) {
  return (
    <Box sx={{ flexGrow: 1, py: { xs: 0, md: 4 } }}>
      <Grid container spacing={{ xs: 4, md: 6 }}>
        {purposeCards.map((purposeCard) => (
          <Grid item xs={12} sm={6} md={4} key={purposeCard.id}>
            <PurposeCardItem {...purposeCard} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

PurposeCardList.propTypes = {
  purposeCards: PropTypes.arrayOf(
    PropTypes.shape(purposeCardItemShape),
  ).isRequired,
};

export default PurposeCardList;
