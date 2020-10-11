import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RootContext from './hooks';
import Home from './pages/home';
import Helmet from 'react-helmet';
import Logo from './images/dollar.svg';

const App: React.FC = () => {
  return (
    <RootContext>
      <Helmet>
        <meta charSet="utf-8" />
        <title>dolla.</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="icon" href={Logo} sizes="50x50" />
      </Helmet>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </RootContext>
  );
};

export default App;
