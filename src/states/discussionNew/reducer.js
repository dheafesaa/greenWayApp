import { ActionType } from './action';

const initialState = {
  discussions: null,
};

const discussionNewReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.CREATE_DISCUSSION:
      return {
        ...state,
        discussions: action.payload.data.discussions,
      };
    default:
      return state;
  }
};

export default discussionNewReducer;
