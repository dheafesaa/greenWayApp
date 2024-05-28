import api from '../../utils/api';
import { receiveCampaigns } from '../campaigns/action';
import { receiveReviews } from '../reviews/action';

function asyncPopulateCampaignsAndReviews() {
  return async (dispatch) => {
    try {
      const campaigns = await api.getAllCampaigns();
      const reviews = await api.getAllReviews();

      dispatch(receiveCampaigns(campaigns));
      dispatch(receiveReviews(reviews));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateCampaignsAndReviews };
