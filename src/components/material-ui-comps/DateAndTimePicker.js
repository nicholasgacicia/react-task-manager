import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

export default function DateAndTimePicker() {
  return (
    <>
      <FormControlLabel
        className="new-task-datetime m-3"
        control={
          <TextField
            id="datetime-local"
            label="Date & Time"
            type="datetime-local"
            defaultValue="2021-06-10T11:30"
            InputLabelProps={{
              shrink: true,
            }}
          />
        }
      />
    </>
  );
}
