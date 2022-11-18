import { Box, Grid, Paper } from '@mui/material';
import { paperContent } from './paperContent';
import DiamondIcon from '@mui/icons-material/Diamond';

const SectionTwo = () => {
  return (
    <Box 
      sx={{
        width: '100%',
        backgroundColor: '#000',
        paddingBottom: 10
      }}
    >
      <Grid id='/s1' container sx={{ flexGrow: 1 }} spacing={1}>
        <Grid item xs={12}>
          <h1 className='text-4xl text-green-100 font-semibold mt-20 px-1'>Increase the performance of your accounting firm.</h1>
          <div className='flex items-center flex-col px-10'>
            <span className='inline-flex'>
              <DiamondIcon sx={{ fontSize: 40, color: '#44ae44', marginTop: 7, marginRight: 3 }} />
              <h3 className='text-2xl text-green-100 font-normal mt-14'>Save time and optimise your results by monitoring all your clients in one place.</h3>
            </span>
            <span className='inline-flex'>
              <DiamondIcon sx={{ fontSize: 40, color: '#44ae44', marginTop: 4, marginRight: 3 }} />
              <h3 className='text-2xl text-green-100 font-normal mt-8'>Have full control over payroll, tax and accounting tasks.</h3>
            </span>
            <span className='inline-flex'>
              <DiamondIcon sx={{ fontSize: 40, color: '#44ae44', marginTop: 4, marginRight: 3 }} />
              <h3 className='text-2xl text-white font-normal mt-8'>Never miss a deadline again.</h3>
            </span>
          </div>
          <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 5 }}>
            {paperContent.map((value) => (
              <Grid key={value.id} item>
                <Paper sx={{ height: 340, width: 250, background: '#44ae44', borderRadius: '10%' }}>
                  <Paper sx={{ height: 335, width: 245, background: '#000000', borderRadius: '10%', opacity: .8 }}>
                    {value.icon}
                    <h1 className='text-2xl text-white font-semibold p-5'>{value.title}</h1>
                    <p className='text-l text-white px-5'>{value.description}</p>
                  </Paper>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SectionTwo