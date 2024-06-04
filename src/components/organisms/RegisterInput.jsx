import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import InputText from '../atoms/InputText';
import Colors from '../atoms/Colors';
import Button from '../atoms/Button';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <Box component="form" width="100%" height="100vh" display="flex" flexDirection="column" justifyContent="center" px={6} gap={2}>
      <Box width="100%" display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Typography variant="h3" fontWeight="600">
          <span style={{ color: Colors.secondary }}>Green</span>
          <span style={{ color: '#000' }}>Way</span>
        </Typography>
        <InputText id="name" name="name" label="Name" value={name} onChange={onNameChange} />
        <InputText id="email" name="email" label="Email" value={email} onChange={onEmailChange} />
        <InputText id="password" name="email" label="Password" type="password" value={password} onChange={onPasswordChange} />
        <Button fullWidth onClick={() => register({ name, email, password })}>Sign Up</Button>
      </Box>
      <Typography variant="body1">
        Already have an account?
        {' '}
        <Link to="/login">Login</Link>
      </Typography>
    </Box>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
