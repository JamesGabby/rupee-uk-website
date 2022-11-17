import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import Header from './components/header/header.component';
import SectionOne from './pages/accounting-firms/section-one/section-one.component';
import SectionTwo from './pages/accounting-firms/section-two/section-two.component';
import SectionThree from './pages/accounting-firms/section-three/section-three.component';
import FooterTwo from './components/footer-two/footer-two.component';
import Copyright from './components/copyright/copyright.component';
import Helmet from 'react-helmet';
  
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Rupee Solutions UK</title>
          <link rel="canonical" href="https://rupeesolutions.co.uk/" />
          <meta name="description" content="Intelligent management of tax, accounting and payroll processes." />
        </Helmet>
        <SectionOne />
        <SectionTwo />   
        <SectionThree />
        <FooterTwo />
        <Copyright />
      </div>
    </ThemeProvider>
  );
}

export default App;
