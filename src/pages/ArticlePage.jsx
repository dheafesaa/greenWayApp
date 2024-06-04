import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Container, useMediaQuery, useTheme,
} from '@mui/material';
import ArticleCardList from '../components/organisms/ArticleCardList';
import { asyncReceiveArticles } from '../states/articles/action';
import Header from '../components/molecules/Header';

function ArticlePage() {
  const theme = useTheme();
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const dispatch = useDispatch();
  const articles = useSelector((state) => state?.articles || []);

  useEffect(() => {
    dispatch(asyncReceiveArticles());
  }, [dispatch]);

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Header
          title={(
            <>
              Read Insightful Articles In
              {' '}
              {isTabletOrDesktop && <br />}
              Your Free Time
            </>
        )}
          subtitle={(
            <>
              There are many choices of useful articles to read, let&#39;s
              {' '}
              {isTabletOrDesktop && <br />}
              make the best your free time to get inspired.
            </>
        )}
        />
        <ArticleCardList articleCards={articles} />
      </Container>
    </Box>
  );
}

export default ArticlePage;
