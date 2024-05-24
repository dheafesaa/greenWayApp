import * as React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import { Box } from '@mui/joy';
import CardTestimoniItem from '../atoms/CardTestimoniItem';
import Title from '../atoms/Title';

const theme = extendTheme();

function Testimoni() {
  const fakeData = [
    {
      id: 1,
      avatarSrc: '/static/images/avatar/1.jpg',
      name: 'Josephine Blanton',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sapien in mauris imperdiet molestie. Ut blandit lectus lacinia, cursus magna nec, euismod ex.',
      job: 'Traveller',
    },
    {
      id: 2,
      avatarSrc: '/static/images/avatar/2.jpg',
      name: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sapien in mauris imperdiet molestie. Ut blandit lectus lacinia, cursus magna nec, euismod ex.',
      job: 'Traveller',
    },
    {
      id: 3,
      avatarSrc: '/static/images/avatar/3.jpg',
      name: 'Jane Smith',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sapien in mauris imperdiet molestie. Ut blandit lectus lacinia, cursus magna nec, euismod ex.',
      job: 'Traveller',
    },
    {
      id: 4,
      avatarSrc: '/static/images/avatar/1.jpg',
      name: 'Josephine Blanton',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sapien in mauris imperdiet molestie. Ut blandit lectus lacinia, cursus magna nec, euismod ex.',
      job: 'Traveller',
    },
    {
      id: 5,
      avatarSrc: '/static/images/avatar/2.jpg',
      name: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sapien in mauris imperdiet molestie. Ut blandit lectus lacinia, cursus magna nec, euismod ex.',
      job: 'Traveller',
    },
    {
      id: 6,
      avatarSrc: '/static/images/avatar/3.jpg',
      name: 'Jane Smith',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sapien in mauris imperdiet molestie. Ut blandit lectus lacinia, cursus magna nec, euismod ex.',
      job: 'Traveller',
    },
  ];

  return (
    <CssVarsProvider theme={theme}>
      <Box p={10}>
        <Title title="People Are Talking . . ." />
        <Box
          sx={{
            display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'space-between',
          }}
        >
          {fakeData.map((item) => (
            <CardTestimoniItem
              key={item.id}
              avatarSrc={item.avatarSrc}
              name={item.name}
              bio={item.bio}
              job={item.job}
            />
          ))}
        </Box>
      </Box>
    </CssVarsProvider>
  );
}

export default Testimoni;
