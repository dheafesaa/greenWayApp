import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CardImage from '../atoms/CardImage';
import DetailCardItem from '../molecules/DetailCardItem';
import HeaderDetail from '../molecules/HeaderDetail';

function DetailDestination({ src, alt }) {
  return (
    <Box sx={{ flexGrow: 1, pb: 4 }}>
      <CardImage src={src} alt={alt} />
      <HeaderDetail location="Pasar Minggu, Jakarta" title="Kebun Margasatwa Ragunan" />
      <DetailCardItem title="Campaign" content="Unlock Your Story" link="/" isButton />
      <DetailCardItem
        title="Description"
        content="Kampanye Hutan Lestari di Taman Nasional Way Kambas, Lampung, bertujuan
        untuk melestarikan hutan dan keanekaragaman hayati yang ada di dalamnya"
      />
    </Box>
  );
}

DetailDestination.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default DetailDestination;
