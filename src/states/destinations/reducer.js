import { ActionType } from './action';

const initialState = [];

const destinationsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DESTINATIONS:
      return action.payload.destinations;
    default:
      return state;
  }
};

export default destinationsReducer;
