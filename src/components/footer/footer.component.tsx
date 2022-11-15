import { Box, Grid, Paper } from '@mui/material';
import { paperContent } from './paperContent';
import { useState } from 'react';

const Footer = () => {
  const [isNotWeb, setIsNotWeb] = useState(false);

  const reSize = () =>
    window.innerWidth < 700 ? setIsNotWeb(true) : setIsNotWeb(false);

  window.addEventListener('resize', reSize);
  return (
    <Box 
      sx={{
        width: '100%',
        backgroundColor: '#000000',
        height: isNotWeb ? '12rem' : '7rem',
        alignContent: 'center'
      }}
    >
      <Grid id='s1' container sx={{ flexGrow: 1 }} spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" spacing={2}>
            {paperContent.map((value) => (
              <Grid key={value.id} item>
                <Paper elevation={0} sx={{ height: 30, width: 200, background: 'rgb(18, 38, 58, 0)', borderRadius: '10%' }}>
                  <h1 className='text-l text-white font-semibold p-5'>{value.title}</h1>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer;