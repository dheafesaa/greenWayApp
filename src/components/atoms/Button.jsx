import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonMUI from '@mui/material/Button';
import Colors from './Colors';

function Button({
  to, variant, size, type, onClick, py, my, fontWeight, fullWidth, children,
}) {
  return (
    <ButtonMUI
      component={Link}
      to={to}
      variant={variant}
      size={size}
      type={type}
      onClick={onClick}
      sx={{
        backgroundColor: Colors.primary.soft,
        fontWeight,
        textTransform: 'none',
        borderRadius: '12px',
        py: py !== undefined ? py : 1.7,
        my: my !== undefined ? my : 1,
        '&:hover': {
          backgroundColor: Colors.primary.hard,
        },
      }}
      fullWidth={fullWidth}
    >
      {children}
    </ButtonMUI>
  );
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  fontWeight: PropTypes.number,
  py: PropTypes.number,
  my: PropTypes.number,
  fullWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: 'contained',
  size: 'large',
  type: 'button',
  onClick: () => {},
  fontWeight: 500,
  py: 1.7,
  my: 1,
  fullWidth: false,
};

export default Button;
