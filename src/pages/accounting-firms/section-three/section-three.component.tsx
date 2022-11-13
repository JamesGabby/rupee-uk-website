import { Box, Grid, Paper } from '@mui/material';
import { paperContent } from './paperContent';

const SectionThree = () => {
  return (
    <Box 
      sx={{
        width: '100%',
        backgroundColor: '#12263A',
        paddingBottom: 10
      }}
    >
      <Grid id='s1' container sx={{ flexGrow: 1 }} spacing={1}>
        <Grid item xs={12}>
          <h1 className='text-4xl text-white font-semibold mt-20 px-1'>Eliminate repetitive tasks and have more time to invest in your firm’s growth.</h1>
          <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 10 }}>
            {paperContent.map((value) => (
              <Grid key={value.id} item>
                <Paper sx={{ height: 335, width: 345, background: 'rgb(18, 38, 58, 0)', borderRadius: '10%' }}>
                  {value.icon}
                  <h1 className='text-2xl text-white font-semibold p-5'>{value.title}</h1>
                  <p className='text-l text-white px-5'>{value.description}</p>
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