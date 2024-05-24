import React from 'react';
import { Box } from '@mui/material';
import CardItemPurpose from '../atoms/CardItemPurpose';

function ItemPurpose() {
  return (
    <Box display="flex" justifyContent="space-between" py={6} px={10}>
      <CardItemPurpose
        title="Explore Destinations"
        description="Explore travel destination and share experience with exploler."
      />
      <CardItemPurpose
        title="Eco-Friendly Travel"
        description="Discover our curated selection of campaign destinations."
      />
      <CardItemPurpose
        title="Environmental Impact Initiatives"
        description="Dive into our initiatives aimmed at environment awarness when related to travel."
      />
    </Box>
  );
}

export default ItemPurpose;
