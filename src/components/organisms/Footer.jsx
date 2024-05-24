import { Box } from '@mui/material';
import React from 'react';
import Colors from '../atoms/Colors';
import ResponsiveFontSizes from '../atoms/Typography';

function Footer() {
  return (
    <Box sx={{
      bottom: 0, py: 2, textAlign: 'center', backgroundColor: Colors.primary.hard,
    }}
    >
      <ResponsiveFontSizes variant="body1" color={Colors.white}>
        Copyright © 2024 GreenWay. All right reserved.
      </ResponsiveFontSizes>
    </Box>
  );
}

export default Footer;
