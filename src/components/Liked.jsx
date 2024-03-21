import React from 'react';
import { LikedFeedBar,LikedCard } from './index.js';
import {Stack} from '@mui/material';
import NoTracksAlert from './Alert.jsx';
import { useLocation } from 'react-router-dom';

const Liked = () => {
  const location = useLocation();
  const data = location.state;

  if(!data.length) return (
    <>
    <Stack gap={10}sx={{ flexDirection: 'column', background:'#FEFEFE', minHeight:'90vh', alignItems:'center'}} >
    <LikedFeedBar/>
  <NoTracksAlert text="Brak polubionych utworów!"/> 
  </Stack>
  </>
  );

  return (
<Stack sx={{ flexDirection: 'column', background:'#FEFEFE', minHeight:'90vh'}} >
    <LikedFeedBar/>
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2} >
      {(data.length === 0) && ( <NoTracksAlert text="Brak polubionych utworów!"/> )}
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