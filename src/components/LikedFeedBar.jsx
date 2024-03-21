import React from 'react'
import {Stack,Typography} from '@mui/material';
import { Link } from 'react-router-dom';

const LikedFeedBar = ({likes}) => {

  return (
    <Stack direction="row" gap={5} sx={{p: '3vh', display:'flex', justifyContent:'center', textAlign:'center',} }>
        <Link to='/SoundSwipe/liked' state={likes}>
            <Typography fontWeight="500"variant="h6"fontSize={18} sx={{color: "#000"}}>
                Liked Tracks
            </Typography>
        </Link> 

        <Link to='/SoundSwipe' state={likes}>
            <Typography fontWeight="500" variant="h6" fontSize={18} sx={{color: "#000"}}>
                Feed
            </Typography>
        </Link> 
      </Stack>
  )
}

export default LikedFeedBar