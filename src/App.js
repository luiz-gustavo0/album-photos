import { usePhotos } from './hooks/usePhotos';

function App() {
  const { data, isLoading, error } = usePhotos();

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  console.log(data);
  return (
    <div className='App'>
      <h1>Página: {data.page}</h1>
    </div>
  );
}

export default App;
