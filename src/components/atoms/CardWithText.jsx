import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useMediaQuery, useTheme } from '@mui/material';
import ResponsiveFontSizes from './Typography';
import Colors from './Colors';

function CardWithText({ title, description }) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const headingVariant = isTablet ? 'h4' : 'h3';

  return (
    <Card sx={{ py: 2 }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <ResponsiveFontSizes variant={headingVariant} fontWeight="600" color={Colors.primary.soft}>
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
