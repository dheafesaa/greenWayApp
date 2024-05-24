import api from '../../utils/api';

const ActionType = {
  RECEIVE_CAMPAIGNS: 'RECEIVE_CAMPAIGNS',
};

function receiveCampaigns(campaigns) {
  return {
    type: ActionType.RECEIVE_CAMPAIGNS,
    payload: {
      campaigns,
    },
  };
}

function asyncReceiveCampaigns() {
  return async (dispatch) => {
    try {
      const campaignsData = await api.getAllCampaigns();
      dispatch(receiveCampaigns(campaignsData));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveCampaigns,
  asyncReceiveCampaigns,
};
