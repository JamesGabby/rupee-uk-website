import { Box } from '@mui/material';
import DownArrow from '../../../components/down-arrow/down-arrow.component'
import logo from '../../../images/Rupee-logo-dark.png'

const SectionOne = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 800,
        backgroundImage: 'url("https://imageio.forbes.com/specials-images/imageserve/5f1e55e18ba283c9ad86684a/0x0.jpg?format=jpg&width=1200")',
        backgroundSize: 'cover'
      }}
    >
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
            <h1 className='text-4xl text-white font-semibold mt-12'>Intelligent management of tax, accounting and payroll processes.</h1>
          </div>
          <div className='cursor-pointer '>
            <a href='#s1'>
              <DownArrow />
            </a>
          </div>
        </div>
      </Box>
    </Box>
  )
}

export default SectionOne