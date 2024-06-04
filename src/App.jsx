import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import HamburgerMenu from './components/organisms/HamburgerMenu';
import Footer from './components/molecules/Footer';
import ArticlePage from './pages/ArticlePage';
import DestinationPage from './pages/DestinationPage';
import AboutUsPage from './pages/AboutUsPage';
import CampaignPage from './pages/CampaignPage';

function App() {
  const authUser = useSelector((state) => state.authUser);
  const isPreload = useSelector((state) => state.isPreload);
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
        {!isLoginOrRegisterPage && <HamburgerMenu authUser={authUser} signOut={onSignOut} />}
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/campaign" element={<CampaignPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/destination" element={<DestinationPage />} />
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
