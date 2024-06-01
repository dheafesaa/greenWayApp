import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { asyncReceiveCampaigns } from '../states/campaigns/action';
import CampaignCardList from '../components/organisms/CampaignCardList';
import Title from '../components/atoms/Title';

function CampaignPage() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state?.campaigns || []);

  useEffect(() => {
    dispatch(asyncReceiveCampaigns());
  }, [dispatch]);

  return (
    <Box py={6} px={isMobileOrTablet ? 4 : 10}>
      <Title title="Campaign" />
      <CampaignCardList campaignCards={campaigns} />
    </Box>
  );
}

export default CampaignPage;
