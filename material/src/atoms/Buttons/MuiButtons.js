import {Button} from "@mui/material";

const MuiButtons = (props) => {
  return (
    <Button variant="text" color='secondary' size="large" color='inherit'>{props.children}</Button>
  )
}

export default MuiButtons;