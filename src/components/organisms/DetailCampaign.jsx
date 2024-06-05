import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CardImage from '../atoms/CardImage';
import DetailCardItem from '../molecules/DetailCardItem';
import HeaderDetail from '../molecules/HeaderDetail';

function DetailCampaign({ src, alt }) {
  return (
    <Box sx={{ flexGrow: 1, pb: 4 }}>
      <CardImage src={src} alt={alt} />
      <HeaderDetail location="Pasar Minggu, Jakarta" title="Hari Bebas Asap" />
      <DetailCardItem title="ID Campaign" content="dymtDbBFp9zSrWJbCmHF" />
      <DetailCardItem title="Time Periode" content="dymtDbBFp9zSrWJbCmHF" />
      <DetailCardItem title="Link Enrollment" content="Click Me!" isLink />
      <DetailCardItem
        title="Description"
        content="Sebagai wisatawan yang bertanggungjawab untuk mengurangi produksi emisi karbon kendaraanbermotor,
        Kebun Binatang Ragunan mengadakan Champaign untuk para pengunjung dengan mengajak untuk menggunakan sepeda
        yang disediakan oleh pihak Kebun Binatang ketika berada di Kebun Binatang selama Champaign berlangsung.
        Ayo ramaikan!"
      />
    </Box>
  );
}

DetailCampaign.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default DetailCampaign;
