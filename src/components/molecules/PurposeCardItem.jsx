import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Colors from '../atoms/Colors';

function PurposeCardItem({ title, description }) {
  return (
    <Card sx={{
      paddingY: 4, background: Colors.secondary.hard, borderRadius: '16px', height: '100%',
    }}
    >
      <CardContent>
        <Typography variant="h4" sx={{ color: Colors.white }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: Colors.white }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

const purposeCardItemShape = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

PurposeCardItem.propTypes = {
  ...purposeCardItemShape,
};

export { purposeCardItemShape };

export default PurposeCardItem;
