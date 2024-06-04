import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Colors from '../atoms/Colors';

function TestimoniCardItem({
  photo, name, review, occupation,
}) {
  return (
    <Card sx={{ border: `2px solid ${Colors.secondary.hard}`, borderRadius: '16px', height: '100%' }}>
      <CardContent>
        <Avatar src={photo} sx={{ width: '4rem', height: '4rem' }} />
        <Typography variant="body1" sx={{ paddingY: 2 }}>{review}</Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{name}</Typography>
        <Typography variant="body1">{occupation}</Typography>
      </CardContent>
    </Card>
  );
}

const testimoniCardItemShape = {
  id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
};

TestimoniCardItem.propTypes = {
  ...testimoniCardItemShape,
};

export { testimoniCardItemShape };

export default TestimoniCardItem;
