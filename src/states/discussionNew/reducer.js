import { ActionType } from './action';

const initialState = {
  discussion: null,
};

const discussionNewReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.CREATE_DISCUSSION:
      return {
        ...state,
        discussion: action.payload.data.discussion,
      };
    default:
      return state;
  }
};

export default discussionNewReducer;
