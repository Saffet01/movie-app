import React, { ChangeEvent, SetStateAction, useContext, useState } from 'react'
import { Layout } from '../../layout'
import { Box, InputAdornment, InputBase, Paper, Typography } from '@mui/material'
import SearchIcon from "../../assets/icons/icon-search.svg"
import { MovieList } from '../../components/movie-list'
import { MovieDataType } from '../../assets/data'
import { MovieContext } from '../../context/movie-context'



export const Movie = () => {

  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;


  const trendingList = movies.filter(item => item.isTrending === true);
  const recommendList = movies.filter(item => item.isTrending !== true);


  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    //console.log(search);
    const newList = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
    setSearchList(newList);
  }

  return (
    <Layout>
      <Box>
        <Paper component="form" sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "default",
          padding: 1,
          backgroundColor: "#10141f",
          border: "none"
        }}>

          <InputBase placeholder='Search for movies.' sx={{
            ml: 1,
            flex: 1,
            color: "white",
            borderBottom: "1px solid white",
          }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position='start' >
                <img src={SearchIcon} alt="search icon" width={20} height={20} />
              </ InputAdornment >
            }
          />

        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              Movies, Enjoy!
            </Typography>
            <MovieList recommendList={search === "" ? movies : searchList} />
          </Box>
        ) : (
          <Box data-testid='search-result-title' width="100%">
            <Typography>
              Found {searchList.length} results for "{search}"{""}
            </Typography>
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>

    </Layout >
  )
}
