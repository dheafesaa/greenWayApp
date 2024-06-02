import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { asyncReceiveCampaigns } from '../states/campaigns/action';
import CampaignCardList from '../components/organisms/CampaignCardList';
import Title from '../components/atoms/Title';
import Subtitle from '../components/atoms/Subtitle';

function CampaignPage() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state?.campaigns || []);

  useEffect(() => {
    dispatch(asyncReceiveCampaigns());
  }, [dispatch]);

  return (
    <Box py={6} px={isMobileOrTablet ? 4 : 10}>
      <Title title={(
        <>
          Join the Campaign for Protecting Nature,
          {' '}
          {isTabletOrDesktop && <br />}
          Preserving Beauty
        </>
      )}
      />
      <Subtitle subtitle={(
        <>
          Join our efforts to safeguard the natural wonders of Indonesia.
          {' '}
          {isTabletOrDesktop && <br />}
          Explore our environmental initiatives and be part of the change for a sustainable future.
        </>
      )}
      />
      <CampaignCardList campaignCards={campaigns} />
    </Box>
  );
}

export default CampaignPage;
