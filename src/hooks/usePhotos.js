import { useQuery } from 'react-query';
import api from '../services/api';

export async function getPhotos(query, page) {
  const { data } = await api.get(`/search?query=${query}`, {
    params: {
      page,
    },
  });

  return data;
}

export function usePhotos(query, page) {
  return useQuery([query, page], () => getPhotos(query, page), {
    staleTime: 1000 * 60 * 10, // ten minutes
  });
}
