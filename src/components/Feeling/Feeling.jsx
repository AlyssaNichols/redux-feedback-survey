import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem, Box, FormControl } from "@mui/material";
import { Button } from "@mui/material";

export default function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector((store) => store.feedbackReducer);

  let feelingValue = feedback.feeling;

  // local state for input
  const [feeling, setFeeling] = useState(feelingValue);

  const handleBack = (event) => {
    event.preventDefault();
    // on click pushes back to home page
    history.push("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate data on form submission
    if (feeling === "") {
      return alert("Please enter a number between 1 and 5 and try again.");
    } else if (feeling > 5 || feeling < 1) {
      return alert("Please enter a number between 1 and 5 and try again.");
    } else {
      // if there is data, send to reducer
      dispatch({
        type: "SET_FEELING",
        payload: { property: "feeling", value: feeling },
      });
      // reset feeling
      setFeeling("");
      // on click moves to the next page
      history.push("/understanding");
    }
  };

  return (
    <>
      <h2>How are you feeling today?</h2>
      <br />
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
        <Button color="secondary" variant="contained" onClick={handleBack}>
          Back
        </Button>{" "}
        <Button color="secondary" variant="contained" onClick={handleSubmit}>
          Next
        </Button>
      </form>
    </>
  );
}
