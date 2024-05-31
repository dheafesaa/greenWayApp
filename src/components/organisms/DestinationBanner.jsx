import React from 'react';
import {
  Box, useMediaQuery, useTheme,
} from '@mui/material';
import Subtitle from '../atoms/Subtitle';
import Title from '../atoms/Title';
import Search from '../atoms/Search';

function ExploreComponent() {
  const muiTheme = useTheme();
  const isMobileOrTablet = useMediaQuery(muiTheme.breakpoints.down('md'));
  const isTabletOrDesktop = useMediaQuery(muiTheme.breakpoints.up('sm'));

  return (
    <Box
      py={6}
      px={isMobileOrTablet ? 4 : 10}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Title title={(
        <>
          Find The Next Places to Explore
          {' '}
          {isTabletOrDesktop && <br />}
          The Beauty of The Indonesia
        </>
        )}
      />
      <Subtitle subtitle="Your journey to find beautiful places starts here!" />
      <Search />
    </Box>
  );
}

export default ExploreComponent;
