import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleCardList from '../components/organisms/ArticleCardList';
import { asyncReceiveArticles } from '../states/articles/action';

function ArticlePage() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state?.articles || []);

  useEffect(() => {
    dispatch(asyncReceiveArticles());
  }, [dispatch]);

  return (
    <ArticleCardList articleCards={articles} />
  );
}

export default ArticlePage;
