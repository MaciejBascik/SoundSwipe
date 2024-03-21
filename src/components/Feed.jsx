import React from 'react';
import { MusicCard, LikedFeedBar } from './index.js';
import { useState, useEffect } from 'react';
import {Stack,Box} from '@mui/material';
import { getPlaylist } from '../utils/getPlaylist.js';
import SideBar from './Sidebar.jsx';
import { getToken } from '../utils/Token.js';

const Feed = () => {
  const [music, setMusic] =  useState([]);
  const [receivedData, setReceivedData] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Polish Trap/rap');
  const [selectedPlaylist, setSelectedPlaylist] = useState('78fl3l2j9qfX5cO9HUsvZ5');
  const handleChildData = (dataFromChild) => {
    setReceivedData(dataFromChild);
  };

  useEffect(() => {
    getToken().then(response => {
      getPlaylist(response.access_token, selectedPlaylist).then(res => {
        setMusic(res.items)
      })
    });
    }, [selectedPlaylist]);


    
  return (
    <>
    

<Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box sx={{ height: { sx: "auto", md: "100vh" }, background:'#FFFFFF'}}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setSelectedPlaylist={setSelectedPlaylist}/>
      
      </Box>
      <Box p={2} sx={{ overflowY: "auto",  flex: 2,backgroundColor:'#FEFEFE',boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.02)'}}>
        <LikedFeedBar likes={receivedData}/>
        <Stack direction="row" flexWrap="wrap" justifyContent="center">
        <MusicCard Music={music} likes={handleChildData} />
        </Stack>
      </Box>

    </Stack>

</>
  );
};

export default Feed;