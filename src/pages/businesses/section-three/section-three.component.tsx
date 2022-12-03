import { Box, Grid, Paper } from '@mui/material';
import { paperContent } from './paperContent';

const SectionThree = () => {
  return (
    <Box 
      sx={{
        width: '100%',
        backgroundColor: '#12263A',
        paddingBottom: 15
      }}
    >
      <Grid id='s1' container sx={{ flexGrow: 1 }} spacing={2}>
        <Grid item xs={12}>
          <h1 className='text-4xl text-white font-semibold mt-20 px-5'>Eliminate repetitive tasks and have more time to invest in your firm’s growth.</h1>
          <Grid container justifyContent="center" spacing={3} sx={{ marginTop: 0 }}>
            {paperContent.map((value) => (
              <Grid key={value.id} item>
                <Paper elevation={0} sx={{ height: 230, width: 300, background: 'rgb(18, 38, 58, 0)', borderRadius: '10%' }}>
                  <div className='mt-10'>{value.icon}</div>
                  <h1 className='text-3xl text-green-300 font-semibold p-5 w-full'>{value.title}</h1>
                  <p className='text-xl text-green-100 px-5 w-full'>{value.description}</p>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SectionThree