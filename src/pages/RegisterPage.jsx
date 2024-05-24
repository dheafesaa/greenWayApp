import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import RegisterInput from '../components/organisms/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';
import RegisterContent from '../components/organisms/RegisterContent';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));
    navigate('/login');
  };

  return (
    <Box width="100%" display="flex" justifyContent="space-between">
      <RegisterContent />
      <RegisterInput register={onRegister} />
    </Box>
  );
}

export default RegisterPage;
