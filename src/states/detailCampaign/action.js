import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_CAMPAIGN: 'RECEIVE_DETAIL_CAMPAIGN',
};

function receiveDetailCampaign(detailCampaign) {
  return {
    type: ActionType.RECEIVE_DETAIL_CAMPAIGN,
    payload: {
      detailCampaign,
    },
  };
}

function asyncReceiveDetailCampaign(idCampaign) {
  return async (dispatch) => {
    try {
      const detailCampaignData = await api.getDetailCampaign(idCampaign);
      dispatch(receiveDetailCampaign(detailCampaignData));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveDetailCampaign,
  asyncReceiveDetailCampaign,
};
