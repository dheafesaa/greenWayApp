import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useMediaQuery, useTheme } from '@mui/material';
import ResponsiveFontSizes from './Typography';
import Colors from './Colors';

function PurposeCardItem({ title, description }) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card sx={{ py: isTablet ? 4 : 6, background: Colors.secondary.hard, borderRadius: '16px' }}>
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
