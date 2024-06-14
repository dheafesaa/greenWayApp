import React from 'react';
import PropTypes from 'prop-types';
import AlertMUI from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function Alert({ title, body }) {
  return (
    <AlertMUI severity="warning">
      <AlertTitle>{title}</AlertTitle>
      {body}
    </AlertMUI>
  );
}

Alert.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired,

};

Alert.defaultProps = {
  title: '',
};

export default Alert;
