import { createGlobalStyle } from 'styled-components';
import GreenVideo from '../videos/green.mp4';
import BlueVideo from '../videos/blue.mp4';

const Themes: { [key: string]: {} } = {
  darkMode: {
    colors: {
      primary: '#01bf71',
      secondary: '#010606',
      terciary: '#0d0d0d',
      background: '#000',
      gray: '#f9f9f9',
      lighterGray: '#f7f8fa',
      white: '#fff',
    },
    video: GreenVideo,
  },
  lightMode: {
    colors: {
      primary: '#01a3bf',
      secondary: '#010306',
      terciary: '#0d0d0d',
      background: '#000',
      gray: '#f9f9f9',
      lighterGray: '#f7f8fa',
      white: '#fff',
    },
    video: BlueVideo,
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
