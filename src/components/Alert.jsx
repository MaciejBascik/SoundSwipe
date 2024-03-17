import React from 'react'
import { Card, Box, CardMedia,Stack,Typography,CardContent,IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
const Alert = () => {
  return (
          <Box>
              <Card sx={{ display: 'flex',flexDirection: 'column', width:'400px',justifyContent:'center', textAlign:'center', alignItems:'center'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                  <IconButton>
                      <DoneIcon sx={{ height: 50, width: 50,color: "#4FCE5D" }}/>
                    </IconButton>
                    <Typography component="div" variant="h5">
                      Przykro nam, dzisiejsze piosenki się skończyły..
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      Sprawdź inne kategorie!
                    </Typography>
                  </CardContent>
                </Box>

              </Card>
          </Box>

  )
}

export default Alert