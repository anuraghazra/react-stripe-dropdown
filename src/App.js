import React from 'react';
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './styles/GlobalStyles'

import { ThemeProvider } from 'styled-components';

const theme = {
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
      </ThemeProvider>
    </div>
  );
}

export default App;
