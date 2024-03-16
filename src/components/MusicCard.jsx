import React from 'react'
import { fetchFromApi } from '../utils/fetchFromApi';
import { useEffect,useState } from 'react';
import { Card, Box } from '@mui/material';
import Loader from './Loader';
const MusicCard = () => {
    const [music, setMusic] =  useState([]);
    const [swipe, setSwipe] = useState(false)
    useEffect(() => {
        fetchFromApi(`playlist_tracks/?id=37i9dQZF1DX35mEXECRn6o`)
        .then((data)=> { setMusic(data.items[0])})
    }, [setMusic])

    if(!music.track) return <Loader />;

  return (
    <Card>
    <h1 color='black'>
        {music.map((item, idx) => (
        <Box key={idx}>
          {item}
        </Box>
      ))}
      </h1>
    </Card>

  )
}

export default MusicCard