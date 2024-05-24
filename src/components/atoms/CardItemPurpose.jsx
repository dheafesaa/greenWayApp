import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ResponsiveFontSizes from './Typography';
import Colors from './Colors';

function CardItemPurpose({ title, description }) {
  return (
    <Card sx={{
      maxWidth: 400, py: 2, background: Colors.secondary.hard, borderRadius: '16px',
    }}
    >
      <CardContent>
        <ResponsiveFontSizes variant="h4" fontWeight="600" color={Colors.white}>
          {title}
        </ResponsiveFontSizes>
        <ResponsiveFontSizes variant="body1" color={Colors.white}>
          {description}
        </ResponsiveFontSizes>
      </CardContent>
    </Card>
  );
}

CardItemPurpose.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardItemPurpose;
