import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Colors from './Colors';

function InputText({
  id, name, type, size, label, variant, value, onChange,
}) {
  return (
    <TextField
      id={id}
      name={name}
      type={type}
      size={size}
      label={label}
      variant={variant}
      value={value}
      onChange={onChange}
      fullWidth
      sx={{
        '& .MuiOutlinedInput-root': {
          borderColor: Colors.primary,
          backgroundColor: Colors.white,
          borderRadius: '12px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: Colors.primary,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: Colors.primary,
          },
        },
        '& .MuiInputLabel-root': {
          '&.Mui-focused': {
            color: Colors.primary,
          },
        },
      }}
    />
  );
}

InputText.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputText.defaultProps = {
  id: '',
  type: '',
  size: 'medium',
  variant: 'outlined',
  value: '',
  onChange: () => {},
};

export default InputText;
