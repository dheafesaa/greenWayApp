import React from 'react';
import {
  Box, InputBase, Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Colors from './Colors';

function Search() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 400,
          border: `2px solid ${Colors.primary.soft}`,
          borderRadius: '12px',
          p: 1,
        }}
      >
        <SearchIcon />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
        />
      </Paper>
    </Box>
  );
}

export default Search;
