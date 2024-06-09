import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import DiscussionCardList from '../components/organisms/DiscussionCardList';
import Title from '../components/atoms/Title';
import PopularCardList from '../components/organisms/PopularCardList';

const discussionList = [
  {
    id: 'halo1',
    creator: 'Dhea Fesa',
    postDate: 'May 26, 2024',
    title: 'Example 1',
    content: 'Lorem ipsum dolor sit amet consectetur. Viverra vitae proin eget malesuada sollicitudin in at ridiculus purus. Velit morbi consequat nisi tempus et augue sem justo morbi ... ',
    category: 'category1',
    label: '1',
  },
  {
    id: 'halo2',
    creator: 'Dhea Fesa',
    postDate: 'May 26, 2024',
    title: 'Example 2',
    content: 'Lorem ipsum dolor sit amet consectetur. Viverra vitae proin eget malesuada sollicitudin in at ridiculus purus. Velit morbi consequat nisi tempus et augue sem justo morbi ... ',
    category: 'category2',
    label: '1',
  },
  {
    id: 'halo3',
    creator: 'Dhea Fesa',
    postDate: 'May 26, 2024',
    title: 'Example 3',
    content: 'Lorem ipsum dolor sit amet consectetur. Viverra vitae proin eget malesuada sollicitudin in at ridiculus purus. Velit morbi consequat nisi tempus et augue sem justo morbi ... ',
    category: 'category3',
    label: '1',
  },
  {
    id: 'halo4',
    creator: 'Dhea Fesa',
    postDate: 'May 26, 2024',
    title: 'Example 1',
    content: 'Lorem ipsum dolor sit amet consectetur. Viverra vitae proin eget malesuada sollicitudin in at ridiculus purus. Velit morbi consequat nisi tempus et augue sem justo morbi ... ',
    category: 'category4',
    label: '1',
  },
  {
    id: 'halo5',
    creator: 'Dhea Fesa',
    postDate: 'May 26, 2024',
    title: 'Example 2',
    content: 'Lorem ipsum dolor sit amet consectetur. Viverra vitae proin eget malesuada sollicitudin in at ridiculus purus. Velit morbi consequat nisi tempus et augue sem justo morbi ... ',
    category: 'category5',
    label: '1',
  },
  {
    id: 'halo6',
    creator: 'Dhea Fesa',
    postDate: 'May 26, 2024',
    title: 'Example 3',
    content: 'Lorem ipsum dolor sit amet consectetur. Viverra vitae proin eget malesuada sollicitudin in at ridiculus purus. Velit morbi consequat nisi tempus et augue sem justo morbi ... ',
    category: 'category6',
    label: '1',
  },
  {
    id: 'halo7',
    creator: 'Dhea Fesa',
    postDate: 'May 26, 2024',
    title: 'Example 3',
    content: 'Lorem ipsum dolor sit amet consectetur. Viverra vitae proin eget malesuada sollicitudin in at ridiculus purus. Velit morbi consequat nisi tempus et augue sem justo morbi ... ',
    category: 'category7',
    label: '1',
  },
  {
    id: 'halo8',
    creator: 'Dhea Fesa',
    postDate: 'May 26, 2024',
    title: 'Example 3',
    content: 'Lorem ipsum dolor sit amet consectetur. Viverra vitae proin eget malesuada sollicitudin in at ridiculus purus. Velit morbi consequat nisi tempus et augue sem justo morbi ... ',
    category: 'category8',
    label: '1',
  },
  {
    id: 'halo9',
    creator: 'Dhea Fesa',
    postDate: 'May 26, 2024',
    title: 'Example 3',
    content: 'Lorem ipsum dolor sit amet consectetur. Viverra vitae proin eget malesuada sollicitudin in at ridiculus purus. Velit morbi consequat nisi tempus et augue sem justo morbi ... ',
    category: 'category9',
    label: '1',
  },
];

const categories = [...new Set(discussionList.map((discussionItem) => discussionItem.category))];

function DiscussionPage() {
  return (
    <Box sx={{ pt: 2, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box py={6}>
          <Typography variant="h6" color="black">
            Popular Category
          </Typography>
          <PopularCardList categories={categories} />
        </Box>
        <Title title="Discussion Available" textAlign="left" />
        <DiscussionCardList discussions={discussionList} />
      </Container>
    </Box>
  );
}

export default DiscussionPage;
