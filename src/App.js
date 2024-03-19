import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material'
import {Navbar, Feed, MusicDetail, Liked, ProfileDetail} from  './components/index.js';

const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/SoundSwipe/' element={<Feed />} />
        <Route path='/SoundSwipe/MusicDetail/:id' element={<MusicDetail />} />
        <Route path='/SoundSwipe/liked/' element={<Liked />} />
        <Route path='/SoundSwipe/profile/:id' element={<ProfileDetail />} />
      </Routes>
    </Box>
  </BrowserRouter>
  );
}

export default App