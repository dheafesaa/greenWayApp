import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { Box } from '@mui/material';
import ResponsiveFontSizes from './Typography';
import Colors from './Colors';

function DestinationCardItem({
  photo, name, location,
}) {
  return (
    <Card sx={{ borderRadius: '16px', minHeight: '250px', position: 'relative' }}>
      <CardMedia
        component="img"
        height="250"
        image={photo}
        alt={name}
        sx={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{
        position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%',
      }}
      >
        <ResponsiveFontSizes variant="body1" color={Colors.white} fontWeight="600">
          {name}
        </ResponsiveFontSizes>
        <Typography
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
