import React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import { Box } from '@mui/joy';
import Title from '../atoms/Title';
import Video from '../molecules/Video';

const theme = extendTheme();

function Videos() {
  return (
    <CssVarsProvider theme={theme}>
      <Box p={10}>
        <Title title="Nature of Indonesia" />
        <Video />
      </Box>
    </CssVarsProvider>
  );
}

export default Videos;
