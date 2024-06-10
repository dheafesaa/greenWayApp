import { ActionType } from './action';

const initialState = null;

const detailCampaignReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_CAMPAIGN:
      return action.payload.detailCampaign;
    default:
      return state;
  }
};

export default detailCampaignReducer;
