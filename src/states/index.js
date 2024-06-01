import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import usersReducer from './users/reducer';
import campaignsReducer from './campaigns/reducer';
import reviewsReducer from './reviews/reducer';
import articlesReducer from './articles/reducer';
import destinationsReducer from './destinations/reducer';
import aboutUsReducer from './aboutUS/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    campaigns: campaignsReducer,
    loadingBar: loadingBarReducer,
    reviews: reviewsReducer,
    articles: articlesReducer,
    destinations: destinationsReducer,
    aboutUs: aboutUsReducer,
  },
});

export default store;
