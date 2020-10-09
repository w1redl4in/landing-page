import { createGlobalStyle } from 'styled-components';

const Themes: { [key: string]: {} } = {
  darkMode: {
    colors: {
      primary: '#01bf71',
      secondary: '#010606',
      terciary: '#0d0d0d',
      background: '#000',
      white: '#fff',
    },
  },
  lightMode: {
    colors: {
      primary: '#FCAB64',
      secondary: '#FCEFEF',
      terciary: '#7FD8BE',
      background: '#FCD29F',
      white: '#fff',
    },
  },
};

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

export { GlobalStyles, Themes };
