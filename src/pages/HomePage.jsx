import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container } from '@mui/material';
import HeroLayout from '../components/organisms/HeroLayout';
import CategoryCardList from '../components/organisms/CategoryCardList';
import ProductLayout from '../components/organisms/ProductLayout';
import PurposeCardList from '../components/organisms/PurposeCardList';
import CampaignCardList from '../components/organisms/CampaignCardList';
import TestimoniCardList from '../components/organisms/TestimoniCardList';
import CommunityLayout from '../components/organisms/CommunityLayout';
import { asyncPopulateCampaignsAndReviews } from '../states/shared/action';
import Title from '../components/atoms/Title';
import SeeAllButton from '../components/atoms/SeeAllButton';
import CardVideo from '../components/atoms/CardVideo';

function HomePage() {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state?.campaigns || []);
  const reviews = useSelector((state) => state.reviews || []);

  useEffect(() => {
    dispatch(asyncPopulateCampaignsAndReviews());
  }, [dispatch]);

  const categoryCards = [
    { title: '14', description: 'Initiatives' },
    { title: '52', description: 'Destinations' },
    { title: '31', description: 'Campaigns' },
    { title: '25', description: 'Articles' },
  ];

  const purposeCards = [
    {
      id: 1,
      title: 'Explore Destinations',
      description:
        'Explore travel destination and share experience with exploler.',
    },
    {
      id: 2,
      title: 'Sustainable Journeys',
      description: 'Discover our curated selection of campaign destinations.',
    },
    {
      id: 3,
      title: 'Green Travel Actions',
      description:
        'Learn about our initiatives for sustainable travel awareness.',
    },
  ];

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
          <SeeAllButton to="/campaigns" />
          <CampaignCardList campaignCards={limitedCampaigns} />
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
