import { ActionType } from './action';

const discussionsReducer = (discussions = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DISCUSSIONS:
      return action.payload.discussions;
    case ActionType.TOGGLE_LIKE_DISCUSSION:
      return discussions.map((discussion) => {
        if (discussion.id === action.payload.discussionId) {
          const updatedUpVotesBy = discussion.upVotesBy.includes(action.payload.userId)
            ? discussion.upVotesBy.filter((id) => id !== action.payload.userId)
            : [...discussion.upVotesBy.filter((id) => id !== action.payload.userId),
              action.payload.userId];

          const updatedDownVotesBy = discussion.downVotesBy
            .filter((id) => id !== action.payload.userId);

          return {
            ...discussions,
            upVotesBy: updatedUpVotesBy,
            downVotesBy: updatedDownVotesBy,
          };
        }
        return discussions;
      });
    case ActionType.TOGGLE_UNLIKE_DISCUSSION:
      return discussions.map((discussion) => {
        if (discussion.id === action.payload.discussionId) {
          const updatedDownVotesBy = discussion.downVotesBy.includes(action.payload.userId)
            ? discussion.downVotesBy.filter((id) => id !== action.payload.userId)
            : [...discussion.downVotesBy.filter((id) => id !== action.payload.userId),
              action.payload.userId];

          const updatedUpVotesBy = discussion.upVotesBy
            .filter((id) => id !== action.payload.userId);

          return {
            ...discussion,
            upVotesBy: updatedUpVotesBy,
            downVotesBy: updatedDownVotesBy,
          };
        }
        return discussion;
      });
    case ActionType.TOGGLE_NEUTRALIZE_discussion:
      return discussions.map((discussion) => {
        if (discussion.id === action.payload.discussionId) {
          return {
            ...discussion,
            upVotesBy: discussion.upVotesBy.filter((id) => id !== action.payload.userId),
            downVotesBy: discussion.downVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return discussion;
      });
    default:
      return discussions;
  }
};

export default discussionsReducer;
