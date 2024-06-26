import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Title from '../components/atoms/Title';
import Header from '../components/atoms/Header';
import Loader from '../components/atoms/Loader';
import ProfileCardList from '../components/organisms/ProfileCardList';
import AboutGreenWay from '../components/organisms/AboutGreenWay';
import { asyncReceiveAboutUs } from '../states/aboutUS/action';
import { imgAboutUs } from '../utils/data';

function AboutUsPage() {
  const theme = useTheme();
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const aboutUs = useSelector((state) => state.aboutUs.aboutUs);

  useEffect(() => {
    dispatch(asyncReceiveAboutUs());
  }, [dispatch]);

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Title title="About Us" />
            <AboutGreenWay
              imageUrl={imgAboutUs}
              description="Welcome to GreenWay, where our passion for the environment meets the joy of discovery.
              At GreenWay, we are dedicated to promoting Eco-friendly tourism while introducing a myriad of captivating
              travel destinations to everyone. Our website is designed to inspire and educate, featuring engaging campaigns
              and providing a platform to connect with like-minded communities. Join us on our journey to explore the world's
              beauty sustainably and responsibly."
            />
            <Header
              title={(
                <>
                  Say Hello to
                  {' '}
                  {isTabletOrDesktop && <br />}
                  Our Awesome Squad
                </>
              )}
              subtitle={(
                <>
                  Our team consists of diverse individuals, each bringing distinct
                  skills and strengths,
                  {' '}
                  {isTabletOrDesktop && <br />}
                  from creative minds to analytical problem solvers.
                </>
              )}
            />
            <ProfileCardList profileCards={aboutUs} />
          </>
        )}
      </Container>
    </Box>
  );
}

export default AboutUsPage;
