import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_DESTINATION: 'RECEIVE_DETAIL_DESTINATION',
  CREATE_COMMENT_DESTINATION: 'CREATE_COMMENT_DESTINATION',
};

function receiveDetailDestination(detailDestination) {
  return {
    type: ActionType.RECEIVE_DETAIL_DESTINATION,
    payload: {
      detailDestination,
    },
  };
}

function createCommentDestination(comment) {
  return {
    type: ActionType.CREATE_COMMENT_DESTINATION,
    payload: {
      comment,
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

function asyncCreateCommentDestination(idDestination, comment) {
  return async (dispatch) => {
    try {
      const newComment = await api.createCommentDestination(idDestination, comment);
      dispatch(createCommentDestination(newComment));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveDetailDestination,
  asyncReceiveDetailDestination,
  asyncCreateCommentDestination,
};
