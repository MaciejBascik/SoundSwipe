import React from 'react'
import {Stack,Typography} from '@mui/material';
import { Link } from 'react-router-dom';

const LikedFeedBar = ({likes}) => {

  return (
    <Stack direction="row" gap={5}sx={{p: '5vh', display:'flex', justifyContent:'center', textAlign:'center'} }>
        <Link to='/SoundSwipe/liked' state={likes}>
            <Typography variant="h6" sx={{color: "#032b20" }}>
                Liked Tracks
            </Typography>
        </Link> 

        <Link to='/SoundSwipe' state={likes}>
            <Typography variant="h6" sx={{color: "#032b20"  }}>
                Feed
            </Typography>
        </Link> 
      </Stack>
  )
}

export default LikedFeedBar