import React from 'react';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

const Home: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
