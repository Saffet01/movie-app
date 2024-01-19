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
    <Box sx={{display: "flex", gap:2, overflowX:"scroll"}}>
      {recommendList.map(movie => (
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{backgroundColor:"transparent"}}>
            <MovieCard movie={movie}></MovieCard>
          </Paper>
        </Grid>
      ))}
    </Box>
  )
}
