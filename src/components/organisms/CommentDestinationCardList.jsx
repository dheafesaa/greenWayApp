import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CommentDestinationCardItem, { commentDestinationItemShape } from '../molecules/CommentDestinationCardItem';

function CommentDestinationCardList({ comments }) {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid container spacing={4}>
        {comments.map((comment) => (
          <Grid item xs={12} key={comment.id}>
            <CommentDestinationCardItem
              {...comment}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

CommentDestinationCardList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentDestinationItemShape)).isRequired,
};

export default CommentDestinationCardList;
