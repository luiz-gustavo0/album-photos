import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PhotoModal } from './components/PhotoModal';
import { ModalPhotoProvider } from './hooks/useModalPhoto';
import { Home } from './pages/Home';

import './styles/global.scss';

function App() {
  return (
    <ModalPhotoProvider>
      <Header />
      <Home />
      {/* <Footer /> */}
      <PhotoModal />
    </ModalPhotoProvider>
  );
}

export default App;
