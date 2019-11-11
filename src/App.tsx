import React from 'react';
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './styles/GlobalStyles'

import { ThemeProvider, DefaultTheme } from 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primaryBlack: string
    lightGray: string
    gray: string
    gradient: string
  }
}

const theme: DefaultTheme = {
  primaryBlack: '#424770',
  lightGray: '#8898aa',
  gray: '#696e98',
  gradient: 'linear-gradient(45deg, #0ec3ff, #5533ff)'
}

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />

        <span className="credits">
          <a href="https://github.com/anuraghazra/react-stripe-dropdown">react-stripe-dropdown</a> | Made With React + FramerMotion;
        </span>
      </ThemeProvider>
    </div>
  );
}

export default App;
