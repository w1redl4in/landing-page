import React from 'react';
import { Helmet as HelmetL } from 'react-helmet';
import { useTheme } from '../../hooks/theme';
import GreenFavicon from '../../images/green-favicon.svg';
import BlueFavicon from '../../images/blue-favicon.svg';

const Helmet: React.FC = () => {
  const { theme } = useTheme();

  return (
    <HelmetL>
      <meta charSet="utf-8" />
      <title>dolla.</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <link
        rel="icon"
        href={theme === 'darkMode' ? GreenFavicon : BlueFavicon}
        sizes="50x50"
      />
    </HelmetL>
  );
};

export default Helmet;
