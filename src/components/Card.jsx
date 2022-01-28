import React from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import BackdropFilter from "react-backdrop-filter";

function Card() {
  return (
    <div>
      <div>
        <CardActionArea
          sx={[{
            width: 300,
            height: 125,

            '&:hover': {
              boxShadow: '0 6px 12px 0 #263238',
              transform: 'scale(1.1)',
            },
          }]} >
          <Card sx={[{
            width: 300,
            height: 125,
            display: "flex",
            cursor: "pointer",
          },]}>

            <Box sx={{ display: "flex", flexDirection: "column" }} >
              <CardContent>
                <Typography variant="h5">Valorant</Typography>
                <Typography variant="body1">Kills</Typography>
                <Typography variant="body2" color="red" >Play!</Typography>
              </CardContent>
            </Box>
            <CardMedia
              sx={{ height: 125, marginLeft: "3%" }}
              component="img"
              image="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/67cf271c-e9f8-4c9c-8b90-f542a8268052_2560x1440-e54afb0597bb192adc27b76629067318?h=270&resize=1&w=480"
            />
          </Card>
        </CardActionArea>
      </div>

      <div style={{ margin: "2%" }}  >
        <CardActionArea
          sx={[{
            width: 230,
            height: 300,
            '&:hover': {
              boxShadow: '0 6px 12px 0 #263238',
              transform: 'scale(1.1)',
            },
          }]}  >
          <Card sx={[{
            width: 230, height: 300, backgroundColor: "#e0e0e0", cursor: "pointer",
          },]}>

            <CardMedia
              sx={[{
                width: 250,
                height: 150,
              }]}
              component="img"
              image="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/67cf271c-e9f8-4c9c-8b90-f542a8268052_2560x1440-e54afb0597bb192adc27b76629067318?h=270&resize=1&w=480"
            />
            <CardContent>
              <Typography variant="h5">Valorant</Typography>
              <Typography variant="body1">Kills</Typography>
              <Typography variant="body2" color="red" >Play!</Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </div>

      {/* <CardActionArea
    sx={[{
      width: 230,
      height: 300,
      '&:hover': {
        boxShadow: '0 6px 12px 0 #263238',
        transform: 'scale(1.1)',
      },
    }]}  >
    <BackdropFilter

      filter={"blur(10px) sepia(50%)"}
    >
      <Card sx={[{
        width: 230, height: 300, backgroundColor: "red", cursor: "pointer",
      },]}>

        <CardMedia
          sx={[{
            width: 250,
            height: 150,
          }]}
          component="img"
          image="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/67cf271c-e9f8-4c9c-8b90-f542a8268052_2560x1440-e54afb0597bb192adc27b76629067318?h=270&resize=1&w=480"
        />
        <CardContent>
          <Typography variant="h5">Valorant</Typography>
          <Typography variant="body1">Kills</Typography>
          <Typography variant="body2" color="red" >Play!</Typography>
        </CardContent>
      </Card>
    </BackdropFilter>
  </CardActionArea> */}
    </div>
  );
}
export default Card;