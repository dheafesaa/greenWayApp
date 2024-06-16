import api from '../../utils/api';
import { receiveCampaigns } from '../campaigns/action';
import { receiveReviews } from '../reviews/action';
import { setLoading } from '../loading/action';

function asyncPopulateCampaignsAndReviews() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const campaigns = await api.getAllCampaigns();
      const reviews = await api.getAllReviews();

      dispatch(receiveCampaigns(campaigns));
      dispatch(receiveReviews(reviews));
    } catch (error) {
      alert(error.message);
    } finally {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 3000);
    }
  };
}

export { asyncPopulateCampaignsAndReviews };
