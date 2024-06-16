import api from '../../utils/api';
import { setLoading } from '../loading/action';

const ActionType = {
  RECEIVE_DETAIL_DESTINATION: 'RECEIVE_DETAIL_DESTINATION',
  CREATE_COMMENT_DESTINATION: 'CREATE_COMMENT_DESTINATION',
};

function receiveDetailDestination(detailDestination) {
  return {
    type: ActionType.RECEIVE_DETAIL_DESTINATION,
    payload: detailDestination,
  };
}

function createCommentDestination(comment) {
  return {
    type: ActionType.CREATE_COMMENT_DESTINATION,
    payload: comment,
  };
}

function asyncReceiveDetailDestination(destinationId) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const detailDestinationData = await api.getDetailDestination(destinationId);
      dispatch(receiveDetailDestination(detailDestinationData));
    } catch (error) {
      alert(error.message);
    } finally {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 3000);
    }
  };
}

function asyncCreateCommentDestination(destinationId, comment) {
  return async (dispatch) => {
    try {
      const newComment = await api.createCommentDestination(destinationId, comment);
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
