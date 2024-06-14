import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Header from '../components/atoms/Header';
import Search from '../components/atoms/Search';
import DestinationCardList from '../components/organisms/DestinationCardList';
import { asyncReceiveDestinations } from '../states/destinations/action';

function DestinationPage() {
  const theme = useTheme();
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const dispatch = useDispatch();
  const destinations = useSelector((state) => state?.destinations || []);

  useEffect(() => {
    dispatch(asyncReceiveDestinations());
  }, [dispatch]);

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Header
          title={(
            <>
              Find The Next Places to Explore
              {' '}
              {isTabletOrDesktop && <br />}
              The Beauty of The Indonesia
            </>
        )}
          subtitle={(
            <>
              Discover your dream adventure here. Every corner of Indonesia&#39;s beauty awaits
              {' '}
              {isTabletOrDesktop && <br />}
              you with unforgettable memories. With Greenway, explore it all now!
            </>
        )}
        />
        <Box mt={4}>
          <Search />
        </Box>
        <DestinationCardList destinationCards={destinations} />
      </Container>
    </Box>
  );
}

export default DestinationPage;
