import { ActionType } from './action';

const initialState = [];

const articlesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_ARTICLES:
      return action.payload.articles;
    default:
      return state;
  }
};

export default articlesReducer;
