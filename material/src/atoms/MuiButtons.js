import {Button} from "@mui/material";

const MuiButtons = (props) => {
  return (
    <Button variant="text">{props.children}</Button>
  )
}

export default MuiButtons;