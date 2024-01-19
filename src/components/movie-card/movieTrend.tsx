import React, { useContext } from 'react';
import { MovieDataType } from '../../assets/data';
import { MovieContext } from '../../context/movie-context';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import moviesIcon from '../../assets/icons/icon-nav-movies.svg';
import tvSeriesIcon from '../../assets/icons/icon-nav-tv-series.svg';
import BookmarkIcon from '../icons/bookmark-icon';
import BookmarkEmptyIcon from '../icons/bookmark-empy-icon';

interface MovieTrendCardProps {
    movie: MovieDataType
}

export const MovieTrendCard = ({ movie }: MovieTrendCardProps) => {

    const { dispatch } = useContext(MovieContext);

    const  handleToggleBookmark = (id: string) => {
        dispatch({type:"TOOGLE BOOKMARK", id});
    }

    return (
        <Card key={movie.id} elevation={0} style={{ backgroundColor: "transparent" }}>
            <CardContent style={{
                padding: 0,
                position: "relative",
                // overflowX: "scroll",
                display: "flex",
            }}>
                <img src={movie.thumbnail.regular.large} alt='' style={{ width: "300px", height: "200px", borderRadius: "12px" }} />
                <Box position="absolute" top={0} left={0} right={0} bottom={0} bgcolor="rgba(0,0,0,0.5)" borderRadius="12px" >
                    {/* {karanlık efekti vermek için oluşturduğum bir box, içerisinde birşey yok zaten 0.5 transparent} */}
                </Box>

                <Stack mt={6} spacing={0} position="absolute" bottom={0} right={0} left={0} p={4}>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                            <Typography fontSize={10} fontWeight={300} color="white" aria-label='year of movie'>{movie.year}</Typography>
                        </Grid>

                        <Grid item>
                            <Box sx={{
                                width: "16px",
                                height: "16px",
                                bg: "#E0E0E0",
                                borderRadius: "full",
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
                                width: "16px",
                                height: "16px",
                                bg: "#E0E0E0",
                                borderRadius: "full",
                            }} />
                            {/* {this box is just for giving some space between image and informations} */}
                        </Grid>


                        <Grid item>
                            <Typography fontSize={10} fontWeight={300} color="white" aria-label='movie category'>{movie.category}</Typography>
                        </Grid>

                        <Grid item>
                            <Typography fontSize={10} fontWeight={300} color="white" aria-label='movie rating'>{movie.rating}</Typography>
                        </Grid>

                        <Grid item>
                            <Box sx={{
                                width: "16px",
                                height: "16px",
                                bg: "#E0E0E0",
                                borderRadius: "full",
                            }} />
                            {/* {this box is just for giving some space between image and informations} */}
                        </Grid>
                    </Grid>

                    <Typography fontSize={16} fontWeight={400} color="white" aria-label='movie title'>{movie.title}</Typography>

                </Stack>

                            <Box style={{
                                position:"absolute",
                                top:0,
                                right:0,
                                display: "flex",
                                justifyContent: "flex-end",
                                padding: "16px",
                            }}>
                                <Box sx={{
                                    p:"16px",
                                    backgroundColor: "black",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                    "&: hover": {opacity: 0.8},
                                }}
                                onClick={() => handleToggleBookmark(movie.id)}
                                >
                                    {movie.isBookmarked ? <BookmarkIcon fill={"white"} /> : <BookmarkEmptyIcon />}
                                </Box>
                            </Box>
            </CardContent>
        </Card>
    )
}
