import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Title from '../components/atoms/Title';
import AddDiscussionInput from '../components/organisms/AddDiscussionInput';

function AddDiscussionPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Title title="Create New Discussion" textAlign="left" />
        <AddDiscussionInput />
      </Container>
    </Box>
  );
}

export default AddDiscussionPage;
