//rafce
import React from "react";
import { Stack, Button } from "@mui/material";
// {IconButton} for icon with no text 
import PersonIcon from '@mui/icons-material/Person';

const MuiButton = () => {
  return (
    <Stack spacing={4}>
      {" "}
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction='row' display='block'>
        <Button variant="contained" startIcon={<PersonIcon />}>Start ICON</Button>
        <Button variant="contained" endIcon={<PersonIcon />}>END ICON</Button>
      </Stack>
      {/* changing the button color */}
      <Stack spacing={2} direction='row' display='block'>
        <Button variant="contained" color='secondary'  startIcon={<PersonIcon />}>Start ICON</Button>
        <Button variant="contained" color='success' size='small' endIcon={<PersonIcon />}>END ICON</Button>
      </Stack>
    </Stack>
  );
};

export default MuiButton;

// buttons properties
// orientiation='vertical' ,size,color,onClick={}

// ButtonGroup,ToggleButton,ToggleButtonGroup
