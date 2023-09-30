import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem, Box, FormControl } from "@mui/material";

export default function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector((store) => store.feedbackReducer);

  let feelingReduxState;

  // conditional to set local react state and avoid undefined.
  // if editing a previous entry, will show current reducer state in input
  if (feedback.feeling) {
    console.log("feeling is", feedback.feeling);
    feelingReduxState = feedback.feeling;
  } else {
    feelingReduxState = " ";
  }

  // local state for input
  const [feeling, setFeeling] = useState(feelingReduxState);

  // go back to previous page
  const handleBack = (event) => {
    event.preventDefault();

    history.push("/");
  }; // end handleBack

  // on FeelingRating form submission validate and dispatch appropriate data
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("in handleSubmit, feeling is: ", feeling);

    // validate data on form submission
    if (feeling === "") {
      return alert("Please enter a number between 1 and 5 and try again.");
    } else if (feeling > 5 || feeling < 1) {
      return alert("Please enter a number between 1 and 5 and try again.");
    } else {
      // if there is data, send local state to be stored in reducer
      dispatch({
        type: "SET_FEELING",
        payload: { property: "feeling", value: feeling },
      });
      setFeeling("");
      // move user to the next page
      history.push("/understanding");
    } // end else
  }; // end handleSubmit

  return (
    <>
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="number" 
          id="filled-basic" 
          label="Rate How You're Feeling" 
          variant="filled" 
          placeholder="1 - 5" 
          min="1"
          max="5"
          value={feeling}
          // forces the input value from string to number from submission
          onChange={event => setFeeling(Number(event.target.value))} 
        /> */}
        <Box sx={{ minWidth: 200 }}>
          <FormControl className="input">
            <InputLabel id="demo-simple-select-label">Feeling</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={feeling}
              label="Feeling"
              onChange={(event) => setFeeling(Number(event.target.value))}
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
        <button onClick={handleBack}>Back</button>{" "}
        <button onClick={handleSubmit}>Next</button>
      </form>
    </>
  );
}
