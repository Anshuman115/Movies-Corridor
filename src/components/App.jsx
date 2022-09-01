import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Actors, MovieInformation, Movies, Profile, Navbar } from '.';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// Steps for developing a react project
// 1. setup the project,
// 2. then add all the dependencies
// 3. setup all the pages using route and routes .
// 4. have browser router in index.js
// 5. Switch is replaced by routes and route
// requires an element parameter, and no need of exact.
// 6. get started with the components , make all
// the components folder and their jsx
// add all the components in their routes
// 7. make an .env file to stop dev error due to eslint
// 8. continue with components from top to bottom or like start from navbar.
// 9. Use material ui components for the navbar
// 10.
