import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/global';
import Sidebar from './components/Sidebar';
import { MenuProvider } from './context/Menu';

function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Sidebar />
        <Navbar />
      </BrowserRouter>
    </MenuProvider>
  );
}

export default App;
