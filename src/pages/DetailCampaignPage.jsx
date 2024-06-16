import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Loader from '../components/atoms/Loader';
import DetailCampaign from '../components/organisms/DetailCampaign';
import { asyncReceiveDetailCampaign } from '../states/detailCampaign/action';

function DetailCampaignPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);
  const loading = useSelector((state) => state.loading.loading);
  const detailCampaign = useSelector((state) => state.detailCampaign);

  useEffect(() => {
    dispatch(asyncReceiveDetailCampaign(id));
  }, [id, dispatch]);

  return (
    <Box sx={{ pt: 2, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <DetailCampaign
            {...detailCampaign}
            authUser={authUser ? authUser.id : null}
          />
        )}
      </Container>
    </Box>
  );
}

export default DetailCampaignPage;
