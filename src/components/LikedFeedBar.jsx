import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
import { Link } from 'react-router-dom';

const LikedFeedBar = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ height: { sx: "auto", md: "3vh" }, px: { sx: 0, md: 2}, mt: 5, display:'flex', justifyContent:'center'}}>
        <Link to='/liked'>
            <Typography variant="h5" sx={{color: "#fff",  height:'3vh' }}>
                Liked Tracks
            </Typography>
        </Link> 
        <Typography variant="h5" sx={{color: "#fff",height:'3vh', fontSize:"25px" }}>|</Typography>
        <Link to='/'>
            <Typography variant="h5" sx={{color: "#fff",height:'3vh'  }}>
                Feed
            </Typography>
        </Link> 
      </Stack>
  )
}

export default LikedFeedBar