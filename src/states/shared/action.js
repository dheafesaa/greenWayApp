import api from '../../utils/api';
import { receiveCampaigns } from '../campaigns/action';
// import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    try {
      // const users = await api.getAllUsers();
      const campaigns = await api.getAllCampaigns();

      // dispatch(receiveUsersActionCreator(users));
      dispatch(receiveCampaigns(campaigns));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateUsersAndThreads };
