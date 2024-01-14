import React from 'react'
import { Layout } from '../../layout'
import { InputBase, Paper } from '@mui/material'


export const Home = () => {
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
        value={search} />

      </Paper>
    </Layout>
  )
}
