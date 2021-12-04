import React from 'react';
import { PhotoItem } from './PhotoItem';

import './styles.scss';

export const PhotoList = ({ data }) => {
  return (
    <div className='photo-container'>
      {data.photos.map((photo) => (
        <PhotoItem photo={photo} key={photo.id} />
      ))}
    </div>
  );
};
