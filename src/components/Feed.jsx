import React from 'react';
import { MusicCard, LikedFeedBar } from './index.js';
import { useState, useEffect } from 'react';
import {Box,Stack,Typography} from '@mui/material';
import { fetchFromApi } from '../utils/fetchFromApi.js';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Feed = () => {

  return (
<Stack sx={{ flexDirection:  'column'}}>

    <LikedFeedBar/>
    <MusicCard/>
</Stack>
  );
};

export default Feed;