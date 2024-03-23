import React, { useState, useRef, useEffect } from 'react';
import { Card, Box, CardMedia, Typography, CardContent, IconButton, Alert } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import StopIcon from '@mui/icons-material/Stop';
import NoTracksAlert from './Alert';
import Loader from './Loader';
import TinderCard from 'react-tinder-card';
import { Link } from 'react-router-dom';

const MusicCard = ({ Music, likes }) => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedTracks, setLiked] = useState([]);
  const songRef = useRef(null);

  useEffect(() => {
    likes(likedTracks);
  }, [likedTracks, likes]);

  if (!Music.length) return (<Box sx={{ backgroundColor: '#ecfdf4' }}><Loader /></Box>);
  if (index >= Music.length) return <NoTracksAlert text="Przykro nam, dzisiejsze piosenki się skończyły.." />;

  const audio = Music[index].track.preview_url;

  const handleSwipe = () => {
    if (isPlaying) {
      songRef.current.pause();
      songRef.current.currentTime = 0;
      setIsPlaying(false);
    }
    setLiked(prevLikedTracks => [...prevLikedTracks, Music[index].track.id]);
    setIndex(prevIndex => prevIndex + 1);
  };

  const handleSkip = () => {
    if (isPlaying) {
      songRef.current.pause();
      songRef.current.currentTime = 0;
      setIsPlaying(false);
    }
    setIndex(prevIndex => prevIndex + 1);
  };

  const handlePlayPause = () => {
    setIsPlaying(prevIsPlaying => {
      if (!prevIsPlaying) {
        if (!audio) {
          console.log('This music does not have a preview');
          return false;
        }
        songRef.current = new Audio(audio);
        songRef.current.volume = 0.3;
        songRef.current.play();
      } else {
        songRef.current.pause();
        songRef.current.currentTime = 0;
      }
      return !prevIsPlaying;
    });
  };

  const onSwipe = (direction) => {
    if (direction === "left") {
      handleSkip();
    } else {
      handleSwipe();
    }
    console.log('You swiped: ' + direction)
  }

  return (
    <Box key={index}>
      <TinderCard onSwipe={onSwipe} swipeRequirementType="position" preventSwipe={['down', 'up']}>

        <Card sx={{ paddingBottom: '20px', display: 'flex', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)', flexDirection: 'column', maxWidth: { xs: '250px', md: '500px' }, maxHeight: { xs: '450px', md: '700px' }, justifyContent: 'center', textAlign: 'center', alignItems: 'center', borderRadius: '10px' }}>
          <CardMedia
            component="img"
            sx={{ maxWidth: '100%' }}
            image={Music[index].track.album.images[0].url}
            alt={Music[index].track.album.name}
          />


          <Box sx={{ display: 'flex', flexDirection: 'column' }} >
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {Music[index].track.album.name.slice(0, 50)}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                    {Music[index].track.album.artists && Music[index].track.album.artists.map((artist, index) => {

                      return (
                        <Link to={`Artist/${artist.id}`}>
                        {(index ? ', ': '') + artist.name}
                        </Link>
                      );
                    })}
                </Typography>

            </CardContent>

            <Box gap={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <IconButton onClick={handleSkip} sx={{ border: '8px solid #f3f3f3', backgroundColor: '#FF5864' }}>
                <CloseIcon sx={{ height: 30, width: 30, color: "#fff" }} />
              </IconButton>
              <IconButton onClick={handlePlayPause} sx={{ border: '10px solid #f3f3f3', backgroundColor: '#3A81F1' }}>
                {isPlaying ? (<StopIcon sx={{ height: 40, width: 40, color: '#fff' }} />) : (<PlayArrowIcon sx={{ height: 40, width: 40, color: '#fff' }} />)}
              </IconButton>
              <IconButton onClick={handleSwipe} sx={{ border: '10px solid #f3f3f3', backgroundColor: '#4FCE5D' }}>
                <FavoriteIcon sx={{ height: 30, width: 30, color: '#fff' }} />
              </IconButton>

            </Box>

            {!audio && (
              <Box sx={{ marginTop: '20px', marginBottom: '-20px', paddingBottom:"30px" }}>
                <Alert severity="error">
                  Przykro nam, lecz podgląd jest niedostępny!{' '}
                  <a href={`https://open.spotify.com/track/${Music[index].track.id}`}>Kliknij tutaj, aby przejść do Spotify.</a>
                </Alert>
              </Box>
            )}

          </Box>
        </Card>
      </TinderCard>
    </Box>
  );
};

export default MusicCard;
