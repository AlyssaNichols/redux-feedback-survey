import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem, Box, FormControl } from "@mui/material";
import { Button } from "@mui/material";

export default function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector((store) => store.feedbackReducer);

  let underStandingValue;

  let understandingValue;

  if (feedback.understanding) {
    understandingValue = feedback.understanding;
  } else {
    understandingValue = " ";
  }
  // local state for input
  const [understanding, setUnderstanding] = useState(understandingValue);

  const handleBack = (event) => {
    event.preventDefault();
    // go back to previous page
    history.push("/feeling");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate data
    if (understanding === "") {
      return alert("Please enter a number between 1 and 5 before submission.");
    } else if (understanding > 5 || understanding < 1) {
      return alert("Please enter a number between 1 and 5 before submission.");
    } else {
      // if there is data, send to reducer
      dispatch({
        type: "SET_FEEDBACK",
        payload: { property: "understanding", value: understanding },
      });
      // reset understanding
      setUnderstanding("");
      // move user to the next page
      history.push("/support");
    }
  };

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
        <Button
          style={{ backgroundColor: "#6F4255" }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#AA6582";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#6F4255";
          }}
          variant="contained"
          onClick={handleBack}
        >
          Back
        </Button>{" "}
        <Button
          style={{ backgroundColor: "#6F4255" }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#AA6582";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#6F4255";
          }}
          variant="contained"
          onClick={handleSubmit}
        >
          Next
        </Button>
      </form>
    </>
  );
}
