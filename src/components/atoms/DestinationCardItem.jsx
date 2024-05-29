import React from 'react';
import PropTypes from 'prop-types';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import ResponsiveFontSizes from './Typography';
import Colors from './Colors';

function DestinationCardItem({
  photo, name, location,
}) {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('lg'));

  let flexBasis;
  if (isMobile) {
    flexBasis = '100%';
  } else if (isTablet) {
    flexBasis = 'calc(50% - 16px)';
  } else {
    flexBasis = 'calc(25% - 16px)';
  }

  return (
    <Box flexBasis={flexBasis} mb={isMobile ? 0 : 4}>
      <Card sx={{ borderRadius: '16px', minHeight: '250px' }}>
        <CardCover>
          <img
            src={photo}
            srcSet={photo}
            loading="lazy"
            alt={name}
          />
        </CardCover>
        <CardCover
          sx={{
            background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
          }}
        />
        <CardContent sx={{ justifyContent: 'flex-end' }}>
          <ResponsiveFontSizes variant="body1" color={Colors.white} fontWeight="600">
            {name}
          </ResponsiveFontSizes>
          <Typography
            textColor={Colors.white}
            startDecorator={<LocationOnRoundedIcon />}
          >
            {location}
          </Typography>
        </CardContent>
      </Card>
    </Box>
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
