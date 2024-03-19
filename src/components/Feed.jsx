import React from 'react';
import { MusicCard, LikedFeedBar } from './index.js';
import { useState, useEffect } from 'react';
import {Stack} from '@mui/material';
import { getPlaylist } from '../utils/getPlaylist.js';


import { getToken } from '../utils/Token.js';
const Feed = () => {
  const [music, setMusic] =  useState([]);
  const [receivedData, setReceivedData] = useState('');
  const handleChildData = (dataFromChild) => {
    setReceivedData(dataFromChild);
  };

  useEffect(() => {
    getToken().then(response => {
      getPlaylist(response.access_token).then(res => {
        setMusic(res.items)
      })
    });
    }, [setMusic]);

  return (
<Stack sx={{ flexDirection: 'column', background:'#ecfdf4'}}>
    <LikedFeedBar likes={receivedData}/>
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2} height='87vh'>
      <MusicCard Music={music} likes={handleChildData} />
    </Stack>
</Stack>
  );
};

export default Feed;