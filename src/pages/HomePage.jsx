import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeroLayout from '../components/organisms/HeroLayout';
import ProductCategory from '../components/organisms/ProductCategory';
import ProductLayout from '../components/organisms/ProductLayout';
import ItemPurpose from '../components/organisms/ItemPurpose';
import CampaignList from '../components/organisms/CampaignList';
import Testimoni from '../components/organisms/Testimoni';
import Videos from '../components/organisms/Videos';
import CommunityLayout from '../components/organisms/CommunityLayout';
import { asyncReceiveCampaigns } from '../states/campaigns/action';

function HomePage() {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state?.campaigns || []);

  useEffect(() => {
    dispatch(asyncReceiveCampaigns());
  }, [dispatch]);

  const productCards = [
    { title: '14', description: 'Initiatives' },
    { title: '52', description: 'Destinations' },
    { title: '31', description: 'Campaigns' },
    { title: '25', description: 'Articles' },
  ];

  const limitedCampaigns = campaigns.slice(0, 4);

  return (
    <section className="home-page">
      <HeroLayout
        title="TRAVEL AND SAVE NATURE "
        description="Welcome to a new era of travel where adventure meets environmental stewardship.
        Your Gateway to Sustainable Exploration in Indonesia! Start your journey with us and traverse
        Indonesia in a more responsible, eco-conscious manner."
        imageUrl="/src/assets/landing-1.png"
      />
      <ProductCategory productCards={productCards} />
      <ProductLayout
        title="Eco Friendly Travel For Better Future"
        description="Welcome to a new era of travel where adventure meets environmental stewardship.
        Your Gateway to Sustainable Exploration in Indonesia! Start your journey with us and traverse
        Indonesia in a more responsible, eco-conscious manner."
        imageUrl="/src/assets/subContent.png"
      />
      <ItemPurpose />
      <CampaignList campaigns={limitedCampaigns} />
      <Testimoni />
      <Videos />
      <CommunityLayout
        title="Community Is Calling, No Need to Stalling"
        description="Join our discussion community! Discover new ideas and exchange experience
        with thousands of members. Let's join now!"
        imageUrl="/src/assets/communityLayout.png"
      />
    </section>
  );
}

export default HomePage;
