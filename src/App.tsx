import React from 'react';
import { Header } from './components/Header/Header';
import { Box } from './App.styled';
import { Main } from './components/Main/Main';

function App() {
  return (
    <Box>
      <Header />
      <Main />
    </Box>
  );
}

export default App;
