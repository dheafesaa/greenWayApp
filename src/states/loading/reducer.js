import { ActionType } from './action';

const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default loadingReducer;
