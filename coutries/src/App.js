import './App.css';
import React from 'react';
import { ThemeProvider } from './data/Context/theme-context/theme-context';
import { AppRoutes } from './data/Routers/Routers';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header title={"Where in the World ?"} />
        <AppRoutes />
      </ThemeProvider>
    </>

  );
}

export default App;