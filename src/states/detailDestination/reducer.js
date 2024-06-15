import { ActionType } from './action';

const initialState = {
  detailDestination: null,
};

const detailDestinationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_DESTINATION:
      return {
        ...state,
        detailDestination: action.payload,
      };
    case ActionType.CREATE_COMMENT_DESTINATION:
      if (state.detailDestination) {
        return {
          ...state,
          detailDestination: {
            ...state.detailDestination,
            comments: [action.payload, ...state.detailDestination.comments],
          },
        };
      }
      return state;
    default:
      return state;
  }
};

export default detailDestinationReducer;
