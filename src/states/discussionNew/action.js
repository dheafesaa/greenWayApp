import api from '../../utils/api';

const ActionType = {
  CREATE_DISCUSSION: 'CREATE_DISCUSSION',
};

function createDiscussion(data) {
  return {
    type: ActionType.CREATE_DISCUSSION,
    payload: {
      data,
    },
  };
}

function asyncCreateDiscussion(title, category, body) {
  return async (dispatch) => {
    try {
      const newData = await api.createDiscussion(title, category, body);
      dispatch(createDiscussion(newData));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  createDiscussion,
  asyncCreateDiscussion,
};
