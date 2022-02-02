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
          width: 230, height: 300, backgroundColor: "#e0e0e0", cursor: "pointer",
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
          <CardContent>
            <Typography variant="h5">Valorant</Typography>
            <Typography variant="body1">Kills</Typography>
            <Typography variant="body2" color="red" >Play!</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>)
}
export default CardsD;