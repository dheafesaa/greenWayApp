import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import useInput from '../../hooks/useInput';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
import ResponsiveFontSizes from '../atoms/Typography';
import Colors from '../atoms/Colors';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <Box component="form" width="100%" display="flex" flexDirection="column" justifyContent="center" px={8} gap={2}>
      <Box width="100%" display="flex" flexDirection="column" alignItems="center" gap={2}>
        <ResponsiveFontSizes variant="h3" fontWeight="600">
          <span style={{ color: Colors.secondary }}>Green</span>
          <span style={{ color: '#000' }}>Way</span>
        </ResponsiveFontSizes>
        <InputText id="email" name="email" label="Email" value={email} onChange={onEmailChange} />
        <InputText id="password" name="email" label="Password" type="password" value={password} onChange={onPasswordChange} />
        <Button onClick={() => login({ email, password })}>Sign In</Button>
      </Box>
      <ResponsiveFontSizes variant="subtitle1">
        Don&apos;t have an account?
        {' '}
        <Link to="/register">Register</Link>
      </ResponsiveFontSizes>
    </Box>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
