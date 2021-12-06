import React from 'react';

import { Routes as Router, Route } from 'react-router-dom';
import { AlbumPhotos } from '../pages/AlbumPhotos';
import { Home } from '../pages/Home';

export const Routes = () => {
  return (
    <Router>
      <Route exact path='/' element={<Home />} />
      <Route path='/photos/:album' element={<AlbumPhotos />} />
    </Router>
  );
};
