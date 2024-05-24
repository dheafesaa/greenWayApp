import React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import ReactPlayer from 'react-player';

function Video() {
  return (
    <Card sx={{ width: '100%', minHeight: 600 }}>
      <CardCover>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=KbpPCWjoEFY"
          playing
          loop
          muted
          width="100%"
          height="100%"
          controls
        />
      </CardCover>
    </Card>
  );
}

export default Video;
