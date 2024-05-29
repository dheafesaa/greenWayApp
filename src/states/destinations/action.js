import api from '../../utils/api';

const ActionType = {
  RECEIVE_DESTINATIONS: 'RECEIVE_DESTINATIONS',
};

function receiveDestinations(destinations) {
  return {
    type: ActionType.RECEIVE_DESTINATIONS,
    payload: {
      destinations,
    },
  };
}

function asyncReceiveDestinations() {
  return async (dispatch) => {
    try {
      const destinationsData = await api.getAllDestinations();
      dispatch(receiveDestinations(destinationsData));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveDestinations,
  asyncReceiveDestinations,
};
