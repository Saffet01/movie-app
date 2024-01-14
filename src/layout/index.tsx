import React, { ReactNode } from 'react'
import {Box} from "@mui/material"
import { Sidebar } from '../components/sidebar'

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <Box sx={{
        backgroundColor: "#10141F",
        display: "flex",
        flexDirection: {
            xs: "column",
            lg: "row"
        },
        color: "bisque",
        padding: 3,
        gap: 3,
        overflowY: "hidden",
        height: "100vh"
    }}>
        <Sidebar />
        <Box sx={{
            width: "100%",
            overflowY: "scroll"
        }}>
            {children}
        </Box>
    </Box>
  )
}
