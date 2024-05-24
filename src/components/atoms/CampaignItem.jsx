import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

function CampaignItem({
  picture, name, location,
}) {
  return (
    <Card sx={{ minHeight: '200px', width: 320, borderRadius: '16px' }}>
      <CardCover>
        <img
          src={picture}
          srcSet={picture}
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
        <Typography level="title-lg" textColor="#fff">
          {name}
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
}

const campaignItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

CampaignItem.propTypes = {
  ...campaignItemShape,
};

export { campaignItemShape };

export default CampaignItem;
