import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useInput from '../../hooks/useInput';
import InputText from '../atoms/InputText';

function AddDiscussionInput({ addDiscussion }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [content, onContentChange] = useInput('');

  return (
    <Box component="form" display="flex" flexDirection="column" py={4} gap={2}>
      <InputText id="title" name="title" label="Title" value={title} onChange={onTitleChange} />
      <InputText id="category" name="category" label="Category" value={category} onChange={onCategoryChange} />
      <InputText
        id="content"
        name="email"
        label="Content"
        value={content}
        onChange={onContentChange}
        multiline
        rows={4}
      />
      <Button variant="contained" size="large" fullWidth onClick={() => addDiscussion({ title, category, content })}>Create</Button>
    </Box>
  );
}

AddDiscussionInput.propTypes = {
  addDiscussion: PropTypes.func.isRequired,
};

export default AddDiscussionInput;
