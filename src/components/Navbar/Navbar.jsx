import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { AccountCircle, Menu, Brightness4, Brightness7 } from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import useStyles from './styles';

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px');
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => {}}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
        )}
        <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 /> }
        </IconButton>
        {!isMobile && 'Search...' }
        <div>
          {!isAuthenticated ? (
            <Button color="inherit" onClick={() => {}}>
              Login &nbsp; <AccountCircle />
            </Button>
          ) : (
            <Button
              color="inherit"
              component={Link}
              to="/profile/:id"
              className={classes.linkButton}
              onClick={() => {}}
            >
              {!isMobile && <>My Movies &nbsp;</>}
              <Avatar
                style={{ width: 30, height: 30 }}
                alt="Profile"
                src="https://st3.depositphotos.com/9998432/13335/v/380/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg?forcejpeg=true"
              />
            </Button>
          )}
        </div>
        {isMobile && 'Search...' }
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
