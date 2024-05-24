import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { Box } from '@mui/joy';
import ResponsiveFontSizes from './Typography';
import Colors from './Colors';

function CardTestimoniItem({
  avatarSrc, name, bio, job,
}) {
  return (
    <Card
      sx={{
        width: 400,
        border: `2px solid ${Colors.secondary.hard}`,
      }}
    >
      <CardContent>
        <Avatar src={avatarSrc} sx={{ '--Avatar-size': '4rem' }} />
        <ResponsiveFontSizes variant="body1" sx={{ py: 2 }}>{bio}</ResponsiveFontSizes>
        <Box>
          <ResponsiveFontSizes variant="body1" fontWeight="600">{name}</ResponsiveFontSizes>
          <ResponsiveFontSizes variant="body1">{job}</ResponsiveFontSizes>
        </Box>
      </CardContent>
    </Card>
  );
}

CardTestimoniItem.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};

export default CardTestimoniItem;
