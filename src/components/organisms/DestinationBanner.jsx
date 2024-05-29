import React from 'react';
import {
  Box, useMediaQuery, useTheme,
} from '@mui/material';
import Subtitle from '../atoms/Subtitle';
import Title from '../atoms/Title';
import Search from '../atoms/Search';
import backgroundImage from '../../assets/imgBanner.png';

function ExploreComponent() {
  const muiTheme = useTheme();
  const isTabletOrDesktop = useMediaQuery(muiTheme.breakpoints.up('sm'));

  return (
    <Box
      py={14}
      px={10}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
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
