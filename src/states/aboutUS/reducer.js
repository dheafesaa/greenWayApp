import { ActionType } from './action';

const initialState = [];

const aboutUsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_ABOUTUS:
      return action.payload.aboutUs;
    default:
      return state;
  }
};

export default aboutUsReducer;
