import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import LoginInput from '../components/organisms/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginContent from '../components/organisms/LoginContent';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }, navigate));
  };

  return (
    <Box width="100%" display="flex" justifyContent="space-between">
      <LoginContent />
      <LoginInput login={onLogin} />
    </Box>
  );
}

export default LoginPage;
