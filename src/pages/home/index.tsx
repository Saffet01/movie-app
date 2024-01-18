import React, { ChangeEvent, SetStateAction, useState } from 'react'
import { Layout } from '../../layout'
import { Box, InputAdornment, InputBase, Paper, Typography } from '@mui/material'
import SearchIcon from "../../assets/icons/icon-search.svg"
import { Movie } from '../movie'
import { MovieTrendList } from '../../components/movie-list/movieTrendList'
import { MovieList } from '../../components/movie-list'

export const Home = () => {

  const [search, setSearch] = useState("");

  // e: ChangeEvent<HTMLInputElement> vs e: { target: { value: SetStateAction<string> } }
  // Her iki parametreyi de kullanmak mümkün
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(search);
  }

  return (
    <Layout>
      <Paper component="form" sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "default",
        padding: 1,
        backgroundColor: "#10141f",
        border: "none"
      }}>

        <InputBase placeholder='Search for movies or Tv series.' sx={{
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

      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Trending
              </Typography>
              <MovieTrendList trendingList={trendingList} />
            </Box>
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Recommended For You
              </Typography>
              <MovieList recommendList={recommendList} />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
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
