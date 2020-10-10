import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RootContext from './hooks';
import Home from './pages';

const App: React.FC = () => {
  return (
    <RootContext>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </RootContext>
  );
};

export default App;
