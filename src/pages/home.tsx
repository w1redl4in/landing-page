import React from 'react';
import Hero from '../components/hero';
import Info from '../components/info';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import {
  greenInfoData1,
  greenInfoData2,
  greenInfoData3,
  greenInfoData4,
} from '../components/info/green-info';
import {
  blueInfoData1,
  blueInfoData2,
  blueInfoData3,
  blueInfoData4,
} from '../components/info/blue-info';
import { useTheme } from '../hooks/theme';

const Home: React.FC = () => {
  const { theme } = useTheme();
  return (
    <>
      <Sidebar />
      <Navbar />
      <Hero />
      {theme === 'darkMode' ? (
        <>
          <Info {...greenInfoData1} />
          <Info {...greenInfoData2} />
          <Info {...greenInfoData3} />
          <Info {...greenInfoData4} />
        </>
      ) : (
        <>
          <Info {...blueInfoData1} />
          <Info {...blueInfoData2} />
          <Info {...blueInfoData3} />
          <Info {...blueInfoData4} />
        </>
      )}
    </>
  );
};

export default Home;
