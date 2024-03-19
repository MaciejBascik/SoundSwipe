import React from 'react'
import { Card, Box, CardMedia,Stack,Typography,CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { getTrack } from '../utils/getSong';
import { getToken } from '../utils/Token';
import Loader from './Loader';
import { useState,useEffect } from 'react';

const LikedCard = ({item, idx}) => {
    const [song, setSong] = useState(null);
    useEffect(() => {
      getToken().then(response => {
        getTrack(response.access_token, item).then(res => {
          setSong(res)
        })
      });
      }, [setSong]);
      console.log()
    if (!song) return <Loader />;
  return (
    <>
      <Box key={idx}>
              <Card sx={{ display: 'flex',flexDirection: 'column', width: {xs:'150px', md:'200px'}, height: '250px',justifyContent:'center', textAlign:'center', alignItems:'center'}}>
              <CardMedia
                  component="img"
                  sx={{ width: '60%', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}
                  image={song.album.images[0].url}
                  alt={song.album.images[0].url}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="h6">
                      {song.album.name}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" >
                      {song.album.artists[0].name}
                    </Typography>

                  </CardContent>
                </Box>

              </Card>
          </Box>
          </>
  )
}

export default LikedCard