import React from 'react'
import { Card, Box, CardMedia,Stack,Typography,CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import StopIcon from '@mui/icons-material/Stop';
import Alert from './Alert';
import Loader from './Loader';
import { useState } from 'react';
const MusicCard = ({Music}) => {
  const [index, setIndex] = useState(0);
  const [isPlayed, setIsPlayed] = useState(false);
  if (!Music.length) return <Loader />;
  if (index >= Music.length) return <Alert />;
  
  const handleSwipe = () => {
    setIndex(a => a + 1)
  }
  const handleDelete = () => {
    setIndex(a => a + 1)
  }
  const handlePlay = () => {

    setIsPlayed(a => !a);
    
  }

  return (
    
          <Box key={index}>
              <Card sx={{ display: 'flex',flexDirection: 'column', width:'400px',justifyContent:'center', textAlign:'center', alignItems:'center'}}>
              <CardMedia
                  component="img"
                  sx={{ width: '80%', marginTop:'50px'}}
                  image={Music[index].track.album.images[0].url}
                  alt={Music[index].track.album.name}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {Music[index].track.album.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {Music[index].track.album.artists[0].name}
                    </Typography>
                  </CardContent>
                  <Box gap={2} sx={{ display: 'flex', alignItems: 'center',justifyContent:'center', textAlign:'center' }}>
                    <IconButton onClick={handleDelete}>
                      <CloseIcon sx={{ height: 50, width: 50,color: "#FF5864" }}/>
                    </IconButton>
                    <IconButton onClick={handlePlay}>
                      {
                      isPlayed ? 
                      (<StopIcon sx={{ height: 60, width: 60, color:'#3A81F1'}}/> ) :  
                      (<PlayArrowIcon sx={{ height: 60, width: 60, color:'#3A81F1'}}/>)
                    }
                     
                    </IconButton>
                    <IconButton onClick={handleSwipe}>
                      <FavoriteIcon sx={{ height: 50, width: 50,color: "#4FCE5D" }}/>
                    </IconButton>
                  </Box>
                </Box>

              </Card>
          </Box>

  )
}

export default MusicCard