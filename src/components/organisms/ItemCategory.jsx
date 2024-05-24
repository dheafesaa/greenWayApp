import React from 'react';
import { Box } from '@mui/material';
import CardWithText from '../atoms/CardWithText';
import Colors from '../atoms/Colors';

function ItemCategory() {
  return (
    <Box display="flex" justifyContent="space-between" py={6} px={10} sx={{ backgroundColor: Colors.secondary.hard }}>
      <CardWithText title="14" description="Green Initiatives" />
      <CardWithText title="52" description="Destinations" />
      <CardWithText title="31" description="Campaigns" />
      <CardWithText title="25" description="Articles" />
    </Box>
  );
}

export default ItemCategory;
