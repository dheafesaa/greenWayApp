import { ActionType } from './action';

const initialState = [];

const campaignsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_CAMPAIGNS:
      return action.payload.campaigns;
    default:
      return state;
  }
};

export default campaignsReducer;
