import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import { Button } from '@mui/material';

export default function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector((store) => store.feedbackReducer);

  let commentsReduxState = "";

  // conditional to set local react state and avoid undefined.
  // if editing a previous entry, will show current reducer state in input
  if (feedback.comments) {
    console.log("comments is", feedback.comments);
    commentsReduxState = feedback.comments;
  }
  // local state for input
  const [comments, setComments] = useState(commentsReduxState);

  // go back to previous page
  const handleBack = (event) => {
    event.preventDefault();
    history.push("/support");
  }; // end handleBack

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("in handleSubmit, comments is: ", comments);

    dispatch({
      type: "SET_COMMENTS",
      payload: { property: "comments", value: comments },
    });

    // reset state
    setComments("");
    history.push("/reviewFeedback");
  };

  return (
    <>
      <h2>Any comments you want to leave?</h2>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text" 
          id="filled-basic" 
          variant="filled" 
          placeholder="Any Comments?" 
          value={comments}
          onChange={event => setComments(event.target.value)} 
        /> */}
        <Box className="commentsField"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
        >
        <TextField
          className="commentInput"
          label="Comments"
          helperText=" Leave any additional comments"
          value={comments}
          onChange={event => setComments(event.target.value)}
        />
        </Box>
        <br />
        <br />
        <Button color="secondary" variant="contained" onClick={handleBack}>Back</Button>{" "}
        <Button color="secondary" variant="contained" onClick={handleSubmit}>Next</Button>
      </form>
    </>
  );
}
