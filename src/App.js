import React, { useState } from 'react'

import Header from './components/Header'
import Sobre from './components/Sobre'
import Projetoss from './components/Projeto'
import Contato from './components/Contato'
import Footer from './components/Footer'

import GlobalStyles from './styles/global'

import { ThemeProvider } from 'styled-components'

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import usePersistedState from './utils/usePersistedState'

import Routes from './routes'


function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }


  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      {/* <Routes /> */}
      <Sobre />
      <Projetoss />
      {/* <Contato /> */}
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
