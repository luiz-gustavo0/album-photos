import React from 'react';
import { useParams } from 'react-router-dom';

export const AlbumPhotos = () => {
  const params = useParams();

  return <div>Meu album de: {params.album}</div>;
};
