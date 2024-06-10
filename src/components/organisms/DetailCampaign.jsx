import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CardImage from '../atoms/CardImage';
import DetailCardItem from '../molecules/DetailCardItem';
import HeaderDetail from '../molecules/HeaderDetail';

function DetailCampaign({
  id, picture, name, location, date, link, description,
}) {
  return (
    <Box sx={{ flexGrow: 1, pb: 4 }}>
      <CardImage src={picture} alt={name} borderRadius />
      <HeaderDetail location={location} title={name} />
      <DetailCardItem title="ID Campaign" content={id} />
      <DetailCardItem title="Time Periode" content={date} />
      <DetailCardItem title="Link Enrollment" content="Click Me!" link={link} isLink />
      <DetailCardItem title="Description" content={description} />
    </Box>
  );
}

DetailCampaign.propTypes = {
  id: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DetailCampaign;
