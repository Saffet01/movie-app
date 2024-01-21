import React, { useContext } from 'react';
import { MovieDataType } from '../../assets/data';
import { MovieContext } from '../../context/movie-context';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import moviesIcon from '../../assets/icons/icon-nav-movies.svg';
import tvSeriesIcon from '../../assets/icons/icon-nav-tv-series.svg';
import BookmarkIcon from '../icons/bookmark-icon';
import BookmarkEmptyIcon from '../icons/bookmark-empy-icon';

interface MovieCardProps {
  movie: MovieDataType
}

export const MovieCard = ({ movie }: MovieCardProps) => {

  const { dispatch } = useContext(MovieContext);

  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOOGLE BOOKMARK", id });
  }

  return (
    <Card variant='outlined' sx={{ bgcolor: "transparent", color: "white", my: 3, border: "none" }}>
      <CardContent sx={{ p: 0, position: "relative", }}>
        <Grid container spacing={1}>
          <Grid item>
            <img src={movie.thumbnail.regular.large} alt='' style={{ width: "300px", height: "200px", borderRadius: "8px" }} />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} alignItems="center">

              <Grid item>
                <Typography fontSize={10} fontWeight={300} color="white" aria-label='year of movie'>{movie.year}</Typography>
              </Grid>

              <Grid item>
                <Box sx={{
                  width: "4px",
                  height: "4px",
                  bg: "#BDBDBD",
                  borderRadius: "50%",
                }} />
                {/* {this box is just for giving some space between image and informations} */}
              </Grid>

              <Grid item>
                <img
                  src={movie.category === "Movies" ? moviesIcon : tvSeriesIcon}
                  alt=""
                  width={16}
                  height={16}
                />
              </Grid>

              <Grid item>
                <Box sx={{
                  width: "4px",
                  height: "4px",
                  bg: "#E0E0E0",
                  borderRadius: "50%",
                }} />
                {/* {this box is just for giving some space between image and informations} */}
              </Grid>

              <Grid item>
                <Typography fontSize={10} fontWeight={300} color="white" aria-label='movie category'>{movie.category}</Typography>
              </Grid>

              <Grid item>
                <Typography fontSize={10} fontWeight={300} color="white" aria-label='movie rating'>{movie.rating}</Typography>
              </Grid>

            </Grid>

            <Typography marginTop={1} fontSize={16} fontWeight={400} color="white" aria-label='movie title'>{movie.title}</Typography>

          </Grid>

          <Box style={{
            position: "absolute",
            top: 0,
            right: 0,
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
          }}>
            <Box sx={{
              p: "16px",
              backgroundColor: "black",
              borderRadius: "50%",
              cursor: "pointer",
              "&: hover": { opacity: 0.8 },
            }}
              onClick={() => handleToggleBookmark(movie.id)}
            >
              {movie.isBookmarked ? <BookmarkIcon fill={"white"} /> : <BookmarkEmptyIcon />}
            </Box>
          </Box>

        </Grid>
      </CardContent>
    </Card>
  )
}
