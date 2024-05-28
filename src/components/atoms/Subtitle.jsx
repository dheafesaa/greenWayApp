import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveFontSizes from './Typography';

function Subtitle({ subtitle }) {
  return (
    <ResponsiveFontSizes
      variant="body1"
      sx={{ marginBottom: 6, textAlign: 'center' }}
    >
      {subtitle}
    </ResponsiveFontSizes>
  );
}

Subtitle.propTypes = {
  subtitle: PropTypes.node.isRequired,
};

export default Subtitle;
