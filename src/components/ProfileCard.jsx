import React, { useState, useRef, useEffect } from 'react';
import { Card, Box, CardMedia, Typography, CardContent, IconButton,Alert } from '@mui/material';

import NoTracksAlert from './Alert';


const ProfileCard = ({profile}) => {    



  
  return (
      <Card sx={{paddingBottom:'20px',display: 'flex', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',flexDirection: 'column',maxWidth: { xs: '250px', md: '700px' }, minHeight: { xs: '450px', md: '500px' }, justifyContent: 'center', textAlign: 'center', alignItems: 'center', borderRadius:'10px' }}>
        <CardMedia
          component="img"
          sx={{ maxWidth: '100%' }}
          image={profile.images[0].url}
          alt={profile.name}
        />
        
        
        <Box sx={{ display: 'flex', flexDirection: 'column' }} >
        <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h3" fontWeight={"bold"}>
              {profile.name.slice(0, 50)}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" sx={{mt:'5px'}}>
              Followers: {profile.followers.total.toLocaleString("pl")}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Genre: { profile.genres.map((item,idx) => {
                return (
                    (idx ? ', ': '') + item
                );
              }) }


            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Popularity: {profile.popularity}/100
            </Typography>
          </CardContent>
        </Box>
      </Card>
  );
};

export default ProfileCard;
