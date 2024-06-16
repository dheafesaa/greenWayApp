import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Alert from '../components/atoms/Alert';
import Title from '../components/atoms/Title';
import AddDiscussionInput from '../components/organisms/AddDiscussionInput';
import { asyncCreateDiscussion } from '../states/discussionNew/action';
import { asyncReceiveDiscussions } from '../states/discussions/action';

function AddDiscussionPage() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);

  const onAddDiscussion = async (title, category, body) => {
    try {
      await dispatch(asyncCreateDiscussion(title, category, body));
      dispatch(asyncReceiveDiscussions());
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to create discussion:', error);
    }
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
