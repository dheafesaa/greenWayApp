import { ActionType } from './action';

const initialState = null;

const detailDestinationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_DESTINATION:
      return action.payload.detailDestination;
    default:
      return state;
  }
};

export default detailDestinationReducer;
