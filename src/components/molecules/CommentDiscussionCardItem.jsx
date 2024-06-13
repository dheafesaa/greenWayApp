import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  BiLike,
  BiSolidLike,
  BiDislike,
  BiSolidDislike,
} from 'react-icons/bi';
import Colors from '../atoms/Colors';
import ActionButton from '../atoms/ActionButton';
import { postedAt } from '../../utils';

function CommentDiscussionCardItem({
  id,
  photo,
  name,
  createdAt,
  comment,
  upVotesBy,
  downVotesBy,
  like,
  unlike,
  authUser,
  neutralize,
}) {
  const isCommentLiked = upVotesBy.includes(authUser);
  const isCommentUnliked = downVotesBy.includes(authUser);

  const handleLike = () => {
    if (!isCommentLiked) {
      like(id);
    } else {
      neutralize(id);
    }
  };

  const handleUnlike = () => {
    if (!isCommentUnliked) {
      unlike(id);
    } else {
      neutralize(id);
    }
  };

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
        <Typography variant="body1" paragraph>
          {comment}
        </Typography>
        <Box display="flex" alignItems="center" gap={2} marginTop={2}>
          <ActionButton
            Icon={isCommentLiked ? BiSolidLike : BiLike}
            label={upVotesBy?.length}
            color={Colors.primary.soft}
            onClick={handleLike}
          />
          <ActionButton
            Icon={isCommentUnliked ? BiSolidDislike : BiDislike}
            label={downVotesBy?.length}
            color={Colors.primary.soft}
            onClick={handleUnlike}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

const commentDiscussionItemShape = {
  id: PropTypes.string.isRequired,
  discussionId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string,
};

CommentDiscussionCardItem.propTypes = {
  ...commentDiscussionItemShape,
  like: PropTypes.func.isRequired,
  unlike: PropTypes.func.isRequired,
  neutralize: PropTypes.func.isRequired,
};

export { commentDiscussionItemShape };

export default CommentDiscussionCardItem;
