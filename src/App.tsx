import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Helmet from './components/helmet';
import RootContext from './hooks';
import Home from './pages/home';

const App: React.FC = () => {
  return (
    <RootContext>
      <BrowserRouter>
        <Helmet />
        <Home />
      </BrowserRouter>
    </RootContext>
  );
};

export default App;
