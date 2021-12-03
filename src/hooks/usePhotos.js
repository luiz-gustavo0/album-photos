import { useQuery } from 'react-query';
import api from '../services/api';

export async function getPhotos(page) {
  const { data } = await api.get('/curated', {
    params: {
      page,
    },
  });

  return data;
}

export function usePhotos(page) {
  return useQuery(['photos', page], () => getPhotos(page), {
    staleTime: 1000 * 60 * 10, // ten minutes
  });
}
