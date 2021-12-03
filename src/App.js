import { useState } from 'react';
import { Pagination } from './components/Pagination';
import { usePhotos } from './hooks/usePhotos';

function App() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = usePhotos(page);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className='App'>
      <h1>Página: {data.page}</h1>
      <br />
      <Pagination
        totalRegisters={data.total_results}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
}

export default App;
