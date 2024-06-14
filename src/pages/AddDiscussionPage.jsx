import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Alert from '../components/atoms/Alert';
import Title from '../components/atoms/Title';
import AddDiscussionInput from '../components/organisms/AddDiscussionInput';
import { asyncCreateDiscussion } from '../states/discussionNew/action';

function AddDiscussionPage() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);

  const onAddDiscussion = (title, category, body) => {
    dispatch(asyncCreateDiscussion(title, category, body));
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {authUser ? (
          <>
            <Title title="Create New Discussion" textAlign="left" />
            <AddDiscussionInput addDiscussion={onAddDiscussion} />
          </>
        ) : (
          <Alert
            title="Permission Required"
            body="Please login or create an account to start a new discussion!"
          />
        )}
      </Container>
    </Box>
  );
}

export default AddDiscussionPage;
