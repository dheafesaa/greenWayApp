import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Container, useMediaQuery, useTheme,
} from '@mui/material';
import { asyncReceiveAboutUs } from '../states/aboutUS/action';
import ProfileCardList from '../components/organisms/ProfileCardList';
import Header from '../components/molecules/Header';

function AboutUsPage() {
  const theme = useTheme();
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const dispatch = useDispatch();
  const aboutUs = useSelector((state) => state?.aboutUs || []);

  useEffect(() => {
    dispatch(asyncReceiveAboutUs());
  }, [dispatch]);

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
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
      </Container>
    </Box>
  );
}

export default AboutUsPage;
