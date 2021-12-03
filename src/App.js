import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import api from './services/api';

function App() {
  const { data, isLoading, error } = useQuery('photos', async () => {
    const { data } = await api.get('/curated');

    return data;
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  console.log(data);
  return (
    <div className='App'>
      <h1>Album de fotos</h1>
    </div>
  );
}

export default App;
