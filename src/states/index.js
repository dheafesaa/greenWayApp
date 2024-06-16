import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import loadingReducer from './loading/reducer';
import usersReducer from './users/reducer';
import campaignsReducer from './campaigns/reducer';
import reviewsReducer from './reviews/reducer';
import articlesReducer from './articles/reducer';
import destinationsReducer from './destinations/reducer';
import aboutUsReducer from './aboutUS/reducer';
import detailDestinationReducer from './detailDestination/reducer';
import detailCampaignReducer from './detailCampaign/reducer';
import discussionsReducer from './discussions/reducer';
import discussionNewReducer from './discussionNew/reducer';
import detailDiscussionReducer from './detailDiscussion/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    loading: loadingReducer,
    users: usersReducer,
    campaigns: campaignsReducer,
    loadingBar: loadingBarReducer,
    reviews: reviewsReducer,
    articles: articlesReducer,
    destinations: destinationsReducer,
    aboutUs: aboutUsReducer,
    detailDestination: detailDestinationReducer,
    detailCampaign: detailCampaignReducer,
    discussions: discussionsReducer,
    discussionNew: discussionNewReducer,
    detailDiscussion: detailDiscussionReducer,
  },
});

export default store;
