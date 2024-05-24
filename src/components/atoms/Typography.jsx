import * as React from 'react';
import PropTypes from 'prop-types';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function ResponsiveFontSizes({
  variant, fontWeight, color, sx, children,
}) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography
          variant={variant}
          fontWeight={fontWeight}
          color={color}
          gutterBottom
          sx={sx}
        >
          {children}
        </Typography>
      </ThemeProvider>
    </div>
  );
}

ResponsiveFontSizes.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2']),
  children: PropTypes.node.isRequired,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  sx: PropTypes.shape({}),
};

ResponsiveFontSizes.defaultProps = {
  variant: 'h6',
  fontWeight: '',
  color: '#000',
  sx: {}, // Default value for sx
};

export default ResponsiveFontSizes;
