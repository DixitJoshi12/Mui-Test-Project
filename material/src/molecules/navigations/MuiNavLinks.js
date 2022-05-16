import React from 'react'
import { Stack } from '@mui/system'
import MuiButtons from '../../atoms/Buttons/MuiButtons'

const MuiNavLinks = () => {
  return (
    <Stack directions='row' spacing={2}>
        <MuiButtons>All Users</MuiButtons>
        <MuiButtons>My Places</MuiButtons>
        <MuiButtons>Add Place</MuiButtons>
        <MuiButtons>Authenticate</MuiButtons>
    </Stack>
  )
}

export default MuiNavLinks