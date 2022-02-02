import React, { useState } from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import BackdropFilter from "react-backdrop-filter";
import CardsD from './CardsD';

function CardPattern() {

  return (
    <div>
      <div style={{ marginTop: '2%' }}>
        <Grid container spacing={11} alignContent={'center'}>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: '2%' }}>
        <Grid container spacing={11} alignContent={'center'}>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: '2%' }}>
        <Grid container spacing={11} alignContent={'center'}>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
          <Grid item xs={2.4} >
            <CardsD />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default CardPattern;