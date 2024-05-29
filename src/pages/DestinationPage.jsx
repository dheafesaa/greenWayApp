import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import DestinationCardList from '../components/organisms/DestinationCardList';
import { asyncReceiveDestinations } from '../states/destinations/action';
// import DestinationBanner from '../components/organisms/DestinationBanner';

function DestinationPage() {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state?.destinations || []);

  useEffect(() => {
    dispatch(asyncReceiveDestinations());
  }, [dispatch]);

  return (
    <Box>
      {/* <DestinationBanner /> */}
      <DestinationCardList destinationCards={destinations} />
    </Box>
  );
}

export default DestinationPage;
