import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import MuiHeading from '../../atoms/Heading/MuiHeading'
import MuiNavLinks from '../../molecules/navigations/MuiNavLinks'

const MuiNavigationBar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <MuiHeading />
            <MuiNavLinks />
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavigationBar