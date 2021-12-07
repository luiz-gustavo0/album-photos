import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';
import { PhotoList } from '../../components/PhotoList';
import { usePhotos } from '../../hooks/usePhotos';
import { Loading } from '../../Loading';

export const AlbumPhotos = () => {
  const { album } = useParams();

  const [page, setPage] = useState(1);
  const { data, isLoading, error } = usePhotos(album, page);

  if (isLoading) return <Loading />;

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
