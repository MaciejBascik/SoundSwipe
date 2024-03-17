import React from 'react';
import { MusicCard, LikedFeedBar } from './index.js';
import { useState, useEffect } from 'react';
import {Box,Stack,Typography} from '@mui/material';
import { fetchFromApi } from '../utils/fetchFromApi.js';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Feed = () => {
  const [music, setMusic] =  useState([]);
  const [swipe, setSwipe] = useState(false)
  useEffect(() => {
      fetchFromApi(`playlist_tracks/?id=37i9dQZF1DX35mEXECRn6o`)
      .then((data)=> { setMusic(data.items)})
  }, [setMusic])

  return (
<Stack sx={{ flexDirection: 'column'}}>
    <LikedFeedBar/>
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2} height='87vh' >
      <MusicCard Music={music}/>
    </Stack>
</Stack>
  );
};

export default Feed;