import React, { useState } from 'react';
import { usePhotos } from '../../hooks/usePhotos';
import { Pagination } from '../Pagination';
import { PhotoList } from '../PhotoList';

export const Content = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = usePhotos(page);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;
  return (
    <main>
      <PhotoList data={data} />
      <Pagination
        totalRegisters={data.total_results}
        currentPage={page}
        onPageChange={setPage}
      />
    </main>
  );
};
