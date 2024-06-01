import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveAboutUs } from '../states/aboutUS/action';
import ProfileCardList from '../components/organisms/ProfileCardList';

function AboutUsPage() {
  const dispatch = useDispatch();
  const aboutUs = useSelector((state) => state?.aboutUs || []);

  useEffect(() => {
    dispatch(asyncReceiveAboutUs());
  }, [dispatch]);

  return (
    <ProfileCardList profileCards={aboutUs} />
  );
}

export default AboutUsPage;
