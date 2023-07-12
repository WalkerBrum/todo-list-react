
import { AppContextProvider } from './contexts/AppContext';

import { Header } from './components/Header';

import './global.css';
import { Home } from './pages/Home';

export const App = () => {

  return (
    <AppContextProvider>
      <Header />
      <Home />
    </AppContextProvider>
  )
}

export default App
