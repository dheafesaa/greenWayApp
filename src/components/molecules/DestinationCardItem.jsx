import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { Box, Typography } from '@mui/material';
import Colors from '../atoms/Colors';

function DestinationCardItem({ photo, name, location }) {
  return (
    <Card sx={{ borderRadius: '16px', minHeight: '210px', position: 'relative' }}>
      <CardMedia
        component="img"
        height="210"
        image={photo}
        alt={name}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100%',
      }}
      >
        <Typography
          variant="body1"
          color={Colors.white}
          fontWeight="600"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color={Colors.white}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <LocationOnRoundedIcon sx={{ marginRight: '4px' }} />
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
}

const destinationCardItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

DestinationCardItem.propTypes = {
  ...destinationCardItemShape,
};

export { destinationCardItemShape };

export default DestinationCardItem;