import { ActionType } from './action';

const initialState = {
  detailDestination: null,
};

const detailDestinationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_DESTINATION:
      return action.payload.detailDestination;
    case ActionType.CREATE_COMMENT_DESTINATION:
      return {
        ...state,
        detailThread: {
          ...state.detailDestination,
          comments: [action.payload.comment, ...state.detailDestination.comments],
        },
      };
    default:
      return state;
  }
};

export default detailDestinationReducer;
