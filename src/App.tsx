import { Box, createTheme, ThemeProvider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './App.css';
import Header from './components/header/header.component';
import { motion } from 'framer-motion';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      primary: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      primary?: string;
    };
  }
}
  
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

function App() {
  
  return (
    <ThemeProvider theme={bodyTheme}>
      <div className="App">
        <Header />
        <Box
          sx={{
            width: '100%',
            height: 800,
            backgroundColor: 'primary.dark',
          }}
        >
          <div className='flex items-center flex-col'>
            <div>
              <img className='w-96 mt-52' src='/Rupee-logo-dark.png' alt='logo' />
            </div>
            <div>
              <h1 className='text-4xl text-white font-semibold mt-5'>Intelligent management of tax, accounting and payroll processes.</h1>
            </div>
            <div className='cursor-pointer '>
              <a href='#s1'>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                  <KeyboardArrowDownIcon sx={{ fontSize: 40, color: '#fff', marginTop: 20 }} />
                </motion.div>
              </a>
            </div>
          </div>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: 700,
            backgroundColor: 'primary.contrastText',
          }}
        >
          <div id='s1' />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
