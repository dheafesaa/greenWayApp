import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Colors from './Colors';
import { logoGreenWay } from '../../utils/data';

function Logo() {
  return (
    <Box pt={{ xs: 2, md: 4 }}>
      <Typography
        component={Link}
        to="/"
        variant="h4"
        sx={{
          display: 'flex', alignItems: 'center', textDecoration: 'none', mb: 0,
        }}
      >
        <img src={logoGreenWay} alt="logo-greenway" width={42} height={42} />
        <span style={{ color: Colors.secondary.hard }}>Green</span>
        <span style={{ color: '#000' }}>Way</span>
      </Typography>
    </Box>
  );
}

export default Logo;
