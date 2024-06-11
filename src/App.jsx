import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import Navbar from './components/organisms/Navbar';
import Footer from './components/molecules/Footer';
import ArticlePage from './pages/ArticlePage';
import DestinationPage from './pages/DestinationPage';
import AboutUsPage from './pages/AboutUsPage';
import CampaignPage from './pages/CampaignPage';
import DetailCampaignPage from './pages/DetailCampaignPage';
import DetailDestinationPage from './pages/DetailDestinationPage';
import DiscussionPage from './pages/DiscussionPage';
import AddDiscussionPage from './pages/AddDiscussionPage';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  const isLoginOrRegisterPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="app">
      <header>
        {!isLoginOrRegisterPage && <Navbar authUser={authUser} signOut={onSignOut} />}
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/campaigns" element={<CampaignPage />} />
          <Route path="/campaigns/:id" element={<DetailCampaignPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/destinations" element={<DestinationPage />} />
          <Route path="/add-discussion" element={<AddDiscussionPage />} />
          <Route path="/destinations/:id" element={<DetailDestinationPage />} />
          <Route path="/discussions" element={<DiscussionPage />} />
          <Route path="/discussions/add" element={<AddDiscussionPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      <footer>
        {!isLoginOrRegisterPage && <Footer />}
      </footer>
    </div>
  );
}

export default App;
