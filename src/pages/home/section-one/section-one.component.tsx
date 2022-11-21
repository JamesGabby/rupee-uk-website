import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';
import DownArrow from '../../../components/down-arrow/down-arrow.component'
import logo from '../../../images/Rupee-logo-dark.png'
import home from '../../../images/home-mob.jpg'
import { useLayoutEffect } from 'react';

const SectionOne = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <Box
      sx={{
        width: '100%',
        height: 800,
        backgroundImage: `url(${home})`,
        backgroundSize: 'cover'
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rupee Solutions Home</title>
        <link rel="canonical" href="https://rupeesolutions.co.uk/" />
        <meta name="description" content="Full control over accounting, tax and payroll tasks. Automate deadlines and obligations." />
      </Helmet>
      <Box
        sx={{
          width: '100%',
          height: 800,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        <div className='flex items-center flex-col'>
          <div className='p-2'>
            <img className='w-96 mt-56' src={logo} alt='logo' />
            <p className='text-white text-right font-medium'>Solutions</p>
          </div>
          <div>
            <h1 className='text-4xl text-white font-semibold mt-12 px-10'>
              Full control over accounting, tax and payroll tasks. Automate deadlines and obligations.
            </h1>
          </div>
          <div className='cursor-pointer'>
            <a href='#/#s1'>
              <DownArrow />
            </a>
          </div>
        </div>
      </Box>
    </Box>
  )
}

export default SectionOne