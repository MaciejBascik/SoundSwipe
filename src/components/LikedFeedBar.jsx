import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
import { Link } from 'react-router-dom';

const LikedFeedBar = () => {
  return (
    <Stack direction="row" spacing={2} sx={{p: 5, display:'flex', justifyContent:'center', textAlign:'center',height:'3vh'} }>
        <Link to='/liked'>
            <Typography variant="h5" sx={{color: "#fff" }}>
                Liked Tracks
            </Typography>
        </Link> 
        <Typography variant="h5" sx={{color: "#fff", fontSize:"25px" }}>|</Typography>
        <Link to='/'>
            <Typography variant="h5" sx={{color: "#fff"  }}>
                Feed
            </Typography>
        </Link> 
      </Stack>
  )
}

export default LikedFeedBar