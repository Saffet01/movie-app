import React from 'react'
import { Box, Grid, Paper } from '@mui/material';
import { MovieDataType } from '../../assets/data';
import { MovieCard } from '../movie-card';

interface MovieListProps {
    recommendList: MovieDataType[];
}

export const MovieList = ({recommendList}:MovieListProps) => {
  console.log("Recommended List: ", recommendList);

  return (
    <Grid container spacing={2}>
      {recommendList.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieCard movie={item} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
