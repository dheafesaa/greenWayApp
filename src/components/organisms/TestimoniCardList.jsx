import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, useMediaQuery } from '@mui/material';
import { Box } from '@mui/joy';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Title from '../atoms/Title';
import TestimoniCardItem, { testimoniCardItemShape } from '../atoms/TestimoniCardItem';

const theme = extendTheme();

function TestimoniCardList({ testimoniCards }) {
  const muiTheme = useTheme();
  const isMobileOrTablet = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <CssVarsProvider theme={theme}>
      <Box py={6} px={isMobileOrTablet ? 4 : 10}>
        <Title title="People Are Talking . . ." />
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap={isMobileOrTablet ? 4 : 0}
        >
          {testimoniCards.map((testimoniCard) => (
            <TestimoniCardItem
              key={testimoniCard.id}
              {...testimoniCard}
            />
          ))}
        </Box>
      </Box>
    </CssVarsProvider>
  );
}

TestimoniCardList.propTypes = {
  testimoniCards: PropTypes.arrayOf(
    PropTypes.shape(testimoniCardItemShape),
  ).isRequired,
};

export default TestimoniCardList;
