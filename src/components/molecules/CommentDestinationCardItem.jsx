import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Colors from '../atoms/Colors';
import { postedAt } from '../../utils';

function CommentDestinationCardItem({
  photo,
  name,
  createdAt,
  comment,
}) {
  return (
    <Card
      sx={{
        border: `1px solid ${Colors.secondary.hard}`,
        borderRadius: '16px',
        padding: 2,
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Avatar
            src={photo}
            sx={{ width: '4rem', height: '4rem', marginRight: 2 }}
          />
          <Box>
            <Typography
              variant="h6"
              color="black"
              fontWeight="bold"
              sx={{ mb: 0 }}
            >
              {name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Posted At
              {' '}
              {postedAt(createdAt)}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" paragraph sx={{ mb: 0 }}>
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
}

const commentDestinationItemShape = {
  id: PropTypes.string.isRequired,
  discussionId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string,
};

CommentDestinationCardItem.propTypes = {
  ...commentDestinationItemShape,
};

export { commentDestinationItemShape };

export default CommentDestinationCardItem;
