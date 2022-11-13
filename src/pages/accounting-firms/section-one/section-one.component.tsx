import { Box } from '@mui/material';
import DownArrow from '../../../components/down-arrow/down-arrow.component'
import logo from '../../../images/Rupee-logo-dark.png'

const SectionOne = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 800,
        backgroundColor: 'primary.dark'
      }}
    >
      <div className='flex items-center flex-col'>
        <div className='p-2'>
          <img className='w-96 mt-56' src={logo} alt='logo' />
          <p className='text-white text-right font-medium'>Solutions</p>
        </div>
        <div>
          <h1 className='text-4xl text-white font-semibold mt-12'>Intelligent management of tax, accounting and payroll processes.</h1>
        </div>
        <div className='cursor-pointer '>
          <a href='#s1'>
            <DownArrow />
          </a>
        </div>
      </div>
    </Box>
  )
}

export default SectionOne