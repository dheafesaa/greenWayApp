import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DetailDestination from '../components/organisms/DetailDestination';
import { asyncReceiveDetailDestination } from '../states/detailDestination/action';

function DetailDestinationPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailDestination = useSelector((state) => state?.detailDestination);

  useEffect(() => {
    dispatch(asyncReceiveDetailDestination(id));
  }, [id, dispatch]);

  return (
    <Box sx={{ pt: 2, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {detailDestination && (
          <DetailDestination
            key={detailDestination.idDestination}
            {...detailDestination}
          />
        )}
      </Container>
    </Box>
  );
}

export default DetailDestinationPage;
