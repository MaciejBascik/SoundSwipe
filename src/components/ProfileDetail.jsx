import React, { useState, useEffect } from 'react';
import { LikedFeedBar } from './index.js';
import { Stack, Box, Card } from '@mui/material';
import ProfileCard from './ProfileCard.jsx';
import { Link } from 'react-router-dom';
import { getToken } from '../utils/Token.js';
import { useParams } from 'react-router-dom';
import { getProfile } from '../utils/getProfile.js';
import Loader from './Loader';

const ProfileDetail = () => {
  const [profile, setProfile] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getToken().then(response => {
      getProfile(response.access_token, id).then(res => {
        setProfile(res);
      });
    });
  }, [setProfile]);

  if (!profile.images) return (<Box sx={{ backgroundColor: '#ecfdf4' }}><Loader /></Box>);

  return (
    <>
      <Stack sx={{ backgroundColor:'red',flexDirection: { sx: "column", md: "row" }}}>
        <Box
          sx={{
            height: { sx: "auto", md: "100vh" },
            backgroundColor:'red',
            background: `url(${profile.images[0]})`,
            backgroundSize: 'cover',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            position: 'absolute',
            width: '100%',
            zIndex: -1,
          }}
        />
        <Box p={2} sx={{ overflowY: "auto", flex: 2, backgroundColor: '#FEFEFE', boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.02)' }}>
          <LikedFeedBar likes={{}} />
          <Stack direction="row" flexWrap="wrap" justifyContent="center">
            <ProfileCard profile={profile} />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default ProfileDetail;
