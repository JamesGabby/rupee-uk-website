import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import Header from './components/header/header.component';
import Home from './pages/home/Home';
import Accounting from './pages/accounting-firms/Accounting';
import Businesses from './pages/businesses/Businesses';
import { Route, Routes } from 'react-router-dom';
  
const bodyTheme = createTheme({
  palette: {
    primary: {
      main: '#5FDD9D',
      light: '#76F7BF',
      dark: '#12263A',
      contrastText: '#44ae44'
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={bodyTheme}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/business" element={<Businesses />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
