import React from 'react';
import { MusicCard, LikedFeedBar } from './index.js';
import { useState, useEffect } from 'react';
import {Stack,Box,Typography} from '@mui/material';
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
      <Box sx={{ height: { sx: "auto", md: "92vh" },  backgroundColor:'#089364', px: { sx: 0, md: 1 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setSelectedPlaylist={setSelectedPlaylist}/>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2,backgroundColor:'#ecfdf4' }}>
        <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: "black" }}>
          {selectedCategory} <span style={{ color: "#089364" }}>tracks</span>
        </Typography>
        <LikedFeedBar likes={receivedData}/>
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={10} height='87vh'>
        <MusicCard Music={music} likes={handleChildData} />
        </Stack>
      </Box>
    </Stack>

</>
  );
};

export default Feed;