import api from '../../utils/api';

const ActionType = {
  RECEIVE_ARTICLES: 'RECEIVE_ARTICLES',
};

function receiveArticles(articles) {
  return {
    type: ActionType.RECEIVE_ARTICLES,
    payload: {
      articles,
    },
  };
}

function asyncReceiveArticles() {
  return async (dispatch) => {
    try {
      const articlesData = await api.getAllArticles();
      dispatch(receiveArticles(articlesData));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveArticles,
  asyncReceiveArticles,
};
