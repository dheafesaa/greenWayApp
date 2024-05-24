import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveFontSizes from '../atoms/Typography';
import Colors from '../atoms/Colors';

function Quotes({ title, body, footer }) {
  return (
    <>
      <ResponsiveFontSizes variant="h3" fontWeight="600" color={Colors.white}>{title}</ResponsiveFontSizes>
      <ResponsiveFontSizes fontWeight="600" color={Colors.white}>{body}</ResponsiveFontSizes>
      <ResponsiveFontSizes fontWeight="600" color={Colors.white}>{footer}</ResponsiveFontSizes>
    </>
  );
}

Quotes.propTypes = {
  title: PropTypes.node.isRequired,
  body: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
};

export default Quotes;
