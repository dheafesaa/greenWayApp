import { ActionType } from './action';

const discussionNewReducer = (discussion = null, action = {}) => {
  switch (action.type) {
    case ActionType.CREATE_DISCUSSION:
      return {
        ...discussion,
        discussion: action.payload.data.discussion,
      };
    default:
      return discussion;
  }
};

export default discussionNewReducer;
