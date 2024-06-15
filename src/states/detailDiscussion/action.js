import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_DISCUSSION: 'RECEIVE_DETAIL_DISCUSSION',
  TOGGLE_LIKE_DISCUSSION: 'TOGGLE_LIKE_DISCUSSION',
  TOGGLE_UNLIKE_DISCUSSION: 'TOGGLE_UNLIKE_DISCUSSION',
  TOGGLE_NEUTRALIZE_DISCUSSION: 'TOGGLE_NEUTRALIZE_DISCUSSION',
  TOGGLE_LIKE_COMMENT: 'TOGGLE_LIKE_COMMENT',
  TOGGLE_UNLIKE_COMMENT: 'TOGGLE_UNLIKE_COMMENT',
  TOGGLE_NEUTRALIZE_COMMENT: 'TOGGLE_NEUTRALIZE_COMMENT',
  CREATE_COMMENT_DISCUSSION: 'CREATE_COMMENT_DISCUSSION',
};

function receiveDetailDiscussion(detailDiscussion) {
  return {
    type: ActionType.RECEIVE_DETAIL_DISCUSSION,
    payload: {
      detailDiscussion,
    },
  };
}

function toggleLikeDiscussion({ discussionId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_DISCUSSION,
    payload: {
      discussionId,
      userId,
    },
  };
}

function toggleUnlikeDiscussion({ discussionId, userId }) {
  return {
    type: ActionType.TOGGLE_UNLIKE_DISCUSSION,
    payload: {
      discussionId,
      userId,
    },
  };
}

function toggleNeutralizeDiscussion({ discussionId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_DISCUSSION,
    payload: {
      discussionId,
      userId,
    },
  };
}

function toggleLikeComment({ discussionId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_COMMENT,
    payload: {
      discussionId,
      commentId,
      userId,
    },
  };
}

function toggleUnlikeComment({ discussionId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_UNLIKE_COMMENT,
    payload: {
      discussionId,
      commentId,
      userId,
    },
  };
}

function toggleNeutralizeComment({ discussionId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_COMMENT,
    payload: {
      discussionId,
      commentId,
      userId,
    },
  };
}

function createCommentDiscussion(comment) {
  return {
    type: ActionType.CREATE_COMMENT_DISCUSSION,
    payload: {
      comment,
    },
  };
}

function asyncReceiveDetailDiscussion(discussionId) {
  return async (dispatch) => {
    try {
      const detailDiscussionData = await api.getDetailDiscussion(discussionId);
      dispatch(receiveDetailDiscussion(detailDiscussionData));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleLikeDetailDiscussion(discussionId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) {
      alert('You must be logged in to vote.');
      return;
    }
    dispatch(toggleLikeDiscussion({ discussionId, userId: authUser.id }));
    try {
      await api.toggleLikeDiscussion(discussionId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeDiscussion({ discussionId, userId: authUser.id }));
    }
  };
}

function asyncToggleUnlikeDetailDiscussion(discussionId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) {
      alert('You must be logged in to vote.');
      return;
    }
    dispatch(toggleUnlikeDiscussion({ discussionId, userId: authUser.id }));
    try {
      await api.toggleUnlikeDiscussion(discussionId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUnlikeDiscussion({ discussionId, userId: authUser.id }));
    }
  };
}

function asyncToggleNeutralizeDetailDiscussion(discussionId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralizeDiscussion({ discussionId, userId: authUser.id }));
    try {
      await api.toggleNeutralizeDiscussion(discussionId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeDiscussion({ discussionId, userId: authUser.id }));
    }
  };
}

function asyncToggleLikeComment(discussionId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) {
      alert('Please login first!');
      return;
    }
    dispatch(toggleLikeComment({ commentId, userId: authUser.id }));
    try {
      await api.toggleLikeComment(discussionId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeComment({ discussionId, userId: authUser.id }));
    }
  };
}

function asyncToggleUnlikeComment(discussionId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) {
      alert('Please login first!');
      return;
    }
    dispatch(toggleUnlikeComment({ commentId, userId: authUser.id }));
    try {
      await api.toggleUnlikeComment(discussionId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUnlikeComment({ discussionId, userId: authUser.id }));
    }
  };
}

function asyncToggleNeutralizeComment(discussionId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralizeComment({ commentId, userId: authUser.id }));
    try {
      await api.toggleNeutralizeComment(discussionId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeComment({ discussionId, userId: authUser.id }));
    }
  };
}

function asyncCreateCommentDiscussion(discussionId, comment) {
  return async (dispatch) => {
    try {
      const newComment = await api.createCommentDiscussion(discussionId, comment);
      dispatch(createCommentDiscussion(newComment));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveDetailDiscussion,
  asyncReceiveDetailDiscussion,
  asyncToggleLikeDetailDiscussion,
  asyncToggleUnlikeDetailDiscussion,
  asyncToggleNeutralizeDetailDiscussion,
  asyncToggleLikeComment,
  asyncToggleUnlikeComment,
  asyncToggleNeutralizeComment,
  asyncCreateCommentDiscussion,
};
