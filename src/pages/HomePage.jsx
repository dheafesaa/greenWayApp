import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HeroLayout from '../components/organisms/HeroLayout';
import CategoryCardList from '../components/organisms/CategoryCardList';
import ProductLayout from '../components/organisms/ProductLayout';
import PurposeCardList from '../components/organisms/PurposeCardList';
import CampaignCardList from '../components/organisms/CampaignCardList';
import TestimoniCardList from '../components/organisms/TestimoniCardList';
import CommunityLayout from '../components/organisms/CommunityLayout';
import Title from '../components/atoms/Title';
import CardVideo from '../components/atoms/CardVideo';
import { categoryCards, purposeCards } from '../utils/data';
import { asyncPopulateCampaignsAndReviews } from '../states/shared/action';

function HomePage() {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state?.campaigns || []);
  const reviews = useSelector((state) => state.reviews || []);

  useEffect(() => {
    dispatch(asyncPopulateCampaignsAndReviews());
  }, [dispatch]);

  const limitedCampaigns = campaigns.slice(0, 4);

  return (
    <Box sx={{ pt: 2, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <HeroLayout
          title="TRAVEL AND SAVE NATURE "
          description="Welcome to a new era of travel where adventure meets environmental stewardship.
        Your Gateway to Sustainable Exploration in Indonesia! Start your journey with us and traverse
        Indonesia in a more responsible, eco-conscious manner."
          imageUrl="/src/assets/landing-1.png"
        />
        <CategoryCardList categoryCards={categoryCards} />
        <Box py={6}>
          <ProductLayout
            title="Eco Friendly Travel For Better Future"
            description="Welcome to a new era of travel where adventure meets environmental
             stewardship. Your Gateway to Sustainable Exploration in Indonesia!
             Start your journey with us and traverse Indonesia in a more responsible, eco-conscious manner."
            imageUrl="/src/assets/subContent.png"
          />
        </Box>
        <Box py={{ xs: 0, md: 6 }}>
          <PurposeCardList purposeCards={purposeCards} />
        </Box>
        <Box py={6}>
          <Title title="Campaign" />
          <CampaignCardList campaignCards={limitedCampaigns} showSeeAll />
        </Box>
        <Box py={6}>
          <Title title="People Are Talking . ." />
          <TestimoniCardList testimoniCards={reviews} />
        </Box>
        <Box py={6}>
          <Title title="Nature of Indonesia" />
          <CardVideo
            src="/src/assets/Wonderful Indonesia - Nature.mp4"
            alt="Wonderful Indonesia"
          />
        </Box>
        <Box py={6}>
          <CommunityLayout
            title="Community Is Calling, No Need to Stalling"
            description="Join our discussion community! Discover new ideas and exchange experience
           with thousands of members. Let's join now!"
            imageUrl="/src/assets/communityLayout.png"
          />
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
