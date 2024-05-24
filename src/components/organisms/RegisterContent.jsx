import React from 'react';
import { Box } from '@mui/material';
import ImgBackground from '../atoms/ImgBackground';
import Quotes from '../molecules/Quotes';

function RegisterContent() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
      }}
    >
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        gap={2}
        px={6}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      >
        <Quotes
          title="Welcome!"
          body="&ldquo;As long as you don't have the subtle feeling of seeing nature, your soul is not alive.&rdquo;"
          footer="-Prof. Dr. Hamka"
        />
      </Box>
      <ImgBackground imgSrc="/src/assets/imgRegister.png" />
    </Box>
  );
}

export default RegisterContent;
