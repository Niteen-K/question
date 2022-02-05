import React from "react";
import { Grid, CardActionArea, Card, CardMedia, CardContent, Typography } from '@mui/material';
function CardsD() {
  return (
    <div>
      <CardActionArea
        sx={[{
          width: 230,
          height: 300,
          '&:hover': {
            boxShadow: '0 6px 12px 0 #263238',
            transform: 'scale(1.05)',
            borderRadius: '2px'
          },
        }]}  >
        <Card sx={[{
          width: 230, height: 300, background: 'linear-gradient(25deg, #b380b9 30%, #7575b8 90%)', color: 'black', cursor: "pointer",
        },]}>

          <CardMedia
            sx={[{
              width: 160,
              height: 150,
              margin: "auto auto auto auto"
            }]}
            component="img"
            image={require("../Images/structureddata.png")}
          />
          <CardContent sx={{ background: 'linear-gradient(45deg, #b380b9 30%, #7575b8 90%)', color: 'black' }} >
            <Typography variant="h5">Valorant</Typography>
            <Typography variant="body1">Kills</Typography>
            <Typography variant="body2" color="red" >Play!</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>)
}
export default CardsD;