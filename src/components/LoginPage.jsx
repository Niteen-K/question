import { Button, Box, Paper } from '@mui/material';
import React from 'react';
import b2 from '../Images/b2.jpg';
function LoginPage() {
  return (
    <div>
      <div style={{
        backgroundImage: `url(${b2})`, height: '97vh', backgroundPosition: 'center', backgroundSize: 'cover',
      }} />
      <Box component={Paper} elevation={15} sx={{ width: 'fit-content', position: 'absolute', top: '50%', left: '50%', margin: '-25px 0 0 -25px' }} > <Button size='large' variant='contained' sx={{
        background: '#b380b9', '&:hover': {
          background: '#7575b8',
          transform: 'scale(1.5)'
        }
      }} >Sign In</Button></Box>
    </div>
  );
}
export default LoginPage;