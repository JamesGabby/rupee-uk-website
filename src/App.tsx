import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Home from './pages/home/Home';
import Accounting from './pages/accounting-firms/Accounting';
import Businesses from './pages/businesses/Businesses';
import Footer from './components/footer/footer.component';
import Copyright from './components/copyright/copyright.component';
  
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
      <HashRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/business" element={<Businesses />} />
          </Routes>
          <Footer />
          <Copyright />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
