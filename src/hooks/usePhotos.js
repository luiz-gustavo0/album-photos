import { useQuery } from 'react-query';
import api from '../services/api';

export async function getPhotos() {
  const { data } = await api.get('/curated');

  return data;
}

export function usePhotos() {
  return useQuery('photos', getPhotos, {
    staleTime: 1000 * 60 * 30, // thirty minutes
  });
}
