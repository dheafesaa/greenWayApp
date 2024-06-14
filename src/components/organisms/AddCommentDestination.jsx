import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useInput from '../../hooks/useInput';
import InputText from '../atoms/InputText';

function AddCommentDestination({ onSubmit }) {
  const [content, onContentChange] = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(content);
    onContentChange('');
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      gap={2}
      py={4}
      onSubmit={handleSubmit}
    >
      <InputText
        id="content"
        name="content"
        label="What's on your mind?"
        value={content}
        onChange={onContentChange}
        multiline
        rows={7}
        required
      />
      <Button variant="contained" size="large" type="submit">Add Comment</Button>
    </Box>
  );
}

AddCommentDestination.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddCommentDestination;
