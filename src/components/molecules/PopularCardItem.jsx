import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

function PopularCardItem({ category }) {
  return (
    <Button variant="outlined" size="small" sx={{ fontWeight: 'regular' }}>
      #
      {category}
    </Button>
  );
}

PopularCardItem.propTypes = {
  category: PropTypes.string.isRequired,
};

export default PopularCardItem;
