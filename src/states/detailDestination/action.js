import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_DESTINATION: 'RECEIVE_DETAIL_DESTINATION',
};

function receiveDetailDestination(detailDestination) {
  return {
    type: ActionType.RECEIVE_DETAIL_DESTINATION,
    payload: {
      detailDestination,
    },
  };
}

function asyncReceiveDetailDestination(idDestination) {
  return async (dispatch) => {
    try {
      const destinationsData = await api.getDetailDestination(idDestination);
      dispatch(receiveDetailDestination(destinationsData));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveDetailDestination,
  asyncReceiveDetailDestination,
};
