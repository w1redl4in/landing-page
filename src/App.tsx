import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Theme from './styles/global';
import Sidebar from './components/Sidebar';
import RootContext from './hooks';

const App: React.FC = () => {
  return (
    <RootContext>
      <BrowserRouter>
        <Theme>
          <Sidebar />
          <Navbar />
        </Theme>
      </BrowserRouter>
    </RootContext>
  );
};

export default App;
