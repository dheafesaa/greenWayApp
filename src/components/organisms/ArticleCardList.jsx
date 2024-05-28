import React from 'react';
import PropTypes from 'prop-types';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';
import ArticleCardItem, { articleCardItemShape } from '../atoms/ArticleCardItem';

function ArticleCardList({ articleCards }) {
  const muiTheme = useTheme();
  const isMobileOrTablet = useMediaQuery(muiTheme.breakpoints.down('md'));
  const isTabletOrDesktop = useMediaQuery(muiTheme.breakpoints.up('sm'));

  return (
    <Box py={6} px={isMobileOrTablet ? 4 : 10}>
      <Title
        title={(
          <>
            Read Insightful Articles In
            {' '}
            {isTabletOrDesktop && <br />}
            Your Free Time
          </>
        )}
      />
      <Subtitle
        subtitle={(
          <>
            There are many choices of useful articles to read, let&#39;s
            {' '}
            {isTabletOrDesktop && <br />}
            make the best your free time to get inspired.
          </>
        )}
      />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={isMobileOrTablet ? 4 : 0}
      >
        {articleCards.map((articleCard) => (
          <ArticleCardItem key={articleCard.id} {...articleCard} />
        ))}
      </Box>
    </Box>
  );
}

ArticleCardList.propTypes = {
  articleCards: PropTypes.arrayOf(PropTypes.shape(articleCardItemShape))
    .isRequired,
};

export default ArticleCardList;
