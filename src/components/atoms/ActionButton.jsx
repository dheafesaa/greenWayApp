import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ActionButton({
  defaultIcon: DefaultIcon, activeIcon: ActiveIcon, label, color, onClick,
}) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) onClick(!isActive);
  };

  return (
    <Box display="flex" alignItems="center" onClick={handleClick} sx={{ cursor: 'pointer' }}>
      {isActive && ActiveIcon ? (
        <ActiveIcon color={color} style={{ marginRight: '4px', width: '20px', height: '20px' }} />
      ) : (
        <DefaultIcon color={color} style={{ marginRight: '4px', width: '20px', height: '20px' }} />
      )}
      <Typography variant="body1">{label}</Typography>
    </Box>
  );
}

ActionButton.propTypes = {
  defaultIcon: PropTypes.elementType.isRequired,
  activeIcon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

ActionButton.defaultProps = {
  color: 'inherit',
  activeIcon: null,
  onClick: null,
};

export default ActionButton;
