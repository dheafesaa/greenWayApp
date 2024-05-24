import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import ResponsiveFontSizes from './Typography';
import Colors from './Colors';

function CardWithText({ title, description }) {
  return (
    <Card sx={{ minWidth: 320, py: 2 }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <ResponsiveFontSizes variant="h3" fontWeight="600" color={Colors.primary.soft}>
          {title}
        </ResponsiveFontSizes>
        <ResponsiveFontSizes variant="body1">
          {description}
        </ResponsiveFontSizes>
      </CardContent>
    </Card>
  );
}

CardWithText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardWithText;
