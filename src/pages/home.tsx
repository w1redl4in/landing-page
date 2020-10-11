import React from 'react';
import Hero from '../components/hero';
import Info from '../components/info';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import {
  infoData1,
  infoData2,
  infoData3,
  infoData4,
} from '../components/info/info';

const Home: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Hero />
      <Info {...infoData1} />
      <Info {...infoData2} />
      <Info {...infoData3} />
      <Info {...infoData4} />
    </>
  );
};

export default Home;
