import api from '../../utils/api';
import { setLoading } from '../loading/action';

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
    dispatch(setLoading(true));
    try {
      const detailCampaignData = await api.getDetailCampaign(idCampaign);
      dispatch(receiveDetailCampaign(detailCampaignData));
    } catch (error) {
      alert(error.message);
    } finally {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 3000);
    }
  };
}

export {
  ActionType,
  receiveDetailCampaign,
  asyncReceiveDetailCampaign,
};
