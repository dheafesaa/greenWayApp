import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import DetailDestination from '../components/organisms/DetailDestination';
import Alert from '../components/atoms/Alert';
import AddCommentDestination from '../components/organisms/AddCommentDestination';
import CommentDestinationCardList from '../components/organisms/CommentDestinationCardList';
import { asyncCreateCommentDestination, asyncReceiveDetailDestination } from '../states/detailDestination/action';

function DetailDestinationPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);
  const detailDestination = useSelector((state) => state.detailDestination);

  useEffect(() => {
    dispatch(asyncReceiveDetailDestination(id));
  }, [id, dispatch]);

  const onSubmitComment = (comment) => {
    dispatch(asyncCreateCommentDestination(detailDestination.idDestination, comment));
  };

  if (!detailDestination) {
    return 'Please wait';
  }

  return (
    <Box sx={{ pt: 2, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <DetailDestination
          {...detailDestination}
        />
        <Box py={4}>
          <Typography variant="h4">
            Comments
            {' '}
            (
            {detailDestination?.comments?.length}
            )
          </Typography>
          {authUser ? (
            <AddCommentDestination onSubmit={onSubmitComment} />
          ) : (
            <Alert title="Permission Required" body="Please login or create an account to start a new discussion!" />
          )}
          <CommentDestinationCardList
            comments={detailDestination.comments || []}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default DetailDestinationPage;
