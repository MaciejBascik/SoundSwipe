import React from 'react'
import { Card, Box,Typography,CardContent,IconButton } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
const NoTracksAlert = ({text}) => {
  return (
          <Box>
              <Card sx={{ display: 'flex',flexDirection: 'column', width:'400px',justifyContent:'center', textAlign:'center', alignItems:'center'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                  <IconButton>
                      <DoneIcon sx={{ height: 50, width: 50,color: "#4FCE5D" }}/>
                    </IconButton>
                    <Typography component="div" variant="h5">
                      {text}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      Spróbuj odswieżyć aplikacje lub sprawdź inne kategorie!
                    </Typography>
                  </CardContent>
                </Box>

              </Card>
          </Box>

  )
}

export default NoTracksAlert