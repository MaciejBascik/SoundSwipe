import React from 'react';
import { LikedFeedBar,LikedCard, Loader } from './index.js';
import { useState } from 'react';
import {Stack} from '@mui/material';
import NoTracksAlert from './Alert.jsx';
import { useLocation } from 'react-router-dom';

const Liked = () => {
  const location = useLocation();
  const data = location.state;

  const [receivedData, setReceivedData] = useState('');
  const handleChildData = (dataFromChild) => {
    setReceivedData(dataFromChild);
  };
  
  if(!data.length) return (
    <>

    <Stack sx={{ flexDirection: 'column', background:'#ecfdf4', minHeight:'90vh', alignItems:'center'}} >
    <LikedFeedBar/>
  <NoTracksAlert text="Brak polubionych utworów!"/> 
  </Stack>
  </>
  );

  return (
<Stack sx={{ flexDirection: 'column', background:'#ecfdf4', minHeight:'90vh'}} >
    <LikedFeedBar/>
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2} >
      {(data.length == 0) && ( <NoTracksAlert text="Brak polubionych utworów!"/> )}
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