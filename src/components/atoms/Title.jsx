import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveFontSizes from './Typography';
import Colors from './Colors';

function Title({ title }) {
  return (
    <ResponsiveFontSizes variant="h3" fontWeight="600" color={Colors.primary.soft} sx={{ marginBottom: 4, textAlign: 'center' }}>
      {title}
    </ResponsiveFontSizes>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
