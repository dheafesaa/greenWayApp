import React from 'react';
import PropTypes from 'prop-types';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Title from '../atoms/Title';
import SeeAllButton from '../atoms/SeeAllButton';
import ArticleCardItem, { articleCardItemShape } from '../atoms/ArticleCardItem';

function ArticleCardList({ articleCards }) {
  const muiTheme = useTheme();
  const isMobileOrTablet = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <Box py={6} px={isMobileOrTablet ? 4 : 10}>
      <Title title="Read Insightful Articles in Your Free Time" />
      <SeeAllButton to="/articles" />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={isMobileOrTablet ? 4 : 0}
      >
        {articleCards.map((articleCard) => (
          <ArticleCardItem
            key={articleCard.id}
            {...articleCard}
          />
        ))}
      </Box>
    </Box>
  );
}

ArticleCardList.propTypes = {
  articleCards: PropTypes.arrayOf(
    PropTypes.shape(articleCardItemShape),
  ).isRequired,
};

export default ArticleCardList;
