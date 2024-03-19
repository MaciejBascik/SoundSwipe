import React from 'react';
import { MusicCard, LikedFeedBar,LikedCard, Loader } from './index.js';
import { useState, useEffect } from 'react';
import {Box,Stack,Typography} from '@mui/material';

import { useLocation } from 'react-router-dom';

const Liked = () => {
  const location = useLocation();
  const data = location.state;

  const [receivedData, setReceivedData] = useState('');
  const handleChildData = (dataFromChild) => {
    setReceivedData(dataFromChild);
  };
  
  if(!data) return <Loader/>
  return (
<Stack sx={{ flexDirection: 'column', background:'#ecfdf4', minHeight:'90vh'}} >
    <LikedFeedBar/>
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2} >

        {
          data.map((item,idx) => (
            <LikedCard item={item} idx={idx}/>
          ))
        }

    

    </Stack>
</Stack>
  );
};

export default Liked;