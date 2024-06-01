import api from '../../utils/api';

const ActionType = {
  RECEIVE_ABOUTUS: 'RECEIVE_ABOUTUS',
};

function receiveAboutUs(aboutUs) {
  return {
    type: ActionType.RECEIVE_ABOUTUS,
    payload: {
      aboutUs,
    },
  };
}

function asyncReceiveAboutUs() {
  return async (dispatch) => {
    try {
      const aboutUsData = await api.getAllAboutUs();
      dispatch(receiveAboutUs(aboutUsData));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveAboutUs,
  asyncReceiveAboutUs,
};
