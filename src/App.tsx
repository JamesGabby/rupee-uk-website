import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import Header from './components/header/header.component';
import SectionOne from './pages/accounting-firms/section-one/section-one.component';
import SectionTwo from './pages/accounting-firms/section-two/section-two.component';
import SectionThree from './pages/accounting-firms/section-three/section-three.component';
import Footer from './components/footer/footer.component';
  
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
        <SectionOne />
        <SectionTwo />   
        <SectionThree />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
