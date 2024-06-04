import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import useInput from '../../hooks/useInput';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
import Colors from '../atoms/Colors';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <Box component="form" width="100%" height="100vh" display="flex" flexDirection="column" justifyContent="center" px={6} gap={2}>
      <Box width="100%" display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Typography variant="h3" fontWeight="600">
          <span style={{ color: Colors.secondary }}>Green</span>
          <span style={{ color: '#000' }}>Way</span>
        </Typography>
        <InputText id="email" name="email" label="Email" value={email} onChange={onEmailChange} />
        <InputText id="password" name="email" label="Password" type="password" value={password} onChange={onPasswordChange} />
        <Button fullWidth onClick={() => login({ email, password })}>Sign In</Button>
      </Box>
      <Typography variant="subtitle1">
        Don&apos;t have an account?
        {' '}
        <Link to="/register">Register</Link>
      </Typography>
    </Box>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
