import { Stack, TextField } from "@mui/material";

const MuiTextFields = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" />
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          InputProps={{ readOnly: true }}
        />
        <TextField
          label="Name"
          variant="outlined"
          color="error"
          size="small"
          disabled
        />
        <TextField
          label="Name"
          variant="filled"
          size="medium"
          type="password"
          helperText="do not share your password with anyone"
          error
        />
        <TextField
          label="Name"
          variant="standard"
          size="small"
          color="secondary"
          required
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextFields;
