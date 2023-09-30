import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem, Box, FormControl } from "@mui/material";
import { Button } from '@mui/material';

export default function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector((store) => store.feedbackReducer);

  let understandingReduxState;

  // conditional to set local react state and avoid undefined.
  // if editing a previous entry, will show current reducer state in input
  if (feedback.understanding) {
    console.log("understanding is", feedback.understanding);
    understandingReduxState = feedback.understanding;
  } else {
    understandingReduxState = "";
  }

  // local state for input
  const [understanding, setUnderstanding] = useState(understandingReduxState);

  // go back to previous page
  const handleBack = (event) => {
    event.preventDefault();

    history.push("/feeling");
  }; // end handleBack

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("in handleSubmit, understanding is: ", understanding);

    // validate data on form submission
    if (understanding === "") {
      return alert("Please enter a number between 1 and 5 before submission.");
    } else if (understanding > 5 || understanding < 1) {
      return alert("Please enter a number between 1 and 5 before submission.");
    } else {
      // if there is data, send local state to be stored in reducer
      dispatch({
        type: "SET_UNDERSTANDING",
        payload: { property: "understanding", value: understanding },
      });

      // reset local state on submission
      setUnderstanding("");
      // move user to the next page
      history.push("/support");
    } // end else
  }; // end handleSubmit

  return (
    <>
      <h2>How Well Are You Understanding the Content?</h2>
      <br />
      <form onSubmit={handleSubmit}>
        {/* <input
          type="number" 
          id="filled-basic" 
          variant="filled" 
          placeholder="1 - 5" 
          min="1"
          max="5"
          value={understanding}
          // forces the input value from string to number from submission
          onChange={event => setUnderstanding(Number(event.target.value))} 
        /> */}
        <Box sx={{ minWidth: 200 }}>
          <FormControl className="input">
            <InputLabel id="demo-simple-select-label">Understanding</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={understanding}
              label="Understanding"
              onChange={(event) => setUnderstanding(Number(event.target.value))}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br />
        <br />
        <Button color="secondary" variant="contained" onClick={handleBack}>Back</Button>{" "}
        <Button color="secondary" variant="contained" onClick={handleSubmit}>Next</Button>
      </form>
    </>
  );
}
