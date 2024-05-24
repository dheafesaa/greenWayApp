import React from 'react';
import { Box } from '@mui/material';
import ImgBackground from '../atoms/ImgBackground';
import Quotes from '../molecules/Quotes';

function BackgroundContent() {
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
          title={(
            <span>
              Welcome
              <br />
              {' '}
              Back!
            </span>
          )}
          body="&ldquo;Don't just enjoy the beauty of nature, but also love nature by not littering or vandalizing it.&rdquo;"
          footer="-Fiersa Besari"
        />
      </Box>
      <ImgBackground imgSrc="/src/assets/imgLogin.png" />
    </Box>
  );
}

export default BackgroundContent;
