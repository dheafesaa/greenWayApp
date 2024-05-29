import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DestinationCardList from '../components/organisms/DestinationCardList';
import { asyncReceiveDestinations } from '../states/destinations/action';

function DestinationPage() {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state?.destinations || []);

  useEffect(() => {
    dispatch(asyncReceiveDestinations());
  }, [dispatch]);

  return (
    <DestinationCardList destinationCards={destinations} />
  );
}

export default DestinationPage;
