import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, useMediaQuery, useTheme,
} from '@mui/material';
import Title from '../atoms/Title';
import ProfileCardItem, { profileCardItemShape } from '../atoms/ProfileCardItem';
import Subtitle from '../atoms/Subtitle';

function ProfileCardList({ profileCards }) {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box py={6} px={isMobileOrTablet ? 4 : 10}>
      <Title title={(
        <>
          Say Hello to
          {' '}
          {isTabletOrDesktop && <br />}
          Our Awesome Squad
        </>
        )}
      />
      <Subtitle subtitle={(
        <>
          Our team consists of diverse individuals, each bringing distinct skills and strengths,
          {' '}
          {isTabletOrDesktop && <br />}
          from creative minds to analytical problem solvers.
        </>
        )}
      />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={isMobileOrTablet ? 4 : 0}
      >
        {profileCards.map((profileCard) => (
          <ProfileCardItem
            key={profileCard.id}
            {...profileCard}
          />
        ))}
      </Box>
    </Box>
  );
}

ProfileCardList.propTypes = {
  profileCards: PropTypes.arrayOf(
    PropTypes.shape(profileCardItemShape),
  ).isRequired,
};

export default ProfileCardList;
