import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";


const TextInput = () => {
  return (
    <>
      <FormControlLabel
        className="new-task-title m-3"
        control={
          <TextField
            id="standard-full-width"
            label="Title"
            style={{ margin: 8 }}
            placeholder="Enter description"
            helperText="What do you need to get done?"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        }
      />
    </>
  );
}

export default TextInput;
