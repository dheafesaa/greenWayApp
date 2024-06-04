import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import Button from '../atoms/Button';
import Colors from '../atoms/Colors';

function HamburgerMenu({ authUser, signOut }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Article', path: '/article' },
    { label: 'Destination', path: '/destination' },
    { label: 'About Us', path: '/about-us' },
  ];

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 7 }}>
      <AppBar position="fixed" sx={{ background: Colors.secondary.soft, boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" fontWeight="600">
            <span style={{ color: Colors.secondary.hard }}>Green</span>
            <span style={{ color: '#000' }}>Way</span>
          </Typography>
          {isMobile ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                {authUser ? (
                  <Button size="large" py={0.5} onClick={signOut} fontWeight={600}>
                    Sign Out
                  </Button>
                ) : (
                  <Button size="large" py={0.5} fontWeight={600}>Login</Button>
                )}
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                  sx={{ color: Colors.primary.soft }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: Colors.secondary.soft,
                  },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={handleMenuClose}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: Colors.primary.hard,
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    style={{ textDecoration: 'none', color: 'black', margin: '0 10px' }}
                  >
                    <Typography variant="subtitle1" color={Colors.primary.soft} fontWeight="600">
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </Box>
              {authUser ? (
                <Button py={0.5} onClick={signOut} fontWeight={600}>
                  Sign Out
                </Button>
              ) : (
                <Button to="/login" py={0.5} fontWeight={600}>Login</Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const authUserShape = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
};

HamburgerMenu.propTypes = {
  authUser: PropTypes.shape(authUserShape),
  signOut: PropTypes.func.isRequired,
};

HamburgerMenu.defaultProps = {
  authUser: null,
};

export default HamburgerMenu;
