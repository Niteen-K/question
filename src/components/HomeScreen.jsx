import React from "react";
import { Box, Typography, Card, CardContent, Paper, Button } from '@mui/material';
import { borderColor } from "@mui/system";
import CardPattern from "./CardPattern";

function HomeScreen() {
  return (
    <div>
      <Box sx={{ marginX: '90.5%', width: '10%' }} >
        <Button variant="contained" sx={{ background: 'linear-gradient(45deg, #b380b9 30%, #7575b8 90%)', color: 'black', '&:hover': { background: 'linear-gradient(45deg, #b380b9 30%, #7575b8 90%)', color: 'black' } }}>
          Sign Out
        </Button>
      </Box>
      <Card component={Paper} elevation={15} sx={{
        borderRadius: "10px", width: 350, height: 100, margin: 'auto', marginTop: '1%', color: 'black',
        background: 'linear-gradient(45deg, #b380b9 30%, #7575b8 90%)', color: 'black'
      }}>
        <CardContent>
          <Typography variant="h4" sx={{ marginTop: '4.5%', marginLeft: '9%' }}>DSA Question(s)</Typography>
        </CardContent>
      </Card>

      <CardPattern />
    </div >
  );
}
export default HomeScreen;