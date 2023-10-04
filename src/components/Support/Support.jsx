import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem, Box, FormControl } from "@mui/material";
import { Button } from "@mui/material";

export default function Support() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector((store) => store.feedbackReducer);

 
  let supportValue;

  if (feedback.support) {
    supportValue = feedback.support;
  } else {
    supportValue = " ";
  }
  // local state for input
  const [support, setSupport] = useState(supportValue);


  const handleBack = (event) => {
    event.preventDefault();
    // go back to previous page
    history.push("/understanding");
  }; // end handleBack

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("in handleSubmit, support is: ", support);

    // validate data
    if (support === "") {
      return alert("Please enter a number between 1 and 5 before submission.");
    } else if (support > 5 || support < 1) {
      return alert("Please enter a number between 1 and 5 before submission.");
    } else {
      // if there is data, send to reducer
      dispatch({
        type: "SET_FEEDBACK",
        payload: { property: "support", value: support },
      });
      // reset support
      setSupport("");
      // move user to the next page
      history.push("/comments");
    }
  };

  return (
    <>
      <h2>How well are you being supported?</h2>
      <br />
      <form onSubmit={handleSubmit}>
        {/* <input
          type="number" 
          id="filled-basic" 
          variant="filled" 
          placeholder="1 - 5" 
          min="1"
          max="5"
          value={support}
          // forces the input value from string to number from submission
          onChange={event => setSupport(Number(event.target.value))} 
        /> */}
        <Box sx={{ minWidth: 200 }}>
          <FormControl className="input">
            <InputLabel id="demo-simple-select-label">Support</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={support}
              label="Support"
              onChange={(event) => setSupport(Number(event.target.value))}
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
