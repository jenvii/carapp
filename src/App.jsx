import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Carlist from './components/Carlist'
import { AppBar, Typography } from "@mui/material";


function App() {

  return (
    <>
      <AppBar position='relative'>
        <Typography variant='h6'>
          Car Shop
        </Typography>
      </AppBar>
      <Carlist />
    </>

  )
}

export default App
