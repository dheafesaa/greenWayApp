import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CardImage from '../atoms/CardImage';
import HeaderDetail from '../atoms/HeaderDetail';
import DetailCardItem from '../molecules/DetailCardItem';

function DetailDestination({
  idCampaign, photo, name, location, description,
}) {
  return (
    <Box sx={{ flexGrow: 1, pb: 4 }}>
      <CardImage src={photo} alt={name} borderRadius maxHeight={{ xs: '100%', md: '600px' }} />
      <HeaderDetail location={location} title={name} />
      {idCampaign && (
        <DetailCardItem
          title="Campaign"
          content="Unlock Your Story"
          link={`/campaigns/${idCampaign}`}
          isButton
        />
      )}
      <DetailCardItem title="Description" content={description} />
    </Box>
  );
}

DetailDestination.propTypes = {
  idCampaign: PropTypes.string,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

DetailDestination.defaultProps = {
  idCampaign: null,
};

export default DetailDestination;
