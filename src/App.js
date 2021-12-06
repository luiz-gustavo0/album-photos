import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PhotoModal } from './components/PhotoModal';
import { ModalPhotoProvider } from './hooks/useModalPhoto';

import './styles/global.scss';

function App() {
  return (
    <ModalPhotoProvider>
      <BrowserRouter>
        <Header />
        <Routes />
        {/* <Footer /> */}
        <PhotoModal />
      </BrowserRouter>
    </ModalPhotoProvider>
  );
}

export default App;
