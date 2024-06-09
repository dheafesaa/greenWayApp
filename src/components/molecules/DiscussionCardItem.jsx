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
  BiComment,
} from 'react-icons/bi';
import Colors from '../atoms/Colors';
import ActionButton from '../atoms/ActionButton';

function DiscussionCardItem({
  photo, creator, postDate, title, content, category, showLikes, showDislikes, showComments,
}) {
  return (
    <Card sx={{ border: `1px solid ${Colors.secondary.hard}`, borderRadius: '16px', padding: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Avatar src={photo} sx={{ width: '4rem', height: '4rem', marginRight: 2 }} />
          <Box>
            <Typography variant="h6" color="black" fontWeight="bold" sx={{ mb: 0 }}>{creator}</Typography>
            <Typography variant="body1" color="textSecondary">
              Posted At
              {' '}
              {postDate}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h6" color="black" fontWeight="bold">{title}</Typography>
        <Typography variant="body1" paragraph>{content}</Typography>
        {category && (
          <Typography variant="body1" fontWeight="bold">
            #
            {category}
          </Typography>
        )}
        <Box display="flex" alignItems="center" gap={2} marginTop={2}>
          {showLikes && (
          <ActionButton
            defaultIcon={BiLike}
            activeIcon={BiSolidLike}
            label="Like"
            color={Colors.primary.soft}
          />
          )}
          {showDislikes && (
            <ActionButton
              defaultIcon={BiDislike}
              activeIcon={BiSolidDislike}
              label="Dislike"
              color={Colors.primary.soft}
            />
          )}
          {showComments && (
            <ActionButton
              defaultIcon={BiComment}
              label="Comments"
              color={Colors.primary.soft}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

const discussionItemShape = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
};

DiscussionCardItem.propTypes = {
  ...discussionItemShape,
  showLikes: PropTypes.bool,
  showDislikes: PropTypes.bool,
  showComments: PropTypes.bool,
};

DiscussionCardItem.defaultProps = {
  showLikes: false,
  showDislikes: false,
  showComments: false,
};

export { discussionItemShape };

export default DiscussionCardItem;
